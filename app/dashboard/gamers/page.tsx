import Image from "next/image";

export default function Page() {
  return (
    <div>
      <p>
        Gamers Page
      </p>
      <Image
        src="/baloons.png"
        width={1000}
        height={1000}
        className="hidden md:block"
        alt='Gamers'
      />
    </div>
  );
};
