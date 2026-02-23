import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What video formats do you support?',
    answer: 'We support MP4, MOV, and AVI video formats. Your videos can be up to 500MB in size for the best processing experience.'
  },
  {
    question: 'How long does the animation process take?',
    answer: 'Processing time depends on your video length and selected quality. Most videos are ready in 5-15 minutes. Pro and Studio users get priority processing for faster results.'
  },
  {
    question: 'Can I use the animated videos commercially?',
    answer: 'Yes! All Pro and Studio plan users have full commercial rights to their animated videos. Free plan videos include a watermark and are for personal use only.'
  },
  {
    question: 'What animation styles are available?',
    answer: 'We offer 6 unique styles: Cartoon, Anime, Pixar-like 3D, Whiteboard Animation, Comic Book, and Watercolor. Each style can be customized with intensity controls.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! Our Free plan lets you create 3 videos per month at 720p quality. Pro users get a 7-day free trial with full access to all features.'
  },
  {
    question: 'What quality will my animated video be?',
    answer: 'Free plan: 720p, Pro plan: 1080p HD, Studio plan: up to 4K quality. All plans maintain the aspect ratio of your original video.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely! You can cancel your subscription at any time from your account settings. You\'ll continue to have access until the end of your billing period.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about AnimateAI
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-effect px-6 rounded-lg animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
