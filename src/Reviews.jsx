import { Carousel } from "react-responsive-carousel";
import { Rating } from "react-simple-star-rating";
import Heading from "./Heading";

export default function Reviews({ config, crsconfig }) {
    return (
        <div style={{margin: '5vh 0'}}>
            <Heading text='Testimonials' />
            <Carousel {...crsconfig} showStatus={false}>
            {
                config.allReviews.map(singleRev => (
                    <div style={{display:'grid', gridAutoFlow: 'row', minHeight: '20vh', border: '1px solid red'}}>
                        {singleRev.text}
                        <Rating 
                        readonly={true}
                        initialValue={singleRev.rate}
                        allowFraction={true}
                    size={20}
                        />
                    </div>
                ))
            }
        </Carousel>
        </div>
    )
}