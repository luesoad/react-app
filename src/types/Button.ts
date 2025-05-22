export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  loading?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}
