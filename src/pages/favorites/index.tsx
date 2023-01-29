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
    <Container>
      {favorites.length !== 0 ? (
        <Favorites favorites={favorites} />
      ) : (
        <div className="flex flex-col h-[calc(100vh_-_120px)] justify-center items-center relative">
          <NoFavorites />
        </div>
      )}
    </Container>
  );
};

FavoritesPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Favorite - Page">{page}</MainLayout>;
};

export default FavoritesPage;
