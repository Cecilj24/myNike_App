import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-center text-4xl font-bold">
                What Our  <span className="text-coral-red"
                > Creator </span>
                <br />
                Say
            </h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center">
                Hear genuine testimonies from our creator and his journey in building this
                Nike prototype website.
            </p>
            <div>
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))}
            </div>
        </section>
    )
}

export default CustomerReviews