import './button.css';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({ size = 'medium', label }: ButtonProps) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`].join(' ')}
    >
      {label}
    </button>
  );
};
