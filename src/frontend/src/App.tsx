import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoUpload from './components/VideoUpload';
import StyleSelector from './components/StyleSelector';
import IntensitySlider from './components/IntensitySlider';
import ComparisonPreview from './components/ComparisonPreview';
import ProgressIndicator from './components/ProgressIndicator';
import DownloadButton from './components/DownloadButton';
import HowItWorks from './components/HowItWorks';
import PricingPlans from './components/PricingPlans';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

export type AnimationStyle = 'cartoon' | 'anime' | 'pixar' | 'whiteboard' | 'comic' | 'watercolor';

function App() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<AnimationStyle | null>(null);
  const [intensity, setIntensity] = useState<number>(50);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    setIsComplete(false);
  };

  const handleStyleSelect = (style: AnimationStyle) => {
    setSelectedStyle(style);
  };

  const handleIntensityChange = (value: number) => {
    setIntensity(value);
  };

  const handleStartProcessing = () => {
    if (!uploadedFile || !selectedStyle) return;
    
    setIsProcessing(true);
    setProgress(0);
    
    // Simulate processing with progress updates
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setIsComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <Hero />
          
          {/* Video Processing Section */}
          <section id="upload" className="py-20 px-4 bg-muted/30">
            <div className="container max-w-6xl mx-auto">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                  Create Your Animation
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Upload your video, choose a style, and watch the magic happen
                </p>
              </div>

              <div className="grid gap-8">
                <VideoUpload onFileUpload={handleFileUpload} uploadedFile={uploadedFile} />
                
                {uploadedFile && (
                  <>
                    <StyleSelector 
                      selectedStyle={selectedStyle} 
                      onStyleSelect={handleStyleSelect} 
                    />
                    
                    {selectedStyle && (
                      <IntensitySlider 
                        value={intensity} 
                        onChange={handleIntensityChange} 
                      />
                    )}
                    
                    {selectedStyle && !isProcessing && !isComplete && (
                      <div className="flex justify-center">
                        <button
                          onClick={handleStartProcessing}
                          className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold text-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
                        >
                          Start Animation
                        </button>
                      </div>
                    )}
                    
                    {isProcessing && (
                      <ProgressIndicator progress={progress} />
                    )}
                    
                    {isComplete && (
                      <>
                        <ComparisonPreview />
                        <DownloadButton />
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </section>

          <HowItWorks />
          <PricingPlans />
          <Testimonials />
          <FAQ />
        </main>

        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
