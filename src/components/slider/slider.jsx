import { useState } from "react";
import { Fade } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css"
import product1 from "../../images/image-product-1.jpg"
import product2 from "../../images/image-product-2.jpg"
import product3 from "../../images/image-product-3.jpg"
import product4 from "../../images/image-product-4.jpg"
import "./slider.css"

const SlideProducts = () => {
    const [currentProd, setCurrentProd] = useState(0)
    const [modal, setModal] = useState(false)

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

    function changeImgSlider(index) {
        setCurrentProd(index)
        setModal(true)
    }

    return (
        <>
            <div className="slide-container">
                <Fade>
                    {slideImages.map((slideImage, index) => (
                        <div className="each-slide" key={index}>
                            <img src={slideImage.prod} alt={slideImage.description}></img>
                        </div>
                    ))}
                </Fade>

                <div className="photos-slide">
                    {slideImages.map((image, index) => (
                        <figure>
                            <img src={image.prod} onClick={() => changeImgSlider(index)} alt={image.description} />
                        </figure>
                    ))}
                </div>
            </div>

            {modal && <div className="backdrop-prod">
                <div className="modal-prod">
                    <button onClick={() => setModal(false)}>
                        &times;
                    </button>
                    <figure>
                        <img src={slideImages[currentProd].prod} alt={slideImages[currentProd].description} />
                    </figure>
                    <div className="photos-slide">
                        {slideImages.map((image, index) => (
                            <img src={image.prod} onClick={() => changeImgSlider(index)} alt={image.description} />
                        ))}
                    </div>
                </div>
            </div>}
        </>
    )
}

export default SlideProducts