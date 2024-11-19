interface InfoParams{
    params:{
        productId: number
    }    
}

export default function Info({ params }: InfoParams) {
    return (
        <div>
            <p>Informação do produto {params.productId}</p>
        </div>
    )
}