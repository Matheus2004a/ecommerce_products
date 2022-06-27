import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"
import product1 from "../../images/image-product-1.jpg"
import product2 from "../../images/image-product-2.jpg"
import product3 from "../../images/image-product-3.jpg"
import product4 from "../../images/image-product-4.jpg"
import "./slider.css"

const SlideProducts = () => {
    const slideImages = [
        {
            prod: product1,
            description: "image-product-1"
        },
        {
            prod: product2,
            description: "image-product-2"
        },
        {
            prod: product3,
            description: "image-product-3"
        },
        {
            prod: product4,
            description: "image-product-4"
        }
    ]

    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <img src={slideImage.prod} alt={slideImage.description}>
                        </img>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default SlideProducts