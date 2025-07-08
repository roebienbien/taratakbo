import { twMerge } from 'tailwind-merge';

type PrimaryButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

const PrimaryButton = ({ text, className, onClick }: PrimaryButtonProps) => {
  return (
    <button onClick={onClick} className={twMerge(`bg-blue-600 p-4 text-white rounded-xl`, className)}>
      {text}
    </button>
  );
};
export default PrimaryButton;
