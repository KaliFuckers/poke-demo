// import { useTheme, Text, Spacer } from "@nextui-org/react";
import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next/types';
import { PropsWithChildren } from 'react';
import { Navigation } from '../ui';

const MainLayout: NextPage<
  PropsWithChildren & {
    title?: string;
    keywords?: string;
    metaTags?: { title: string; content: string }[];
  }
> = ({ children, title = 'Pokemon App', keywords, metaTags }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="author" content="Shammael" />
      <meta name="description" content="Información del pokemon xxxx" />
      {keywords && <meta name="keywords" content={`${title}, ${keywords}`} />}
      {metaTags &&
        metaTags.map((meta) => (
          <meta key={0} title={meta.title} content={meta.content} />
        ))}
    </Head>
    <Navigation
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        padding: '0px 10px',
      }}
      className="bg-black bg-opacity-90 backdrop-blur-sm justify-between"
    >
      <Navigation.Link
        style={{ display: 'flex', textDecoration: 'none' }}
        href="/"
      >
        <Image
          alt="icon app"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          width={70}
          height={70}
          priority
        />
        <h1>
          <span className="text-[40px]">P</span>
          <span className="text-[20px]">okemon</span>
        </h1>
      </Navigation.Link>
      <Navigation.Link
        style={{ color: 'white', textDecoration: 'none' }}
        href="/favorites"
      >
        Favorites
      </Navigation.Link>
    </Navigation>
    <main className="mt-[80px]">{children}</main>
  </>
);

export default MainLayout;
