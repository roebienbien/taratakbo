import { twMerge } from 'tailwind-merge';

type SecondaryButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

const SecondaryButton = ({ text, className, onClick }: SecondaryButtonProps) => {
  return (
    <button onClick={onClick} className={twMerge(`text-blue-600 rounded-xl border border-blue-600 p-4`, className)}>
      {text}
    </button>
  );
};
export default SecondaryButton;
