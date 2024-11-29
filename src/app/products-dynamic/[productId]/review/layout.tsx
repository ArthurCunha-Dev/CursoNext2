export default function ProductDetailsLayout({ children }: { children: React.ReactNode}) {
    return (
        <>
            <p style={{
                background: 'aqua'
            }}>Especificações</p>
            {children}
        </>
    )    
}