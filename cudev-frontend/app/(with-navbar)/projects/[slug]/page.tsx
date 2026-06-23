import axios from "axios"

type ParamsProps = {
    params: Promise<{ slug: string }>;
}
const api = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL;

interface Data {
    title: string
    id: number
    slug: string
    desc: string
    fullDesc: string

}

export default async function ProjectPage({ params }: ParamsProps) {
    const { slug } = await params
    let portfolio: Data | null = null;

    try {
        const res = await axios.get<Data>(`${api}/portfolio/${slug}`);
        portfolio = res.data;
    } catch (err) {
        console.error("Ошибка при загрузке каталога:", err);
    }

    return (
        <div className="min-h-screen">
            <div className="h-126 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center w-2xl text-center">
                    <h1 className="font-bold text-6xl">{portfolio?.title}</h1>
                    <p className="pt-8 ">{portfolio?.fullDesc}</p>
                </div>
            </div>
            <div className="bg-white min-h-[calc(100vh-16rem)]">
            </div>
        </div>


    )
}

