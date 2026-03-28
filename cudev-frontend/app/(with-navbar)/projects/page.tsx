import Card from "@/app/components/Card";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects – CU.DEV Portfolio",
    description: "Explore fullstack projects developed with Next.js, NestJS, and Prisma. CU.DEV showcases web apps, experiments, and technical demos.",
};


const projectArr = [
    { name: 'project 1' },
    { name: 'project 2' },
    { name: 'project 3' },
    { name: 'project 1' },
    { name: 'project 2' },
    { name: 'project 3' },

]


const page = () => {
    return (
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl md:space-y-16  ">
            <div className="mx-auto lg:mx-0">
                <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>
                <p className="mt-4 ">Some of the projects are from work and some are on my own time.</p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-3 md:grid-rows-3 gap-8">
                {projectArr.map((project, index) => {
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
                            <Card><div className="h-20 flex items-center justify-center">{project.name}</div></Card>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default page