
interface Blogs {
    title: string
}

const page = async () => {
    let blogs: Blogs[] = []
    return (
        <div className="px-6 pt-32 mx-auto space-y-8 max-w-7xl md:space-y-16  ">
            <div className="">
                <h2 className="text-4xl font-bold sm:text-4xl">Blogs</h2>
                <p className="mt-4 text-zinc-400">  Этот блог — дневник разработки моего личного портфолио.
                 Я делюсь решениями, ошибками и находками на каждом этапе: от архитектуры Next.js + NestJS до настройки CI/CD, анимаций и работы с базой данных.
                 Идеально для тех, кто хочет заглянуть в кухню fullstack-разработки.
                </p>
            </div>
            <div className="w-full h-px bg-zinc-800"></div>

        </div>
    )
}

export default page