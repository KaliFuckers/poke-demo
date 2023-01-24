import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts';
import { Pokemon, PokemonResponse } from '@/interfaces';
import { pokeApi } from '@/services';
import { PokemonCard } from '@/components/pokemon';
import { Container } from '@/components/ui';
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout<{ pokemons: Pokemon[] }> = ({
  pokemons,
}) => (
  <Container className="grid grid-cols-1 max-[600px]:bg-sky-300 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4">
    {pokemons.map((pokemon) => (
      <Link href={`/pokemon/${pokemon.id}`} key={pokemon.id}>
        <PokemonCard pokemon={pokemon} />
      </Link>
    ))}
  </Container>
);

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout title="Home - Pokemon" keywords="pokemon, pokemonApp, pokedex">
      {page}
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
    props: {
      pokemons,
    },
  };
};

export default HomePage;
