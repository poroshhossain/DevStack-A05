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
            <div className="max-w-7xl mx-auto px-4">
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


                        <div className="hidden md:flex">
                            <Logo />
                        </div>

                    </div>


                    {/* desktop menu */}
                    <div className="navbar-center">
                        <ul className="menu menu-horizontal px-1 hidden md:flex">
                            {
                                navItem.map((menu) => <li key={menu.name}><a className="hover:bg-transparent font-jakarta text-cMedium hover:text-cPrimary font-medium" href={menu.path}>{menu.name}</a></li>)
                            }
                        </ul>
                        <div className="md:hidden flex">
                            <Logo />
                        </div>

                    </div>
                    <div className="navbar-end">
                        <div className="flex items-center header-action">
                            <a onClick={() => setActiveClass('signin')} className={`btn btn-xs md:btn-md capitalize font-jakarta  border-none rounded-2xl md:rounded-3xl ${activeClass === 'signin' ? 'bg-cPrimary text-cLight' : ''} text-cSmall md:text-cMedium `}>Sign In</a>
                            <a onClick={() => setActiveClass('signup')} className={`btn btn-xs md:btn-md capitalize font-jakarta border-none rounded-2xl md:rounded-3xl ${activeClass === 'signup' ? 'bg-cPrimary text-cLight' : ''} text-cSmall md:text-cMedium`}>Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navber