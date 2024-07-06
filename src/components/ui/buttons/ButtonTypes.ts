export interface ButtonProps {
  variant: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  onClick?: () => void;
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  className?: string; // To allow additional Tailwind classes
}
