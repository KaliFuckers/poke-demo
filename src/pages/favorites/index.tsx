import { ReactElement } from 'react';
import { MainLayout } from '@/components/layouts';
import { NextPageWithLayout } from '../_app';

const favoritesPage: NextPageWithLayout = () => <h1>Favorites</h1>;

favoritesPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default favoritesPage;
