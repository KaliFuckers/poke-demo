import Image from 'next/image';

export default function NoFavorites() {
  return (
    <>
      <p className="text-2xl">No hay favoritos</p>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/52.svg"
        alt="no Image"
        height={150}
        width={150}
      />
    </>
  );
}
