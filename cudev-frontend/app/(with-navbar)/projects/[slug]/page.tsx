import axios from "axios";
import { Github, MoveRight } from "lucide-react";

type ParamsProps = {
    params: Promise<{ slug: string }>;
};
const api = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL;

interface Data {
    title: string;
    id: number;
    slug: string;
    desc: string;
    fullDesc: string;
}

export default async function ProjectPage({ params }: ParamsProps) {
    const { slug } = await params;
    let portfolio: Data | null = null;

    try {
        const res = await axios.get<Data>(`${api}/portfolio/${slug}`);
        portfolio = res.data;
    } catch (err) {
        console.error("Ошибка при загрузке каталога:", err);
    }

    return (
        <div className="min-h-screen">
            <div className="h-126 flex justify-center items-center flex-col">
                {portfolio && (
                    <>
                        <div className="flex flex-col justify-center items-center w-2xl text-center">
                            <h1 className="font-bold text-6xl">{portfolio.title}</h1>
                            <p className="pt-8">{portfolio.desc}</p>
                        </div>
                        <div className="flex pt-10 gap-10">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                GitHub <MoveRight className="w-4 h-4" />
                            </a>
                            <a
                                href="https://website.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                WebSite <MoveRight className="w-4 h-4" />
                            </a>
                        </div>
                    </>
                )}
            </div>
            <div className="bg-white min-h-[calc(100vh-16rem)]">
                {/* здесь контент (fullDesc) */}
            </div>
        </div>
    );
}