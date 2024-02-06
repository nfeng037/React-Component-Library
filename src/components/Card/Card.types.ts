export interface CardProps {
  imageurl?: string;
  title: string;
  content: string;
  buttonText?: string;
  onButtonClick?: () => void;
  disabled?: boolean;
}
