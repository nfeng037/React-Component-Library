export interface HeroImageProps {
  imageUrl: string;
  title?: string;
  subtitle?: string;
  Text?: string;
  OnClick?: () => void;
  disabled?: boolean;
}