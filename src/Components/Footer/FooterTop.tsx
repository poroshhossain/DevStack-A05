import Logo from "../Header/Navber/Logo"

const FooterTop = () => {
    return (
        <section className="footer-top py-4 border-t border-border-color/30">
            <div className="max-w-7xl mx-auto border-b border-border-color/30 py-8 px-4">
                <div className=" grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="col-span-6 ">
                        <div className="flex flex-col items-center justify-center md:justify-start md:items-start">
                            <Logo />
                            <p className="font-jakarta text-center md:text-left text-[12px] font-medium text-cText-color opacity-50 py-3 w-2/3">Curated tools, technologies, and resources for developers building modern software.</p>
                            <ul className="flex gap-4 pt-3 social-item">
                                <a href="">GitHub</a>
                                <a href="">Twitter</a>
                                <a href="">LinkedIn</a>
                            </ul></div>
                    </div>
                    <div className="col-span-2 hidden md:flex">
                        <div className="flex flex-col items-start gap-4">
                            <h3>PRODUCT</h3>
                            <div className="flex flex-col items-start ">
                                <a href="#">Home</a>
                                <a href="#">Technologies</a>
                                <a href="#">Projects</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 hidden md:flex">
                        <div className="flex flex-col items-start gap-4">
                            <h3>COMPANY</h3>
                            <div className="flex flex-col items-start  ">
                                <a href="#">About</a>
                                <a href="#">Contact</a>
                                <a href="#">Careers</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 hidden md:flex">
                        <div className="flex flex-col items-start gap-4">
                            <h3>LEGAL</h3>
                            <div className="flex flex-col items-start ">
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms of Service</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FooterTop