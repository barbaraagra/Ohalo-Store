import Ohalo from '../../public/images/ohalo.png'

export function Home() {
    return (
        <>
            <h1>Home</h1>
            <img src={Ohalo} alt="home header" style={{ width: '90vw', height: '100vh', objectFit: 'cover' }} />
        </>
    )
}