const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
        <div className="flex-1 sm:w-[]350px sm:min-w-[350px] w-full
        rounded shadow-3xl px-10 py-16">
            <div>
                <img src={imgURL}
                    alt=""

                />
            </div>

        </div>
    )
}

export default ServiceCard