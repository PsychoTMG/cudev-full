import Card from '@/app/components/Card';
import { Metadata } from 'next';
import Link from 'next/link';
import { Twitter, Mail, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact – CU.DEV Portfolio",
  description: "Get in touch with me via email or social media. CU.DEV – fullstack developer portfolio.",
};

const socials = [
  {
    href: 'https://twitter.com/psychotmg',
    icon: <Twitter size={20} />,
    label: 'Twitter/X',
    handle: '@psychotmg'
  },
  {
    href: 'mailto:psychotmg@yandex.ru',
    icon: <Mail size={20} />,
    label: 'Email',
    handle: 'psychotmg@yandex.ru'
  },
  {
    href: 'https://github.com/psychotmg',
    icon: <Github size={20} />,
    label: 'Github',
    handle: 'psychotmg'
  },
];

const page = () => {

  return (

    <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">

      <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-16">
        {socials.map((social, idx) => (
          <Card key={idx}>
            <Link
              href={social.href}
              className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48  md:p-16"
            >
              <span
                className="absolute w-px h-2/3 bg-linear-to-b from-zinc-500 via-zinc-500/50 to-transparent"
              />
              <span className="relative z-10 flex items-center justify-center w-12 h-12  duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
                {social.icon}
              </span>
              <div className="z-10 flex flex-col items-center">
                <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-title group-hover:text-white font-display">
                  {social.handle}
                </span>
                <span className="mt-4 text-sm text-center duration-1000 text-text group-hover:text-zinc-200">
                  {social.label}
                </span>
              </div>
            </Link>
          </Card>
        ))}
      </div>

    </div>
  )
}

export default page