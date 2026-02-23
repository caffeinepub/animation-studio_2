import { useCallback } from 'react';
import { Upload, Video, X } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface VideoUploadProps {
  onFileUpload: (file: File) => void;
  uploadedFile: File | null;
}

export default function VideoUpload({ onFileUpload, uploadedFile }: VideoUploadProps) {
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && (file.type === 'video/mp4' || file.type === 'video/quicktime' || file.type === 'video/x-msvideo')) {
      onFileUpload(file);
    }
  }, [onFileUpload]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  }, [onFileUpload]);

  const handleRemove = () => {
    onFileUpload(null as any);
  };

  return (
    <Card className="p-8 animate-scale-in">
      {!uploadedFile ? (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-primary/50 rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer bg-accent/20"
        >
          <input
            type="file"
            accept=".mp4,.mov,.avi,video/mp4,video/quicktime,video/x-msvideo"
            onChange={handleFileInput}
            className="hidden"
            id="video-upload"
          />
          <label htmlFor="video-upload" className="cursor-pointer">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Upload Your Video</h3>
                <p className="text-muted-foreground mb-4">
                  Drag and drop or click to browse
                </p>
                <p className="text-sm text-muted-foreground">
                  Supports MP4, MOV, AVI • Max 500MB
                </p>
              </div>
            </div>
          </label>
        </div>
      ) : (
        <div className="flex items-center justify-between p-6 bg-accent/20 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">{uploadedFile.name}</h4>
              <p className="text-sm text-muted-foreground">
                {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>
          <button
            onClick={handleRemove}
            className="p-2 hover:bg-destructive/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-destructive" />
          </button>
        </div>
      )}
    </Card>
  );
}
