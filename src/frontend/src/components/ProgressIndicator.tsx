import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Loader2 } from 'lucide-react';

interface ProgressIndicatorProps {
  progress: number;
}

export default function ProgressIndicator({ progress }: ProgressIndicatorProps) {
  const getStatusMessage = (prog: number) => {
    if (prog < 25) return 'Analyzing video...';
    if (prog < 50) return 'Applying style transfer...';
    if (prog < 75) return 'Rendering frames...';
    if (prog < 100) return 'Finalizing animation...';
    return 'Complete!';
  };

  return (
    <Card className="p-8 animate-scale-in">
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-3">
          <Loader2 className="w-6 h-6 text-primary animate-spin" />
          <h3 className="text-2xl font-bold">Creating Your Animation</h3>
        </div>

        <div className="space-y-3">
          <Progress value={progress} className="h-3" />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{getStatusMessage(progress)}</span>
            <span className="font-semibold text-primary">{progress}%</span>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          This may take a few moments. Please don't close this window.
        </p>
      </div>
    </Card>
  );
}
