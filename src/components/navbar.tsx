import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="">
      <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-blue-500 fixed nav">
        <div className="flex- justify-between items-center w-full">
          <Image src="/vercel.svg" height={60} width={60} alt="Logo" />
        </div>
      </nav>
    </div>
  );
};
