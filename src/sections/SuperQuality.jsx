import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
    return (
        <section id="about-us"
            className="flex justify-between items-center
        max-lg:flex-col gap-10 w-full max-container"
        >
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize
                font-bold lg:max-w-lg"> We Provide You
                    <br />
                    <span className="
                    text-coral-red inline-block
                    mt-3"> Super Quality</span>
                    <br />
                    Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    We ensure premium confort and style, our top of the line footwear
                    guarantees you unmatched quality, innovation and stares everywhere you go
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Our dedication to detail and excellence ensures your
                    Satisfaction thanks!
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button
                        label="View details"

                    />

                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img
                    src={shoe8}
                    alt="shoe8"
                    width={570}
                    height={522}
                    className="object-contain"
                />
            </div>
        </section>
    )
}

export default SuperQuality