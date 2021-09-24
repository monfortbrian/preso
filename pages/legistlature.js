import Footer from "../components/Footer"
import Header from "../components/Header"
import Submenu from "../components/Submenu"

const legistlature = () => {
    return (
        <div className="text-gray-600">
            <Header/>
            <Submenu/>
            <div className="bg-cover bg-center py-24" style={{backgroundImage:"url('/burundi2.jpg')"}}>
                <div className="max-w-6xl mx-auto px-4 text-gray-100">
                    <h1 className="text-2xl font-bold mb-3">The Parliament of Burundi</h1>
                    <p className="max-w-2xl text-justify">
                    Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Sit amet cursus sit amet dictum. Phasellus faucibus scelerisque eleifend donec. Vitae tempus quam pellentesque nec nam. Vestibulum mattis ullamcorper velit sed. Morbi tempus iaculis urna id.Vitae tempus quam pellentesque nec nam. Vestibulum mattis ullamcorper velit sed. Morbi tempus iaculis urna id. 
                    </p>
                </div>
            </div>
            <div className="max-w-6xl py-28 mx-auto md:flex md:space-x-16 px-4 text-justify">
                <div className="py-2">
                    <h1 className="text-2xl font-bold mb-4">Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh. Eu ultrices vitae auctor eu augue ut. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis aenean et tortor at risus.</p>
                    </div>
                <div className="py-2">
                    <h1 className="text-2xl font-bold mb-4">Lorem ipsum</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Urna et pharetra pharetra massa massa ultricies mi quis. Euismod quis viverra nibh cras pulvinar. Nunc lobortis mattis aliquam faucibus purus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh. Eu ultrices vitae auctor eu augue ut. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis aenean et tortor at risus.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default legistlature
