import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import type { AnimationStyle } from '../App';

interface StyleSelectorProps {
  selectedStyle: AnimationStyle | null;
  onStyleSelect: (style: AnimationStyle) => void;
}

const styles: { id: AnimationStyle; name: string; description: string; image: string }[] = [
  {
    id: 'cartoon',
    name: 'Cartoon',
    description: 'Classic animated cartoon style',
    image: '/assets/generated/style-cartoon.dim_200x200.png'
  },
  {
    id: 'anime',
    name: 'Anime',
    description: 'Japanese anime aesthetic',
    image: '/assets/generated/style-anime.dim_200x200.png'
  },
  {
    id: 'pixar',
    name: 'Pixar 3D',
    description: 'Modern 3D animation style',
    image: '/assets/generated/style-pixar.dim_200x200.png'
  },
  {
    id: 'whiteboard',
    name: 'Whiteboard',
    description: 'Hand-drawn sketch animation',
    image: '/assets/generated/style-whiteboard.dim_200x200.png'
  },
  {
    id: 'comic',
    name: 'Comic Book',
    description: 'Bold comic book style',
    image: '/assets/generated/style-comic.dim_200x200.png'
  },
  {
    id: 'watercolor',
    name: 'Watercolor',
    description: 'Artistic watercolor painting',
    image: '/assets/generated/style-watercolor.dim_200x200.png'
  }
];

export default function StyleSelector({ selectedStyle, onStyleSelect }: StyleSelectorProps) {
  return (
    <Card className="p-8 animate-scale-in">
      <h3 className="text-2xl font-bold mb-6">Choose Your Animation Style</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => onStyleSelect(style.id)}
            className={`relative group p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
              selectedStyle === style.id
                ? 'border-primary bg-primary/10 shadow-glow'
                : 'border-border hover:border-primary/50'
            }`}
          >
            {selectedStyle === style.id && (
              <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
            <img
              src={style.image}
              alt={style.name}
              className="w-full aspect-square object-cover rounded-lg mb-3"
            />
            <h4 className="font-semibold mb-1">{style.name}</h4>
            <p className="text-xs text-muted-foreground">{style.description}</p>
          </button>
        ))}
      </div>
    </Card>
  );
}
