import { ReactElement } from 'react';
import { MainLayout } from '@/components/layouts';
import { Container } from '@/components/ui';
import { NextPageWithLayout } from '../_app';

const favoritesPage: NextPageWithLayout = () => (
  <Container>
    <h1>Favorites</h1>
  </Container>
);

favoritesPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default favoritesPage;
