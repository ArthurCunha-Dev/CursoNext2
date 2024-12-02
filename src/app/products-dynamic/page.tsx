import { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {
    title: {
        absolute: 'Produtos',
    }
}

export default function Products() {
    const id = 1

    return (
        <div>
            <div>
             <Link href={'/products-dynamic/${id}'}>Produto 1</Link>
            </div>
            <div>
             <Link href={'/products-dynamic/2'}>Produto 2</Link>
            </div>
            <div>
             <Link href={'/products-dynamic/3'} replace>Produto 3</Link>
            </div>
        </div>
    )
}