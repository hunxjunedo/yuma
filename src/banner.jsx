import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Banner({ config, isMobile }) {
    console.log(config.images)
    return (
        <Carousel  {...config} >
            {
                config.images.map((slide, index) =>
                (

                    <div onClick={()=>{window.location.href = slide.link}} key={index} >
                        <img style={{ borderRadius: 20, cursor: 'pointer' }} src={isMobile ? slide.mobilepic : slide.picture} />
                    </div>)
                )
            }

        </Carousel>
    )
}