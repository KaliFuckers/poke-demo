import NextImage, { ImageProps } from 'next/image';
import {
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';

interface Props {
  className?: string;
}

function Card(
  props: PropsWithChildren<
    HTMLAttributes<HTMLElement> & {
      hoverable?: boolean;
      effect?: boolean;
      rippleEffect?: boolean;
    }
  >,
) {
  const [coords, setcoords] = useState({ x: -1, y: -1 });
  const [isRipple, setisRipple] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setisRipple(true);
      setTimeout(() => setisRipple(false), 500);
    } else {
      setisRipple(false);
    }
  }, [coords]);

  useEffect(() => {
    if (!isRipple) {
      setcoords({ x: -1, y: -1 });
    }
  }, [isRipple]);

  const containerRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: any) => {
    const pos = containerRef.current!.getBoundingClientRect();

    setcoords({
      x: e.clientX - pos.left,
      y: e.clientY - pos.top,
    });
  };

  const removeProp1 = 'hoverable';
  const removeProp2 = 'className';
  const removeProp3 = 'effect';
  const removeProp4 = 'children';
  const removeProp5 = 'rippleEffect';
  const removeProp6 = 'onClick';
  const {
    [removeProp1]: remove,
    [removeProp2]: remove2,
    [removeProp3]: remove3,
    [removeProp4]: remove4,
    [removeProp5]: remove5,
    [removeProp6]: remove6,
    ...renderingProps
  } = props;
  const {
    className,
    hoverable,
    effect,
    onClick: propsClick,
    children,
    rippleEffect = false,
  } = props;

  return (
    <div
      onClick={(e) => {
        handleClick(e);
        if (propsClick) {
          propsClick(e);
        }
      }}
      onKeyDown={(e: any) => {
        handleClick(e);
        if (propsClick) {
          propsClick(e);
        }
      }}
      role="button"
      tabIndex={0}
      style={{
        overflow: 'hidden',
      }}
      ref={containerRef}
      {...renderingProps}
      className={`drop-shadow-md hover:drop-shadow-lg bg-white bg-opacity-5 p-4 rounded-md ${
        effect && 'hover:mt-[-5px] transition-all duration-[350ms]'
      } ${hoverable ? 'cursor-pointer' : 'cursor-default'} ${className}`}
    >
      {isRipple && rippleEffect && (
        <span
          style={{ top: coords.y, left: coords.x }}
          className="w-5 h-5 absolute bg-white rounded-full translate-x-[-50%] translate-y-[-50%] animate-ripple-effect"
        />
      )}
      <div className="h-full w-full relative z-20 flex flex-col">
        {children}
      </div>
    </div>
  );
}

function Image(props: ImageProps & { full?: boolean }) {
  const removeProp = 'full';
  const { [removeProp]: remove, full, ...renderingProps } = props;
  return (
    <div className="relative w-full h-full">
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
