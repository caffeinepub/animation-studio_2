import { Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out our service',
    features: [
      '3 videos per month',
      '720p quality',
      'Basic styles',
      'Watermark included',
      'Email support'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For content creators and professionals',
    features: [
      '50 videos per month',
      '1080p HD quality',
      'All 6 styles',
      'No watermark',
      'Priority support',
      'Custom intensity control'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Studio',
    price: '$99',
    period: 'per month',
    description: 'For teams and agencies',
    features: [
      'Unlimited videos',
      '4K quality',
      'All styles + custom',
      'No watermark',
      '24/7 priority support',
      'API access',
      'Team collaboration',
      'Custom branding'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function PricingPlans() {
  return (
    <section id="pricing" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your animation needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`p-8 relative hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in ${
                plan.popular ? 'border-2 border-primary shadow-glow' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary">
                  Most Popular
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-secondary hover:shadow-glow'
                    : ''
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
