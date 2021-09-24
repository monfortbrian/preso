import Image from "next/image"
const Footer = () => {
    return (
        <footer className="bg-green-500 pt-32  text-white">
            <div className="max-w-6xl mx-auto px-4 md:flex border-b border-green-600 pb-10">
                <div className="w-1/4">
                    <h2 className="text-green-900 mb-3">NAVIGATION</h2>
                    <ul>
                        <li><a href="/" className="">Home</a></li>
                        <li><a href="/" className="">About</a></li>
                        <li><a href="/" className="">Services</a></li>
                        <li><a href="/" className="">Highlight</a></li>
                        <li><a href="/" className="">News</a></li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <h2 className="text-green-900 mb-3">GOVERNMENT</h2>
                    <ul>
                        <li><a href="/" className="">Overview</a></li>
                        <li><a href="/" className="">Cabinet</a></li>
                        <li><a href="/" className="">Services</a></li>
                        <li><a href="/" className="">Highlight</a></li>
                        <li><a href="/" className="">News</a></li>
                        <li><a href="/" className="">Highlight</a></li>
                        <li><a href="/" className="">News</a></li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <h2 className="text-green-900 mb-3">NAVIGATION</h2>
                    <ul>
                        <li><a href="/" className="">Home</a></li>
                        <li><a href="/" className="">About</a></li>
                        <li><a href="/" className="">Services</a></li>
                        <li><a href="/" className="">Highlight</a></li>
                        <li><a href="/" className="">News</a></li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <h2 className="text-green-900 mb-3">NAVIGATION</h2>
                    <ul>
                        <li><a href="/" className="">Home</a></li>
                        <li><a href="/" className="">About</a></li>
                        <li><a href="/" className="">Services</a></li>
                        <li><a href="/" className="">Highlight</a></li>
                        <li><a href="/" className="">News</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center py-20">
                <Image src="/Blason_du_Burundi.svg" width={40} height={50} />
                <p>© 2021 Republic of Burundi</p>
            </div>
        </footer>
    )
}

export default Footer
