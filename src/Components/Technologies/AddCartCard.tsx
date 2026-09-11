import { MdClose } from "react-icons/md";
import type { ITechnologyType } from "../../type"

interface AddCartCardProps {
    data: ITechnologyType;
    handleRemoveCart:(data: ITechnologyType) => void
}

const AddCartCard = ({ data, handleRemoveCart }: AddCartCardProps) => {
    const { name, icon, category } = data
    return (
        <div className="flex items-center justify-between my-2 py-3 px-2 shadow-sm  border border-[#ddd] ">
            <div className="">
                <div className="flex items-center gap-1 ">
                    <img className="w-4.5 h-5" src={icon} alt={name} />
                    <div className=" font-jakarta">
                        <h2 className="text-[10px] font-bold text-cText">{name}</h2>
                        <p className="text-[7px] font-bold text-cText-color">{category}</p>
                    </div>
                </div>
            </div>
            <button className="cursor-pointer btn"
            onClick={()=> handleRemoveCart(data)}
            >
                <MdClose />
            </button>

        </div>
    )
}

export default AddCartCard