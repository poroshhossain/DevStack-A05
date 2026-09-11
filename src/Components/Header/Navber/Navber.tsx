import { RxHamburgerMenu } from "react-icons/rx"
import Logo from "./Logo"
import { useState } from "react"

const Navber = () => {

    const [activeClass, setActiveClass] = useState('signup');

    const navItem = [
        { name: 'Home', path: '/' },
        { name: 'Technologies', path: '/' },
        { name: 'Projects', path: '/' },
        { name: 'About', path: '/' },
        { name: 'Contact', path: '/' },
    ]
    return (
        <nav className="shadow-sm fixed top-0 w-full bg-cLight left-0 z-10 ">
            <div className="max-w-7xl mx-auto lg:px-6 sm:px-8 px-4">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className=" text-cMedium md:hidden cursor-pointer p-2">
                                <RxHamburgerMenu />
                            </div>
                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {
                                    navItem.map((menu) => <li key={menu.name}><a className="font-jakarta text-cMedium hover:text-cPrimary font-medium" href={menu.path}>{menu.name}</a></li>)
                                }
                            </ul>
                        </div>
                        <a href="/" className="cursor-pointer text-center text-xl"><Logo /> </a>
                    </div>

                    {/* desktop menu */}
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navItem.map((menu) => <li key={menu.path}><a className="hover:bg-transparent font-jakarta text-cMedium hover:text-cPrimary font-medium" href={menu.path}>{menu.name}</a></li>)
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a onClick={() => setActiveClass('signin')} className={`btn border-none rounded-2xl md:rounded-3xl ${activeClass === 'signin' ? 'bg-cPrimary text-cLight' : ''}  sm:text-cMedium`}>Sign In</a>
                        <a onClick={() => setActiveClass('signup')} className={`btn border-none rounded-2xl md:rounded-3xl ${activeClass === 'signup' ? 'bg-cPrimary text-cLight' : ''}  sm:text-cMedium`}>Sign up</a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navber