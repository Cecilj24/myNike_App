import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"



const SpecialOffer = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div>
                <img src={offer}
                    alt=""
                    width={773}
                    height={687}
                    className="object-contain w-full"

                />
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize
                font-bold lg:max-w-lg">
                    <br />
                    <span className="
                    text-coral-red inline-block
                    mt-3"> Special</span>
                    <br />
                    Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Dont miss out! Check out our special offers and embark on
                    a shopping journey with unbeatable deals.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Our dedication to detail and excellence ensures your
                    Satisfaction
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label='Shop now' iconURL={arrowRight} />
                    <Button
                        label='Learn more'
                        backgroundColor='bg-white'
                        borderColor='border-slate-gray'>

                    </Button>
                </div>


            </div>

        </section>
    )
}

export default SpecialOffer