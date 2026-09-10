import Logo from "./Logo"

const Navber = () => {
    const navLinks = [
        { name: 'Home', path: '/home' },
        { name: 'Technologies', path: '/technologies' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]
    return (
        <nav>
            <div className="max-w-7xl mx-auto">
                <div className="">
                    {/* logo */}
                    <Logo />
                    {/* main menu */}
                    <ul>
                        {navLinks.map((menu) => <li key={menu.path}>
                            <a href={menu.path}>{menu.name}</a>
                        </li>)}
                    </ul>
                    <div className="nav-action">
                        <a href="/signin">
                            <button>Sign In</button>
                        </a>
                        <a href="/signup">
                            <button>Sign Up</button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navber