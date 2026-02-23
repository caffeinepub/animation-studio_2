import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Content Creator',
    content: 'AnimateAI has completely transformed my video content. The cartoon style is perfect for my YouTube channel, and my engagement has doubled!',
    rating: 5,
    initials: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    content: 'We use AnimateAI for all our explainer videos. The quality is outstanding and it saves us thousands in animation costs.',
    rating: 5,
    initials: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Educator',
    content: 'The whiteboard animation style is perfect for my educational content. My students love the animated lessons!',
    rating: 5,
    initials: 'ER'
  },
  {
    name: 'David Park',
    role: 'Social Media Manager',
    content: 'Quick, easy, and professional results every time. The anime style is a hit with our audience!',
    rating: 5,
    initials: 'DP'
  },
  {
    name: 'Lisa Thompson',
    role: 'Video Producer',
    content: 'The quality and variety of styles is impressive. AnimateAI has become an essential tool in our production workflow.',
    rating: 5,
    initials: 'LT'
  },
  {
    name: 'James Wilson',
    role: 'Entrepreneur',
    content: 'Perfect for creating engaging product demos. The 3D Pixar style makes our products look amazing!',
    rating: 5,
    initials: 'JW'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Loved by Creators Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our users are saying about AnimateAI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="p-6 hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-sm mb-4 text-muted-foreground">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
