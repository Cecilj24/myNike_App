/* eslint-disable react/prop-types */
const ShoeCard = ({ imgURL, bigShoeImg, changeBigShoeImage }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {

            changeBigShoeImage(imgURL.bigShoe)
        }
    }

    return (
        <div className={`border-2 rounded-xl
       ${bigShoeImg === imgURL
                ? 'border-coral-red'
                : 'border-transparent'
            } cursor-pointer max-sm:flex-1
        `}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center border-4 border-indigo-600 bg-center bg-cover bg-black sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img src={imgURL.thumbnail}
                    alt="shoe collection"
                    width={127}
                    height={103}
                    className="object-contain"

                />
            </div>
        </div>
    )
}

export default ShoeCard