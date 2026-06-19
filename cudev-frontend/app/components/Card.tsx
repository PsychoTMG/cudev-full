import { PropsWithChildren } from 'react'

const Card = ({ children }: PropsWithChildren) => {
    return (
        <div className="relative border border-zinc-600 rounded-xl bg-zinc-900/50">
            {children}
        </div>
    )
}

export default Card