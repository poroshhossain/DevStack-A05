import { RxHamburgerMenu } from "react-icons/rx"
import Logo from "./Logo"

const Navber = () => {
    const navItem = [
        { name: 'Home', path: '/home' },
        { name: 'Technologies', path: '/technologies' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]
    return (
        <nav className="shadow-sm ">
            <div className="max-w-7xl mx-auto">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn md:hidden">
                                <RxHamburgerMenu />
                            </div>
                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {
                                    navItem.map((menu) => <li key={menu.path}><a className="font-jakarta text-cMedium hover:text-cPrimary font-medium" href={menu.path}>{menu.name}</a></li>)
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
                        <a className="btn bg-transparent border-none rounded-3xl hover:rounded-3xl hover:bg-cPrimary hover:text-cLight sm:text-cMedium">Sign In</a>
                        <a className=" btn bg-transparent border-none rounded-3xl hover:rounded-3xl hover:bg-cPrimary hover:text-cLight sm:text-cMedium">Sign up</a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navber