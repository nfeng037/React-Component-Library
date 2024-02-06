export interface CardProps {
  imageUrl?: string;
  title: string;
  content: string;
  buttonText?: string;
  onButtonClick?: () => void;
  disabled?: boolean;
}
