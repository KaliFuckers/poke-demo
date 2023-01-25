import { Pokemon } from '@/interfaces';
import { Card } from '../ui';

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon: { id, img, name } }: Props) {
  return (
    <Card hoverable key={id} className="cardPokemon" effect rippleEffect>
      <Card.Image
        className="h-full w-full"
        alt={`pokemon ${name}`}
        src={img}
        fill
        priority
      />
      <Card.Body className="px-2 flex flex-row justify-between">
        <Card.Title className="capitalize">{name}</Card.Title>
        <h3>#{id}</h3>
      </Card.Body>
    </Card>
  );
}
