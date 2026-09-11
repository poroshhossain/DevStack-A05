import { IoStar } from "react-icons/io5";
import type { ITechnologyType } from "../../type"

interface TechnologiesCardProps {
    techItem: ITechnologyType;
    handleAddToStack:(techItem: ITechnologyType)=> void;
}

const TechnologiesCard = ({ techItem, handleAddToStack }: TechnologiesCardProps) => {
    const { name, badge, description, icon, level, rating, category, color } = techItem;
    console.log(color);
    return (
        <div className="card w-full shadow-sm relative">
            <div className=" p-3 shrink-0">
                <img
                    src={icon}
                    alt="Shoes" className="w-7 h-8" />
                <h2 className=" pt-2 card-title text-[18px] font-bold text-cText">{name}</h2>

            </div>

            <p className='text-[12px] absolute right-0 top-0 py-1 px-2 m-4 rounded-2xl' style={{
                color: color, backgroundColor: `${color}12`, border: `1px solid ${color}30`
            }}>{badge}</p>

            <div className="card-body px-3 py-0 m-0 ">
                <p className="text-[12px] font-jakarta text-[#64748B]">{description}</p>
                <div className="card-actions items-center mt-4 font-jakarta font-medium text-cText text-cMedium">
                    <p className="py-1 px-1 text-center bg-cText/5 ">{category}</p>
                    <p>{level}</p>
                    <p className="flex items-center gap-1"> <IoStar className="text-[#FBBF24] text-cSmall" /> {rating}</p>
                </div>
            </div>

            <button onClick={()=> handleAddToStack(techItem)} className="btn m-4 bg-cText text-cLight font-inter">Add to Stack</button>
        </div>
    )
}

export default TechnologiesCard