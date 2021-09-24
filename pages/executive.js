import Header from "../components/Header"
import Link from "next/link"
import Image from "next/image"
import Submenu from "../components/Submenu"
import FbIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Footer from "../components/Footer";

const executive = () => {
    return (
        <div className="text-gray-600">
            <Header/>
            <Submenu/>
            <div className="bg-cover bg-center  pt-24" style={{backgroundImage:"url('/burundi2.jpg')"}}>
                <div className="max-w-6xl mx-auto px-8 lg:px-4 text-gray-100 mb-14">
                    <h1 className="text-2xl font-bold mb-3">Lorem ipsum</h1>
                    <p className="max-w-2xl text-justify">
                    Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Sit amet cursus sit amet dictum. Phasellus faucibus scelerisque eleifend donec. Vitae tempus quam pellentesque nec nam. Vestibulum mattis ullamcorper velit sed. Morbi tempus iaculis urna id.Vitae tempus quam pellentesque nec nam. Vestibulum mattis ullamcorper velit sed. Morbi tempus iaculis urna id. 
                    </p>
                </div>
                <div className="md:flex justify-center px-8 lg:px-4 md:max-w-2xl md:text-center font-semibold mx-auto">
                    <div className="bg-white md:p-8 p-4 md:w-1/2 border"><p className="text-2xl mb-2 font-bold text-green-500">40%</p>Female</div>
                    <div className="bg-white md:p-8 p-4 md:w-1/2 border"><p className="text-2xl mb-2 font-bold text-green-500">60%</p> Male</div>
                </div>
                <div className=" max-w-6xl mx-auto px-8 lg:px-4 md:flex justify-center md:text-center font-semibold">
                    <div className="bg-white md:p-8 p-4 md:w-1/2 border"><p className="text-2xl mb-2 font-bold text-green-500">65</p> Lorem</div>
                    <div className="bg-white md:p-8 p-4 md:w-1/2 border"><p className="text-2xl mb-2 font-bold text-green-500">32</p> Ipsum</div>
                    <div className="bg-white md:p-8 p-4 md:w-1/2 border"><p className="text-2xl mb-2 font-bold text-green-500">16</p> Rhoncus</div>
                </div>
            </div>

            <div className="md:flex px-8 lg:px-4 justify-between max-w-6xl mx-auto py-20 ">
                <Image src="/man.jpg" width={350} height={350} className="object-cover rounded-full"/>
                <div className="md:w-3/5 md:ml-10 md:pt-0 pt-10">
                    <h1 className="text-2xl font-bold mb-3">Title lorem ipsum</h1>
                    <div>
                        <a href="https://facebook.com"><FbIcon/></a>
                        <a href="https://twitter.com"><TwitterIcon/></a>
                    </div>
                    <p className="pt-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque. Pharetra magna ac placerat vestibulum. Nisl nunc mi ipsum faucibus vitae aliquet. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Odio ut sem nulla pharetra. Malesuada fames ac turpis egestas integer.</p>
                </div>
            </div>
            <div className="md:flex px-8 lg:px-4 justify-between max-w-6xl mx-auto pb-28">
                <Image src="/woman.jpg" width={350} height={350} className="object-cover rounded-full order-last"/>
                <div className="md:w-3/5 order-first md:mr-10 md:pt-0 pt-10">
                    <h1 className="text-2xl font-bold mb-3">Title lorem ipsum</h1>
                    <div>
                        <a href="https://facebook.com"><FbIcon/></a>
                        <a href="https://twitter.com"><TwitterIcon/></a>
                    </div>
                    <p className="pt-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque. Pharetra magna ac placerat vestibulum. Nisl nunc mi ipsum faucibus vitae aliquet. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Odio ut sem nulla pharetra. Malesuada fames ac turpis egestas integer.</p>
                </div>
            </div>
            <div className="md:flex px-8 lg:px-4 justify-between max-w-6xl mx-auto pb-20 ">
                <Image src="/man.jpg" width={350} height={350} className="object-cover rounded-full"/>
                <div className="md:w-3/5 md:ml-10 md:pt-0 pt-10">
                    <h1 className="text-2xl font-bold mb-3">Title lorem ipsum</h1>
                    <div>
                        <a href="https://facebook.com"><FbIcon/></a>
                        <a href="https://twitter.com"><TwitterIcon/></a>
                    </div>
                    <p className="pt-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque. Pharetra magna ac placerat vestibulum. Nisl nunc mi ipsum faucibus vitae aliquet. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Odio ut sem nulla pharetra. Malesuada fames ac turpis egestas integer.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default executive
