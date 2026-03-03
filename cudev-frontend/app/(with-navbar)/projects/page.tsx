import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects – CU.DEV Portfolio",
    description: "Explore fullstack projects developed with Next.js, NestJS, and Prisma. CU.DEV showcases web apps, experiments, and technical demos.",
};

const page = () => {
    return (
        <div>
            projects
        </div>
    )
}

export default page