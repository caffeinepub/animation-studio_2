import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

export default function DownloadButton() {
  const handleDownload = () => {
    toast.success('Download started!', {
      description: 'Your animated video is being prepared for download.'
    });
  };

  return (
    <div className="flex justify-center animate-scale-in">
      <Button
        onClick={handleDownload}
        size="lg"
        className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-secondary hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
      >
        <Download className="w-5 h-5 mr-2" />
        Download HD Video
        <Badge variant="secondary" className="ml-3">
          1080p
        </Badge>
      </Button>
    </div>
  );
}
