import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { identity, login, clear, isLoggingIn } = useInternetIdentity();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-effect border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">AnimateAI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('upload')} className="text-foreground hover:text-primary transition-colors">
              Create
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-foreground hover:text-primary transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors">
              FAQ
            </button>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {identity ? (
              <Button onClick={clear} variant="outline">
                Logout
              </Button>
            ) : (
              <Button onClick={login} disabled={isLoggingIn}>
                {isLoggingIn ? 'Connecting...' : 'Login'}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('upload')} className="text-left text-foreground hover:text-primary transition-colors">
                Create
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left text-foreground hover:text-primary transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-foreground hover:text-primary transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-foreground hover:text-primary transition-colors">
                FAQ
              </button>
              <div className="pt-4 border-t">
                {identity ? (
                  <Button onClick={clear} variant="outline" className="w-full">
                    Logout
                  </Button>
                ) : (
                  <Button onClick={login} disabled={isLoggingIn} className="w-full">
                    {isLoggingIn ? 'Connecting...' : 'Login'}
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
