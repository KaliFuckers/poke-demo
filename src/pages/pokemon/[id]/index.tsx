import { MainLayout } from '@/components/layouts';
import { Card, LikeButton } from '@/components/ui';
import { Pokemon, PokemonFullData, PokemonResponse } from '@/interfaces';
import { NextPageWithLayout } from '@/pages/_app';
import { pokeApi } from '@/services';
import { capitalize, existInFavorites, toggleFavorite } from '@/utils';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement, useEffect, useState } from 'react';

interface Props {
  pokemon: PokemonFullData;
}

const handleToggleFavorite = (id: number) => {
  toggleFavorite(id);
};

const PokemonPage: NextPageWithLayout<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    setIsInFavorites(existInFavorites(pokemon.id));
  }, [pokemon.id]);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 px-4 mx-auto max-w-6xl">
      <Card className="flex flex-col bg-white bg-opacity-5 rounded-lg justify-self-auto mx-auto h-40 w-full cursor-pointer p-4">
        <Card.Image
          fill
          className=""
          alt={pokemon.name}
          src={
            pokemon.sprites.other?.dream_world.front_default || '/no-image.png'
          }
          full
        />
      </Card>
      <Card className="flex flex-col bg-white bg-opacity-5 rounded-lg justify-self-auto mx-auto w-full cursor-pointer col-span-2">
        <Card.Body className="px-4 py-4 flex justify-between flex-col">
          <Card.Header className="flex justify-between w-full items-center">
            <h1 className="capitalize text-3xl">{pokemon.name}</h1>
            <LikeButton
              isInFavorites={isInFavorites}
              onClick={() => handleToggleFavorite(pokemon.id)}
            />
          </Card.Header>
          <Card.Body className="mt-2">
            <h2 className="text-lg">Sprites</h2>
            <div className="flex justify-between max-w-lg mx-auto">
              <Card.Image
                alt={`${pokemon.name} front-default`}
                src={pokemon.sprites.front_default}
                height={100}
                width={100}
              />
              <Card.Image
                alt={`${pokemon.name} front-default`}
                src={pokemon.sprites.back_default}
                height={100}
                width={100}
              />
              <Card.Image
                alt={`${pokemon.name} front-default`}
                src={pokemon.sprites.front_shiny}
                height={100}
                width={100}
              />
              <Card.Image
                alt={`${pokemon.name} front-default`}
                src={pokemon.sprites.back_shiny}
                height={100}
                width={100}
              />
            </div>
          </Card.Body>
        </Card.Body>
      </Card>
    </div>
  );
};

PokemonPage.getLayout = function getLayout(page: ReactElement) {
  const {
    props: {
      pokemon: { name },
    },
  } = page;
  return <MainLayout title={capitalize(name)}>{page}</MainLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const resp = await pokeApi.get<PokemonResponse>(
    '/pokemon?limit=151&offset=0',
  );

  const pokemons: Pokemon[] = resp.data.results.map((poke, index) => ({
    ...poke,
    id: (index + 1).toString(),
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    paths: pokemons.map(({ id }) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await pokeApi.get<PokemonFullData>(`/pokemon/${params?.id}`);

  // Hay que reducir a lo necesario debido a que nextjs lanza un warning en build time cuando genera las páginas si los datos descargados superan cierto peso

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
