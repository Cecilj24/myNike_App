import Button from "../components/Button"
const Subscribe = () => {
    return (
        <section className="max-container flex justify-between items-center max-lg:flex-col gap-10"
            id="contact-us"
        >
            <h3 className="font-palanquin leading-[68px] lg:max-w-md text-4xl font-bold">
                Sign up for
                <span className="text-coral-red">  Updates  </span>
                And Newsletters
            </h3>
            <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col">
                <input type="text"
                    placeholder="subscribe@nike.com"
                    className="input border-solid"
                />
                <div className="flex max-sm:justify-end items-center
                max-sm:w-full justify-between">
                    <Button
                        label="Sign Up"
                        fullWidth />
                </div>
            </div>
        </section>
    )
}

export default Subscribe