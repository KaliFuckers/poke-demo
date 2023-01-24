import { Pokemon } from '@/interfaces';
import { useRouter } from 'next/router';
import { Card } from '../ui';

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon: { id, img, name } }: Props) {
  const router = useRouter();
  return (
    <Card
      key={id}
      className="cardPokemon"
      onClick={() => {
        router.push(`/pokemon/${name}`);
      }}
    >
      <Card.Image
        className="h-full w-full"
        alt={`pokemon ${name}`}
        src={img}
        fill
        priority
        full
      />
      <Card.Body className="px-2 flex flex-row justify-between">
        <Card.Title className="capitalize">{name}</Card.Title>
        <h3>#{id}</h3>
      </Card.Body>
    </Card>
  );
}
