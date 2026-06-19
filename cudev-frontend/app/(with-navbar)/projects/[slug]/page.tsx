import axios from "axios"

type ParamsProps = {
    params: Promise<{ slug: string }>;
}
const api = process.env.NEXT_PUBLIC_BACKEND_URL

interface Data {
    title: string
    id: number
    slug: string
    desc: string

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
        <div>{portfolio?.title} {portfolio?.desc}</div>
        
    )
}

