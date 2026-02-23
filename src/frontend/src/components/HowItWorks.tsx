import { Card } from '@/components/ui/card';

const steps = [
  {
    number: 1,
    title: 'Upload',
    description: 'Upload your video in MP4, MOV, or AVI format',
    image: '/assets/generated/step-upload.dim_128x128.png'
  },
  {
    number: 2,
    title: 'Choose Style',
    description: 'Select from 6 unique animation styles',
    image: '/assets/generated/step-style.dim_128x128.png'
  },
  {
    number: 3,
    title: 'Animate',
    description: 'Our AI transforms your video with stunning effects',
    image: '/assets/generated/step-animate.dim_128x128.png'
  },
  {
    number: 4,
    title: 'Download',
    description: 'Get your animated video in HD quality',
    image: '/assets/generated/step-download.dim_128x128.png'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your videos into animations in just four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={step.number}
              className="p-6 text-center hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
