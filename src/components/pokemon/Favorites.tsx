import FavoriteCard from './FavoriteCard';

interface Props {
  favorites: Number[];
}

export default function Favorites({ favorites }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px,_auto)]">
      {favorites.map((fav) => (
        <FavoriteCard id={fav} key={fav.toString()} />
      ))}
    </div>
  );
}
