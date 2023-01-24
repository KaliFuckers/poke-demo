import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
}

const Container = (props: PropsWithChildren<Props>) => {
  const { className, children } = props;
  return <div className={`max-w-6xl mx-auto ${className}`}>{children}</div>;
};

export default Container;
