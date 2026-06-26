export const dynamic = 'force-dynamic';
import Card from "@/app/components/Card";
import { Metadata } from "next"
import axios from "axios";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects – CU.DEV Portfolio",
    description: "Explore fullstack projects developed with Next.js, NestJS, and Prisma. CU.DEV showcases web apps, experiments, and technical demos.",
};

const api = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL

interface Portfolio {
    title: string
    id: number
    slug: string
    desc: string
    dateCreate: string
}


const page = async () => {
    let portfolio: Portfolio[] = [];
    try {
        const res = await axios.get<Portfolio[]>(`${api}/portfolio`);
        portfolio = res.data;
    } catch (err) {
        console.error("Ошибка при загрузке каталога:", err);
    }

    return (
        <div className="px-6 pt-32 mx-auto space-y-8 max-w-7xl md:space-y-16  ">
            <div className="">
                <h2 className="text-4xl font-bold sm:text-4xl">Projects</h2>
                <p className="mt-4 text-zinc-400">Some of the projects are from work and some are on my own time.</p>
            </div>
            <div className="w-full h-px bg-zinc-800"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-8">
                {portfolio.map((project, index) => {
                    // Логика для первых трех
                    const isFirst = index === 0;
                    const isSecond = index === 1;
                    const isThird = index === 2;

                    return (
                        <div
                            key={index}
                            className={`
                    ${isFirst ? "md:row-span-3" : ""}
                    ${isSecond ? "md:col-span-2" : ""}
                    ${isThird ? "md:row-span-2 md:col-span-2" : ""}
                    ${index > 2 ? "md:col-span-1 " : ""} 
                `}
                        >
                            <Link href={`projects/${project.slug}`}>
                                <Card>

                                    <div className="space-y-4 p-4">
                                        <div className="text-xs">
                                            {new Date(project.dateCreate).toLocaleDateString('en-EN', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </div>
                                        <h1 className="text-3xl font-bold ">{project.title}</h1>
                                        <p className="leading-8 text-zinc-400">{project.desc}</p>
                                    </div>
                                </Card>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default page