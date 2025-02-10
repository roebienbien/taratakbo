import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';

type PrimaryLinkProps = {
  text: string;
  to: string;
  className?: string;
  onClick?: () => void;
};

const PrimaryLink = ({ text, className, to }: PrimaryLinkProps) => {
  return (
    <Link to={to} className={twMerge(`flex w-full items-center justify-center rounded-xl bg-blue-600 p-4 text-white`, className)}>
      {text}
    </Link>
  );
};
export default PrimaryLink;
