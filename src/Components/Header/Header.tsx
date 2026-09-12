import Navber from "./Navber/Navber"
import heroBenner from '../../assets/banner-stack.png'
import { useState } from "react"
const Header = () => {
    const [activeBtn, setActiveBtn] = useState(1);
    return (
        <header className="bg-cLight ">
            <Navber />
            <div className="pt-10 md:pt-0 mt-15 xl:mt-0 ">
                <div className="max-w-7xl mx-auto px-4">
                    <div className=" grid grid-cols-1 md:grid-cols-2 items-center">
                        {/* hero left */}
                        <div className="hero-left">
                            <h1 className=" font-inter text-center md:text-left text-3xl sm:text-4xl lg:text-cExtraLarge font-bold leading-none capitalize">Build Your Ideal <br /><span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h1>
                            <p className=" py-4 font-jakarta lg:w-5/6 text-center md:text-left  text-cText-color text-[18px]">Explore frontend, backend, database, and tooling options,
                                compare them side by side, and put together the stack that fits your 
                                next project.</p>
                            <div className=" mt-6 pt-6 w-full text-center  md:text-left space-x-1">
                                <a onClick={() => setActiveBtn(1)} className={`btn  ${activeBtn === 1 ? 'bg-linear-to-r from-cSecondary to-cPrimary text-cLight' : 'text-cText-color bg-cLight'}`} href="#">Explore Technologies</a>
                                <a onClick={() => setActiveBtn(2)} className={`btn  ${activeBtn === 2 ? 'bg-linear-to-r from-cSecondary to-cPrimary text-cLight' : 'text-cText-color bg-cLight'} `} href="#">Learn More</a>
                            </div>
                        </div>
                        {/* hero right */}
                        <div className="flex items-center justify-center">
                            <div className="w-87.5 h-80 md:h-full md:w-full rounded-3xl p-4">
                                <img
                                    src={heroBenner}
                                    alt='hero img'
                                    className="w-full h-full relative rounded-2xl object-contain transition-transform duration-500 hover:scale-[1.03]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header