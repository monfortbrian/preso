import Head from 'next/head'
import Header from "../components/Header"
import Image from "next/image"
import Footer from "../components/Footer"

const about = () => {
    return (
        <div>
            <Head>
                <title>Burundi presidency | About</title>
            </Head>
            <Header/>
            <div className="shadow-sm sticky top-0 z-10 bg-gray-50">
                <div className="max-w-6xl mx-auto flex justify-between lg:px-4 px-10 py-4">
                <h1 className="text-2xl font-bold">About </h1>
                <nav>
                    <ul className="flex space-x-5 text-gray-500">
                    <li><a href="#overview" className="text-sm hover:text-green-400">OVERVIEW</a></li>
                    <li><a href="#geography" className="text-sm hover:text-green-400">GEOGRAPHY</a></li>
                    <li><a href="#culture" className="text-sm hover:text-green-400">PEOPLE & CULTURE</a></li>
                    <li><a href="#history" className="text-sm hover:text-green-400">HISTORY</a></li>
                    </ul>
                </nav>
                </div>
            </div>

            {/* Overview goes here */}
            <div className="max-w-6xl mx-auto py-14 lg:px-4 px-10 text-gray-600 text-justify" id="overview">
                <h1 className="text-2xl my-4 font-semibold">Overview</h1>
                <p className="max-w-3xl mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh. Eu ultrices vitae auctor eu augue ut. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis aenean et tortor at risus. Orci nulla pellentesque dignissim enim. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.</p>
                <div className="flex w-1/3 justify-between">
                    <p className="w-1/2"><strong>Name</strong></p>
                    <p className="w-1/2">Republic of Burundi</p>
                </div>
                <div className="flex w-1/3 my-2 justify-between">
                    <p className="w-1/2"><strong>Capital city</strong></p>
                    <p className="w-1/2">Bujumbura</p>
                </div>
            </div>

            {/* descriptions  */}
            <div className="max-w-6xl mx-auto flex flex-wrap lg:flex-nowrap">
                <div className="border border-gray-100 p-8 lg:w-1/6 md:w-1/3 w-full text-center">
                    <p className="text-green-500 text-2xl font-bold mb-4 ">26,338 Km²</p>
                    <p>Size</p>
                </div>
                <div className="border border-gray-100 p-8 lg:w-1/6 md:w-1/3 w-full text-center">
                    <p className="text-green-500 text-2xl font-bold mb-4 ">12.3 Million</p>
                    <p>Population (NISR Projection 2019)</p>
                </div>
                <div className="border border-gray-100 p-8 lg:w-1/6 md:w-1/3 w-full text-center">
                    <p className="text-green-500 text-2xl font-bold mb-4 ">21°-27°</p>
                    <p>Temperature</p>
                </div>
                <div className="border border-gray-100 p-8 lg:w-1/6 md:w-1/3 w-full text-center">
                    <p className="text-green-500 text-2xl font-bold mb-4 ">67 years</p>
                    <p>Life expectancy</p>
                </div>
                <div className="border border-gray-100 p-8 lg:w-1/6 md:w-1/3 w-full text-center">
                    <p className="text-green-500 text-2xl font-bold mb-4 ">$787</p>
                    <p>GDP per capital</p>
                </div>
                <div className="border border-gray-100 p-8 lg:w-1/6 md:w-1/3 w-full text-center">
                    <p className="text-green-500 text-2xl font-bold mb-4 ">+8%</p>
                    <p>GDP growth per annum</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-32 px-10 lg:px-4">
                <div>
                    <Image src="/emblem.png" height={120} width={100}/>
                    <p className="py-10 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. </p>
                    <a href="/" className="flex items-center "><span className="block">Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg></a>
                </div>
                <div>
                    <Image src="/emblem.png" height={120} width={100}/>
                    <p className="py-10 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. </p>
                    <a href="/" className="flex items-center "><span className="block">Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg></a>
                </div>
                <div>
                    <Image src="/emblem.png" height={120} width={100}/>
                    <p className="py-10 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. </p>
                    <a href="/" className="flex items-center "><span className="block">Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg></a>
                </div>
            </div>

            <div id="geography" className="bg-cover bg-center py-28 lg:px-4 px-10 text-gray-300" style={{backgroundImage:"url('/burundi1.png')"}}>
                <div className="max-w-6xl mx-auto text-justify">
                    <h1 className="text-2xl font-bold my-6">Geography</h1>
                    <p className="max-w-2xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh. Eu ultrices vitae auctor eu augue ut. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis aenean et tortor at risus.</p>
                    <p className="max-w-2xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh. Eu ultrices vitae auctor eu augue ut. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis aenean et tortor at risus.</p>
                    <p className="max-w-2xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh. Eu ultrices vitae auctor eu augue ut. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis aenean et tortor at risus.</p>
                </div>
            </div>

            <div className="max-w-6xl py-28 mx-auto flex flex-wrap lg:flex-nowrap">
                <div className="border border-gray-100 p-8 lg:w-1/4 md:w-1/2 w-full text-center">
                    <p className="text-green-500 text-2xl font-bold mb-4 ">26,338 Km²</p>
                    <p>Size</p>
                </div>
                <div className="border border-gray-100 p-8 lg:w-1/4 md:w-1/2 w-full text-center">
                    <p className="text-green-500 text-2xl font-bold mb-4 ">12.3 Million</p>
                    <p>Lorem ipsum</p>
                </div>
                <div className="border border-gray-100 p-8 lg:w-1/4 md:w-1/2 w-full text-center">
                    <p className="text-green-500 text-2xl font-bold mb-4 ">21°-27°</p>
                    <p>Temperature</p>
                </div>
                <div className="border border-gray-100 p-8 lg:w-1/4 md:w-1/2 w-full text-center">
                    <p className="text-green-500 text-2xl font-bold mb-4 ">67 years</p>
                    <p>Life expectancy</p>
                </div>
            </div>  

            <div id="culture" className="bg-cover bg-center lg:px-4 px-10 py-28 text-gray-300" style={{backgroundImage:"url('/drummers.jpg')"}}>
                <div className="max-w-6xl mx-auto text-justify">
                    <h1 className="text-2xl font-bold my-6">People & culture</h1>
                    <p className="max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh. Eu ultrices vitae auctor eu augue ut. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis aenean et tortor at risus.</p>
                    <p className="max-w-2xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh. Eu ultrices vitae auctor eu augue ut. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis aenean et tortor at risus.</p>
                    <p className="max-w-2xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh. Eu ultrices vitae auctor eu augue ut. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis aenean et tortor at risus.</p>
                </div>
            </div> 

            <div className="grid md:grid-cols-3  max-w-6xl mx-auto py-32 px-10 lg:px-4">
                <div className="border p-8">
                    <Image src="/emblem.png" height={120} width={100}/>
                    <p className="py-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque</p>
                    <a href="/" className="flex items-center "><span className="block">Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg></a>
                </div>
                <div className="border p-8">
                    <Image src="/emblem.png" height={120} width={100}/>
                    <p className="py-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <a href="/" className="flex items-center "><span className="block">Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg></a>
                </div>
                <div className="border p-8">
                    <Image src="/emblem.png" height={120} width={100}/>
                    <p className="py-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    <a href="/" className="flex items-center "><span className="block">Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg></a>
                </div>
            </div> 

            <div id="history" className="bg-cover bg-center py-28 lg:px-4 px-10 text-gray-300" style={{backgroundImage:"url('/burundi1.png')"}}>
                <div className="max-w-6xl mx-auto text-justify">
                    <h1 className="text-2xl font-bold my-6">History</h1>
                    <p className="max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh. Eu ultrices vitae auctor eu augue ut. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis aenean et tortor at risus.</p>
                </div>
            </div>  

            <div className="max-w-6xl py-28 mx-auto md:flex md:space-x-16 lg:px-4 px-10 text-justify">
                <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh. Eu ultrices vitae auctor eu augue ut. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis aenean et tortor at risus.</p>
                <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh. Eu ultrices vitae auctor eu augue ut. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis aenean et tortor at risus.</p>
            </div>

            <Footer/>   
        </div>
    )
}

export default about
