import Head from 'next/head'
import Image from "next/image"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Submenu from '../components/Submenu'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Burundi presidency | Governement</title>
      </Head>
      <Header/>
      <Submenu/>

      {/* hero goes here  */}
      <div className="bg-cover bg-bottom bg-fixed" style={{backgroundImage:"url('/Palais-Ntare-House.jpg')"}}>
        <div className="mx-auto max-w-6xl text-white pt-16 px-4">
          <h1 className="text-2xl py-6 font-bold">The Government of Burundi</h1>
          <p className="max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh. Eu ultrices vitae auctor eu augue ut. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis aenean et tortor at risus. Orci nulla pellentesque dignissim enim. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.</p>
        </div>
        <div className="max-w-6xl mx-auto md:flex px-4 mt-20">
          <div className="bg-white p-10 w-full shadow-sm hover:shadow-lg border-gray-200 border">
            <h3 className="text-2xl text-green-500">4</h3>
            <p className="text-gray-600">Branches of Governement</p>
          </div>
          <div className="bg-white p-10 w-full shadow-sm hover:shadow-lg border-gray-200 border">
            <h3 className="text-2xl text-green-500">2</h3>
            <p className="text-gray-600">Chambers of Parliament</p>
          </div>
          <div className="bg-white p-10 w-full shadow-sm hover:shadow-lg border-gray-200 border">
            <h3 className="text-2xl text-green-500">20</h3>
            <p className="text-gray-600">Ministries</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex md:flex-row flex-col justify-between items-center py-28">
        <Image src="/map.svg" width={400} height={400}/>
        <div className="md:w-6/12 w-full ">
          <h1 className="text-2xl font-bold text-center lg:text-left mt-10 lg:mt-0">Government entities</h1>
          <div className="mt-14 md:flex flex-wrap">
            <div className="border border-gray-100 font-bold p-10 md:w-2/6 text-center">
              <p className="text-2xl text-green-500">20</p>
              <p>Ministries</p>
            </div>
            <div className="border border-gray-100 font-bold p-10 md:w-2/6 text-center">
              <p className="text-2xl text-green-500">18</p>
              <p>Provinces</p>
            </div>
            <div className="border border-gray-100 font-bold p-10 md:w-2/6 text-center">
              <p className="text-2xl text-green-500">12,024</p>
              <p>Villages</p>
            </div>
            <div className="border border-gray-100 font-bold p-10 md:w-2/6 text-center">
              <p className="text-2xl text-green-500">516</p>
              <p>cells</p>
            </div>
            <div className="border border-gray-100 font-bold p-10 md:w-2/6 text-center">
              <p className="text-2xl text-green-500">50</p>
              <p>Disticts</p>
            </div>
            <div className="border border-gray-100 font-bold p-10 md:w-2/6 text-center">
              <p className="text-2xl text-green-500">20</p>
              <p>Ministries</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
