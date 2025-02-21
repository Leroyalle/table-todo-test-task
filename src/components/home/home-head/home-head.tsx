import type { FC } from 'react';
import { clsx } from 'clsx';
import { Title, Typography } from '@/components';

interface Props {
  className?: string;
}

export const HomeHead: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('', className)}>
      <Title className="font-bold mb-2" size="lg" text="User To-Do Table" />
      <Typography className="text-muted/30">User task table for effective planning.</Typography>
    </div>
  );
};
