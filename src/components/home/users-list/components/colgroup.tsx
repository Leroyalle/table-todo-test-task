import type { FC } from 'react';

export const Colgroup: FC = () => {
  return (
    <colgroup>
      <col className="w-[40px]" />
      <col />
      <col className="w-[80px]" />
    </colgroup>
  );
};
