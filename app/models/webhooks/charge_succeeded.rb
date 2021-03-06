module Webhooks
  class ChargeSucceeded
    def call(event)
      charge = event.data.object

      user = User.find_by(stripe_id: charge.customer)

      c = user.charges.where(stripe_id: charge.id).first_or_create
      c.update(
        amount: charge.amount,
        card_brand: charge.source.brand,
        card_last4: charge.source.last4,
        card_exp_month: charge.source.exp_month,
        card_exp_year: charge.source.exp_year
      )

      readable_amount = number_to_currency((charge.amount.to_i) / 100.00)

      if !charge.invoice.blank?
        user.update(subscription_status: "active")

        subscription = Stripe::Subscription.retrieve(user.stripe_subscription_id)

        next_transaction = Time.zone.at(subscription.current_period_end).strftime("%B %d, %Y")

        CareeerMailer.payment_confirmation(
          user.email,
          user.clients.first,
          subscription.plan.name,
          readable_amount,
          charge.source.last4,
          next_transaction
        ).deliver
      else
        CareeerMailer.one_time_payment(
          user.email,
          user.clients.first,
          readable_amount,
          charge.source.last4,
          charge.description
        ).deliver
      end


    end
  end
end
