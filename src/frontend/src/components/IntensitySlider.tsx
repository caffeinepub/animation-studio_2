import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

interface IntensitySliderProps {
  value: number;
  onChange: (value: number) => void;
}

export default function IntensitySlider({ value, onChange }: IntensitySliderProps) {
  const getIntensityLabel = (val: number) => {
    if (val < 33) return 'Subtle';
    if (val < 66) return 'Moderate';
    return 'Intense';
  };

  return (
    <Card className="p-8 animate-scale-in">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Animation Intensity</h3>
          <div className="px-4 py-2 bg-primary/10 rounded-lg">
            <span className="text-primary font-semibold">{getIntensityLabel(value)}</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <Slider
            value={[value]}
            onValueChange={(vals) => onChange(vals[0])}
            max={100}
            step={1}
            className="w-full"
          />
          
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Light</span>
            <span>Medium</span>
            <span>Strong</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Adjust how strongly the animation style is applied to your video. 
          Higher values create more dramatic transformations.
        </p>
      </div>
    </Card>
  );
}
