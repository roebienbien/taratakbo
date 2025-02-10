import { twMerge } from 'tailwind-merge';

type SecondaryButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

const SecondaryButton = ({ text, className, onClick }: SecondaryButtonProps) => {
  return (
    <button onClick={onClick} className={twMerge(`border border-blue-600 p-4 text-blue-600 rounded-xl`, className)}>
      {text}
    </button>
  );
};
export default SecondaryButton;
