import Image from 'next/image';

export default function NoFavorites() {
  return (
    <>
      <p className="text-2xl text-center">No hay favoritos</p>
      <div className="relative h-48 w-full">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/52.svg"
          alt="no Image"
          fill
          priority
        />
      </div>
    </>
  );
}
