import React from 'react';
import { Loader } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  ref: (node?: Element | null) => void;
  isFetching: boolean;
  className?: string;
}

export const Cursor: React.FC<Props> = ({ isFetching, ref, className }) => {
  return (
    <div className={clsx('flex justify-center my-1 h-1', className)} ref={ref}>
      {isFetching && <Loader className="animate-spin" />}
    </div>
  );
};
