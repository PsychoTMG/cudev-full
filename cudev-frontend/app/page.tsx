export const dynamic = 'force-dynamic';
import Link from "next/link";
import ParticlesCanvas from "./components/ParticlesCanvas";


export default async function Home() {
  const navigation = [
    { name: 'Projects', href: '/projects' },
    { name: 'Contacts', href: '/contacts' },
  ]
  // const apiBase = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL;


  return (
    <div className="flex fixed flex-col items-center justify-center w-screen h-screen touch-none select-none">
      <ParticlesCanvas />
      <nav className="animate-fade-in">
        <ul className="flex gap-4 ">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-md duration-500 hover:text-hover active:text-zinc-300"
              >{item.name}</Link>
            </li>
          )
          )}
        </ul>
      </nav>

      <div className="w-screen h-px block md:block animate-fade-left bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="text-stroke-gradient text-8xl sm:text-6xl md:text-9xl uppercase ">
        cu.dev
      </h1>
      <div className=" w-screen h-px block md:block animate-fade-left bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className=" animate-fade-in ">
        <h2 className="text-md  uppercase">
          One dev, full stack
        </h2>
      </div>

    </div>
  );
}