import Navber from "./Navber/Navber"

interface HeaderProps {

}

const Header = (props: HeaderProps) => {
    return (
        <header>
            <Navber/>
            <div className="">

            </div>
        </header>
    )
}

export default Header