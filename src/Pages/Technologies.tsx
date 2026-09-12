import { use, useState } from "react"
import type { ITechnologyType } from "../type";
import TechnologiesCard from "../Components/Technologies/TechnologiesCard";
import AddCartCard from "../Components/Technologies/AddCartCard";
import { toast } from "react-toastify";

interface TechnologiesProp {
    technologyData: Promise<ITechnologyType[]>
}
const Technologies = ({ technologyData }: TechnologiesProp) => {
    const techData = use(technologyData);

    const [cart, setCart] = useState<ITechnologyType[]>([]);
    const handleAddToStack = (item: ITechnologyType): void => {
        const alradyExit = cart.some((pdItem) => pdItem.id === item.id);
        if (alradyExit) {
            toast.error(`${item.name} alrady exit`)
            return;
        }
        const newCart = [...cart, item];
        setCart(newCart)
    }


    const handleRemoveCart = (item: ITechnologyType): void => {
        const delateItem = cart.filter((pd) => pd.id !== item.id);
        setCart(delateItem);
        toast.success(`${item.name} remove item`)

    }

    const handlAllRemoveCart = (): void => {
        setCart([]);
        toast.success('all cart item remove')
    }

    return (
        <section>
            <div className="max-w-7xl mx-auto px-4">
                <div className="capitalize md:text-left text-center">
                    <h2 className="text-3xl font-inter font-semibold">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent ">Technologies</span></h2>
                    <p className="font-jakarta text-cMedium text-cText-color">Pick one technology per category to build your ideal stack.</p>
                </div>
                {/* service */}
                <div className="grid md:grid-cols-12 grid-cols-1 py-4 gap-4">
                    <div className="md:col-span-9 ">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 tech-servise">
                            {
                                techData.map((item) => <TechnologiesCard key={item.id} cart={cart} techItem={item} handleAddToStack={handleAddToStack} />)
                            }
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <div className="font-jakarta py-6 px-4 shadow-sm">
                            <h2 className="font-bold text-[18px] pt-6">Your Stack</h2>

                            {
                                cart.length ? (
                                    <div className="font-jakarta">
                                        <h2 className="text-cMedium pb-4 text-[#94A3B8] font-jakarta capitalize">{cart.length} Technology Selected</h2>
                                        {
                                            cart.map((data) => <AddCartCard key={data.id} handleRemoveCart={handleRemoveCart} data={data} />)
                                        }
                                        <button onClick={handlAllRemoveCart} className="btn w-full hover:border hover:border-cPrimary hover:text-cPrimary">All Remove</button>
                                    </div>
                                ) : (
                                    <div className="">
                                        <p>No technologies selected yet.</p>
                                        <p className="py-6 px-4 text-center border-2 border-dashed border-[#ddd] rounded-2xl m-6 font-jakarta">Your stack is empty.</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Technologies