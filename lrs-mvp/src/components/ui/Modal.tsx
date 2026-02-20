import { ReactNode } from 'react';

export const Modal = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <div role="dialog" aria-modal="true">
      <h3>{title}</h3>
      {children}
    </div>
  );
};
