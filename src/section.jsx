import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Carousel } from "react-responsive-carousel";
import Heading from "./Heading";
import { Rating } from "react-simple-star-rating";
import gradients from './grads.json'
import { useInView } from "react-intersection-observer";
const gradient = () => {
    let length = gradients.gradients.length - 1
    let randomINDEX = Math.floor(Math.random() * (length - 0 + 1)) + 0;
    return gradients.gradients[randomINDEX]
}


export default function Section({ children, title, background, isMobile, color, type }) {
    //dvidie teh children
    let divisionCONSTANTS = {
        'review': { mobile: 1, desktop: 5 },
        'other': { mobile: 3, desktop: 5 }
    }
    console.log(divisionCONSTANTS[type || 'other'][isMobile ? 'mobile' : 'desktop'])
    let divisionCONSTANT = divisionCONSTANTS[type || 'other'][isMobile ? 'mobile' : 'desktop']
    let childgroups = []
    children.forEach((child, index) => {
        let groupindex = Math.floor(index / divisionCONSTANT)
        //make if not exist
        if (childgroups[groupindex]) {
            childgroups[groupindex].push(child)
        } else {
            childgroups[groupindex] = [child]
        }
    });
    console.log(childgroups)

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 1,
        triggerOnce: false
    });
    return (
        <>
            <Heading ref={ref} text={title} />
            <p ref={ref} style={{ margin: 0 }}></p>
            <Carousel style={{ background: background || gradient() }} emulateTouch autoPlay={false} showIndicators={false} showThumbs={false} showStatus={false}>

                {

                    childgroups.map((group, mainindex) => (
                        <div style={{ display: 'grid', justifyItems: 'center', transform: inView ? 'translate(0, 0px)' : 'translate(0, -20px)',  opacity: inView ? 1 : 0, transition: '1.5s', background: background || gradient(), gridAutoFlow: 'column', color: color }}>
                            {
                                group.map(({ title, link, picture, text, rate, reviewer }, index) => (

                                    type == 'review' ? (
                                        <div style={{ display: 'grid', margin: '20px 0px',  gridAutoFlow: 'row', maxHeight: '20vh', width: (window.innerWidth / divisionCONSTANT) * 0.6, height: window.innerWidth / divisionCONSTANT - 10, borderRadius: 50, background: gradient(index) }}>
                                            <p style={{ color: 'white' }}>
                                                {text}
                                            </p>
                                            <Rating
                                                readonly={true}
                                                initialValue={rate}
                                                allowFraction={true}
                                                size={20}
                                            />
                                        </div>

                                    ) : (
                                        <Card
                                            onClick={() => { window.location.href = link }}
                                            style={{ width: `${100 / divisionCONSTANT - 1}vw` }}
                                            hoverable
                                            cover={<img style={{ maxWidth: `${100 / divisionCONSTANT - 2}vw`, borderRadius: 30 }} src={picture} />}
                                        >
                                            <Meta title={title} />
                                        </Card>
                                    )
                                ))
                            }
                        </div>
                    ))
                }
            </Carousel>
        </>
    )
}