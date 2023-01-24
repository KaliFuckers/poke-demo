import Link from 'next/link';
import { Card } from '../ui';

interface Props {
  favorites: Number[];
}

export default function Favorites({ favorites }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(150px,_auto)]">
      {favorites.map((fav) => (
        <Link href={`/pokemon/${fav}`} key={fav.toString()}>
          <Card className="w-full h-full ">
            <Card.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${fav}.svg`}
              alt={`poke ${fav}`}
              fill
            />
          </Card>
        </Link>
      ))}
    </div>
  );
}
