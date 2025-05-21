export interface ButtonProps {
  onClick: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  loading?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}
