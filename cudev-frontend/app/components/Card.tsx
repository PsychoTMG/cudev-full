import { PropsWithChildren } from 'react'

const Card = ({ children }: PropsWithChildren) => {
    return (
        <div
            className="relative border rounded-xl">
            {children}
        </div>
    )
}

export default Card