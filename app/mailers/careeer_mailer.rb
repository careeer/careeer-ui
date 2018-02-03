class CareeerMailer < ApplicationMailer
  default from: 'Careeer.me <support@careeer.me>'

  def trial_end(email, client)
    @name = client.name.split.first
    @url = "https://www.careeer.me/" + client.slug
    start_time = DateTime.now + ENV['TRIAL_END_EMAIL_DELAY'].to_f.hours

    mail(to: email, subject: 'Well done! You completed your free trial', date: start_time)
  end

  def welcome(email, client)
    @name = client.name.split.first
    @url = "https://medium.com/@careeer.me/why-i-built-careeer-me-ff5869503d1e"

    mail(to: email, from: 'Anya Iverova <anya@careeer.me>', subject: 'Free trial started! (Ask me anything)')
  end

  def payment_confirmation(email, client, plan_name, plan_cost, last4, next_transaction)
    @name = client.name.split.first
    @plan_name = plan_name
    @last4 = last4
    @plan_cost = plan_cost
    @next_transaction = next_transaction
    @url = "https://www.careeer.me/" + client.slug + "/settings"
    subjectMessage = 'Payment confirmation - %s' % [@plan_name]
    mail(to: email, subject: subjectMessage)
  end

  def subscription_renewal(email, client, plan_name, plan_cost, last4, next_transaction)
      @name = client.name.split.first
      @plan_name = plan_name
      @last4 = last4
      @plan_cost = plan_cost
      @next_transaction = next_transaction
      @url = "https://www.careeer.me/" + client.slug + "/settings"
      subjectMessage = 'Subscription renewal - %s' % [@plan_name]
      mail(to: email, subject: subjectMessage)
  end

  def upgrade_subscription(email, client, plan_name, prorated_cost, plan_cost, last4, next_transaction)
    @name = client.name.split.first
    @plan_name = plan_name
    @last4 = last4
    @plan_cost = plan_cost
    @next_transaction = next_transaction
    @prorated_cost = prorated_cost

    mail(to: email, subject: 'Subscription upgraded')
  end

  def downgrade_subscription(email, client, plan_name, plan_cost, last4, next_transaction)
    @name = client.name.split.first
    @plan_name = plan_name
    @last4 = last4
    @plan_cost = plan_cost
    @next_transaction = next_transaction

    mail(to: email, subject: 'Subscription downgraded')
  end

  def change_payment(email, client, last4)
    @name = client.name.split.first
    @last4 = last4

    mail(to: email, subject: 'Payment information changed')
  end
end
