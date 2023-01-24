/* eslint-disable react/jsx-props-no-spreading */
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import {
  createContext,
  HTMLAttributes,
  PropsWithChildren,
  useMemo,
} from 'react';

const NavigationContext = createContext<{ path: string }>({ path: '' });

// const useNavigationContext = () => {
//   const context = useContext(NavigationContext);
//   if (!context) {
//     throw new Error(
//       'Navigations components must be rendered as a child of Navigation component',
//     );
//   }

//   return context;
// };

function Navigation(props: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  const { route } = useRouter();
  const removeProp = 'className';
  const { [removeProp]: remove, ...renderingProps } = props;
  const { className } = props;
  const path = useMemo(() => ({ path: route }), [route]);
  return (
    <NavigationContext.Provider value={path}>
      <nav {...renderingProps} className={`${className} fixed top-0 z-10`} />
    </NavigationContext.Provider>
  );
}

function CustomLink(
  props: PropsWithChildren<
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
      LinkProps
  >,
) {
  // const { path } = useNavigationContext();
  return (
    <Link
      {...props}
      // className={path === props.href ? styles.active : ""}
    />
  );
}

Navigation.Link = CustomLink;

export default Navigation;
