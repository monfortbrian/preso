import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Submenu from '../components/Submenu'

const judiciary = () => {
    return (
        <div className="text-gray-600">
            <Header/>
            <Submenu/>
            <div className="bg-cover bg-center py-24" style={{backgroundImage:"url('/burundi2.jpg')"}}>
                <div className="max-w-6xl mx-auto px-4 text-gray-100">
                    <h1 className="text-2xl font-bold mb-3">The Judiciary</h1>
                    <p className="max-w-2xl text-justify">
                    Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Sit amet cursus sit amet dictum. Phasellus faucibus scelerisque eleifend donec. Vitae tempus quam pellentesque nec nam. Vestibulum mattis ullamcorper velit sed. Morbi tempus iaculis urna id.Vitae tempus quam pellentesque nec nam. Vestibulum mattis ullamcorper velit sed. Morbi tempus iaculis urna id. 
                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-14">
                <h1 className="text-2xl font-bold mb-5">Overview</h1>
                <div className="md:flex text-justify md:space-x-10">
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Pretium quam vulputate dignissim suspendisse in est ante. Sed pulvinar proin gravida hendrerit lectus. Orci dapibus ultrices in iaculis nunc.
                        </p>
                        <h2 className="text-xl font-semibold my-4">Elit duis tristique sollicitudin nibh sit amet.</h2> 
                        <ul className="space-y-2">
                            <li>1° Condimentum vitae sapien pellentesque habitant.</li>
                            <li>2° Pretium quam vulputate dignissim suspendisse in est ante.</li>
                            <li>3° Condimentum vitae sapien pellentesque habitant.</li>
                            <li>4° Sed pulvinar proin gravida hendrerit lectus. Orci dapibus ultrices in iaculis nunc.</li>
                        </ul>   
                        <h2 className="text-xl font-semibold my-4">consectetur adipiscing elit, sed do eiusmod.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Pretium quam vulputate dignissim suspendisse in est ante. Sed pulvinar proin gravida hendrerit lectus. Orci dapibus ultrices in iaculis nunc.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Pretium quam vulputate dignissim sed do eiusmod.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Pretium quam vulputate dignissim suspendisse in est ante. Sed pulvinar proin gravida hendrerit lectus. Orci dapibus ultrices in iaculis nunc.
                        </p>
                        <h2 className="text-xl font-semibold my-4">consectetur adipiscing elit, sed do eiusmod.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Pretium quam vulputate dignissim suspendisse in est ante. Sed pulvinar proin gravida hendrerit lectus. Orci dapibus ultrices in iaculis nunc.
                        </p>
                        <h2 className="text-xl font-semibold my-4">Incididunt ut labore et dolore magna aliqua.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Pretium quam vulputate dignissim suspendisse in est ante. Sed pulvinar proin gravida hendrerit lectus. Orci dapibus ultrices in iaculis nunc.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default judiciary
