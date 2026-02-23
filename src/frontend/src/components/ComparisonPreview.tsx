import { Card } from '@/components/ui/card';

export default function ComparisonPreview() {
  return (
    <Card className="p-8 animate-scale-in">
      <h3 className="text-2xl font-bold mb-6">Preview Your Animation</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Original
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-border">
            <img
              src="/assets/generated/comparison-demo.dim_800x450.png"
              alt="Original video"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-sm font-semibold text-primary uppercase tracking-wide">
            Animated
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-primary shadow-glow">
            <img
              src="/assets/generated/comparison-demo.dim_800x450.png"
              alt="Animated video"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
              HD Quality
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
