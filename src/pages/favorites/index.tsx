import { ReactElement, useState, useEffect } from 'react';
import { MainLayout } from '@/components/layouts';
import { Container } from '@/components/ui';
import { getPokemonIdList } from '@/utils';
import { Favorites, NoFavorites } from '@/components/pokemon';
import { NextPageWithLayout } from '../_app';

const FavoritesPage: NextPageWithLayout = () => {
  const [favorites, setfavorites] = useState<Number[]>([]);

  useEffect(() => {
    setfavorites(getPokemonIdList());
  }, []);

  return (
    <Container
      className={`${
        !favorites &&
        'flex flex-col h-[calc(100vh_-_80px)] justify-center items-center'
      }`}
    >
      {favorites.length !== 0 ? (
        <Favorites favorites={favorites} />
      ) : (
        <NoFavorites />
      )}
    </Container>
  );
};

FavoritesPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Favorite - Page">{page}</MainLayout>;
};

export default FavoritesPage;
