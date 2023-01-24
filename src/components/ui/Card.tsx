import NextImage, { ImageProps } from 'next/image';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface Props {
  className?: string;
}

function Card(props: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  const { className, children } = props;
  return (
    <div
      {...props}
      className={`drop-shadow-md hover:drop-shadow-lg bg-white bg-opacity-5 p-4 rounded-md ${className}`}
    >
      {children}
    </div>
  );
}

// eslint-disable-next-line react/require-default-props
function Image(props: ImageProps & { full?: boolean }) {
  const removeProp = 'full';
  const { [removeProp]: remove, full, ...renderingProps } = props;
  return (
    <div className="relative w-full h-full">
      {}
      <NextImage {...renderingProps} />
    </div>
  );
}

function Body({ children, className }: PropsWithChildren<Props>) {
  return <div className={className}>{children}</div>;
}

function Title({ className, children }: PropsWithChildren<Props>) {
  return <h2 className={className}>{children}</h2>;
}

function Content({ children, className }: PropsWithChildren<Props>) {
  return <p className={className}>{children}</p>;
}

function Header(props: PropsWithChildren<Props>) {
  return <div {...props} />;
}

Card.Image = Image;
Card.Body = Body;
Card.Title = Title;
Card.Content = Content;
Card.Header = Header;

export default Card;
