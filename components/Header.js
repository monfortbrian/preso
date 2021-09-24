import Link from "next/link"
import Image from "next/image"

const Header = () => {

    const toggleMenu = ()=>{
        document.querySelector(".nav").classList.toggle("hidden")
    }
    return (
        <header className="shadow-sm relative z-20 py-2  bg-white">
            <div className="max-w-6xl mx-auto flex-wrap lg:flex-nowrap flex items-center justify-between py-3 px-4">
                <Link href="/">
                    <a className="inline-flex items-center">
                        <Image src="/blason_du_Burundi.svg" width={45} height={55}/>
                        <h1 className="text-2xl font-bold ml-2">Republic of Burundi</h1>
                    </a>
                </Link>
                <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-auto lg:hidden cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <nav className="lg:flex hidden flex-col lg:flex-row lg:w-auto w-full lg:items-center py-6 lg:py-0 nav">
                    <ul className="lg:flex lg:space-x-5 space-y-1 lg:space-y-0 text-gray-500 uppercase">
                        <li><Link href="/"><a className="text-sm hover:text-green-400">Home</a></Link></li>
                        <li><Link href="/about"><a className="text-sm hover:text-green-400">About</a></Link></li>
                        <li><Link href="/"><a className="text-sm hover:text-green-400">Services</a></Link></li>
                        <li><Link href="/governement"><a href="/" className="text-sm hover:text-green-400">Governement</a></Link></li>
                    </ul>
                    <input type="text" placeholder="Search" className="border-2 lg:ml-6 px-2 py-1 mt-2 lg:mt-0 focus:outline-none focus:border-gray-400"/>
                </nav>
            </div>
        </header>
    )
}

export default Header
