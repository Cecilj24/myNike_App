import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
    return (
        <section id="products"
            className="max-container max-sm:mt-12"

        >
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-palanquin font-bold"
                ><span className="text-coral-red"> Popular </span>
                    Products</h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray"
                >Go for all your fitness goals with our collection of new kicks
                    breathable apparel and more supportive styles
                </p>

            </div>
            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 
            sm:grid-cols-2 grid-cols-1"
            >
                {products.map((product) => (
                    // havent made this yet
                    <PopularProductCard key={product.name} {...product} />
                ))}

            </div>
        </section>
    )
}

export default PopularProducts