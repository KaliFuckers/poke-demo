import { PokemonData } from '@/interfaces';
import { pokeApi } from '@/services';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Card, Skeleton } from '../ui';

interface Props {
  id: Number;
}

export default function FavoriteCard({ id }: Props) {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);

  useEffect(() => {
    async function getPoke() {
      const poke = await pokeApi.get<PokemonData>(`/pokemon/${id}`);
      setPokemon(poke.data);
    }

    getPoke();
  }, [id]);

  return pokemon ? (
    <Link href={`/pokemon/${pokemon?.name}`}>
      <Card className="w-full h-full" hoverable effect rippleEffect>
        <Card.Image
          src={
            pokemon
              ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`
              : '/img/no-image.png'
          }
          alt={`poke ${pokemon?.name}`}
          fill
        />
      </Card>
    </Link>
  ) : (
    <Skeleton />
  );
}
