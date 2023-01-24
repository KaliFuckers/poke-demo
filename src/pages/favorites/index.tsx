import { ReactElement } from 'react';
import { MainLayout } from '@/components/layouts';
import { Container, NoFavorites } from '@/components/ui';
import { NextPageWithLayout } from '../_app';

const favoritesPage: NextPageWithLayout = () => (
  <Container className="flex flex-col h-[calc(100vh_-_80px)] justify-center items-center">
    <NoFavorites />
  </Container>
);

favoritesPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Favorite - Page">{page}</MainLayout>;
};

export default favoritesPage;
