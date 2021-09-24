import Head from 'next/head'
import Link from "next/link"
import Image from "next/image"
import Header from '../components/Header'
import SearchIcon from '@material-ui/icons/Search';
import TouchIcon from '@material-ui/icons/TouchAppRounded';
import Footer from '../components/Footer';




export default function Home() {


  // const showBtnTop = ()=>{ 
  //   window.pageYOffset > 100 ? setbtnTop(true) : setbtnTop(false)
  // }

  // const scrollTop = ()=> window.scrollTo({
  //   top:0,
  //   behavior:"smooth"
  // })

  return (
    <div className="text-gray-600 bg-gray-100">
      <Head>
        <title>Burundi presidency | Home</title>
      </Head>
      <section className="bg-cover bg-bottom py-12" style={{backgroundImage:"url('/Palais-Ntare-House1.jpg')"}}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between md:w-max py-1 px-4 bg-white rounded-xl md:ml-auto w-full">
              <input type="text" className="bg-transparent border-none focus:outline-none"/>
              <button type="submit" className="border-none outline-none bg-transparent cursor-text"><SearchIcon/></button>
            </div>  
            <div className="mt-16 md:flex text-center md:text-left items-center lg:justify-between text-white lg:w-max">
              <Image src="/Blason_du_Burundi.svg" width={200} height={248}/>
              <h1 className="md:text-6xl text-3xl ml-4 font-bold">Presidency of the <br/>Republic of Burundi</h1>
            </div>
            <div className="mt-12 mb-24 md:flex justify-around text-white bg-green-50 bg-opacity-30 rounded-md p-6">
              <Link href="/"><a className="block hover:text-green-400 transition ease-in duration-200">Home</a></Link>
              <Link href="/governement"><a className="block hover:text-green-400 transition ease-in duration-200">Governement</a></Link>
              <Link href="/"><a className="block hover:text-green-400 transition ease-in duration-200">Services</a></Link>
              <Link href="/about"><a className="block hover:text-green-400 transition ease-in duration-200">About</a></Link>
              <Link href="/"><a className="block hover:text-green-400 transition ease-in duration-200">News</a></Link>
            </div>
          </div>
      </section>
      <Header/>
      <section className="bg-center bg-cover py-12 text-white" style={{ backgroundImage:"url('/drummers.jpg')" }}>
        <div className="max-w-6xl px-4 md:text-left text-center mx-auto py-36 font-bold">
          <h2 className="md:text-4xl text-2xl">Welcome to</h2>
          <h1 className="md:text-8xl text-7xl">Burundi</h1>
        </div>
      </section>
      <section className="transform text-green-900 lg:-translate-y-1/2">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 lg:gap-5 gap-2 lg:my-0 my-7">
          <div className="rounded-md p-8 bg-green-100  bg-opacity-80">
            <h2 className="mb-8 text-2xl">Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="rounded-md p-8 bg-green-100  bg-opacity-80">
            <h2 className="mb-8 text-2xl">Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="rounded-md p-8 bg-green-100  bg-opacity-80">
            <h2 className="mb-8 text-2xl">Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto text-center ">
        <h1 className="text-2xl font-bold">Governement</h1>
        <p className="lg:w-3/4 mx-auto p-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="/" className="inline-block py-2 px-4  rounded-md text-gray-900 shadow-md bg-green-300">Adipiscing elit</a>
      </section>

      <section className="max-w-6xl mx-auto md:flex items-center py-28 text-xl">
        <div className="flex items-center w-full justify-center py-3 px-12"><TouchIcon/>Lorem ipsum</div>
        <div className="flex items-center w-full justify-center py-3 px-12 border-l"><TouchIcon/>Lorem ipsum</div>
        <div className="flex items-center w-full justify-center py-3 px-12 border-l"><TouchIcon/>Lorem ipsum</div>
      </section>

      <section className="max-w-6xl mx-auto text-center ">
        <h1 className="text-2xl font-bold">Services</h1>
        <p className="lg:w-3/4 mx-auto p-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="/" className="inline-block py-2 px-4  rounded-xl text-gray-900 shadow-md bg-green-300">Adipiscing elit</a>
      </section>

      <section className="max-w-6xl mx-auto mt-28 my-20 px-4 grid lg:grid-cols-3 md:grid-cols-2 gap-7">
        <div className="relative p-8 bg-green-300 bg-opacity-90 rounded-md">
          <TouchIcon className="absolute right-9"/>
          <h1 className="mb-8 text-xl font-semibold">Governement</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="relative p-8 bg-green-300 bg-opacity-90 rounded-md">
          <TouchIcon className="absolute right-9"/>
          <h1 className="mb-8 text-xl font-semibold">Lorem</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="relative p-8 bg-green-300 bg-opacity-90 rounded-md">
          <TouchIcon className="absolute right-9"/>
          <h1 className="mb-8 text-xl font-semibold">Ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="relative p-8 bg-green-300 bg-opacity-90 rounded-md">
          <TouchIcon className="absolute right-9"/>
          <h1 className="mb-8 text-xl font-semibold">Governement</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="relative p-8 bg-green-300 bg-opacity-90 rounded-md">
          <TouchIcon className="absolute right-9"/>
          <h1 className="mb-8 text-xl font-semibold">Lorem</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="relative p-8 bg-green-300 bg-opacity-90 rounded-md">
          <TouchIcon className="absolute right-9"/>
          <h1 className="mb-8 text-xl font-semibold">Ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
