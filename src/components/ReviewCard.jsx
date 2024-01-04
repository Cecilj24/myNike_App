import { star } from "../assets/icons"
import { customer2 } from "../assets/images"


const ReviewCard = () => {
    return (
        <div className="flex justify-center items-center flex-col mt-3">
            <img src={customer2}
                alt="customer"
                className="rounded-full object-cover w-[120px] h-[-120px]"
            />
            <p
                className="mt-6 max-w-sm text-center info-text"
            >The product was challenging. Not only did I meet my personal expectations but I exceeded them and grew
                as a programmer!</p>
            <div className="mt-2">
                <img src={star}
                    width={24}
                    height={24}
                />
                <p className="font-palanquin ">(10/10)</p>
            </div>
            <h3 className="font-bold">Cecil John-Langba (creator)</h3>

        </div>
    )
}

export default ReviewCard