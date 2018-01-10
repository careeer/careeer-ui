Stripe.api_key = Rails.application.secrets.stripe_private_key
StripeEvent.signing_secret = Rails.application.secrets.stripe_signing_secret

StripeEvent.configure do |events|
  events.subscribe "charge.succeeded", Webhooks::ChargeSucceeded.new
end
