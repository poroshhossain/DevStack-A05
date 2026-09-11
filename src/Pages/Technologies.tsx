import { use, useState } from "react"
import type { ITechnologyType } from "../type";
import TechnologiesCard from "../Components/Technologies/TechnologiesCard";

interface TechnologiesProp {
    technologyData: Promise<ITechnologyType[]>
}
const Technologies = ({ technologyData }: TechnologiesProp) => {
    const techData = use(technologyData);

    const [cart, setCart] = useState<ITechnologyType[]>([]);
    const handleAddToStack = (item: ITechnologyType): void => {
        const newCart = [...cart, item];
        setCart(newCart)
    }

    return (
        <section>
            <div className="max-w-7xl mx-auto lg:px-8 sm:px-6">
                <div className="capitalize md:text-left text-center">
                    <h2 className="text-3xl font-inter font-semibold">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent ">Technologies</span></h2>
                    <p className="font-jakarta text-cMedium text-cText-color">Pick one technology per category to build your ideal stack.</p>
                </div>
                {/* service */}
                <div className="grid md:grid-cols-12 grid-cols-1 p-4">
                    <div className="md:col-span-9 ">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {
                                techData.map((item) => <TechnologiesCard key={item.id} techItem={item} handleAddToStack={handleAddToStack} />)
                            }
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <div className="font-jakarta p-4 shadow-sm">

                            {
                                cart.length ? (
                                    <div className="">
                                        {
                                            cart.map((data)=> <li>{data.name}</li> )
                                        }
                                    </div>
                                ) : (
                                    <div className="">
                                        <h2 className="font-bold text-[18px]">Your Stack</h2>
                                        <p>No technologies selected yet.</p>
                                        <p className="py-6 px-4 text-center border-2 border-dashed border-[#ddd] rounded-2xl m-6 font-jakarta">Your stack is empty.</p>
                                    </div>
                                )
                            }

                            {/* <h2 className="font-bold text-[18px]">Your Stack</h2>
                            <p>No technologies selected yet.</p>

                            <p className="py-6 px-4 text-center border-2 border-dashed border-[#ddd] rounded-2xl m-6 font-jakarta">Your stack is empty.</p> */}

                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Technologies