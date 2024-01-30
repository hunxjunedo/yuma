import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Carousel } from "react-responsive-carousel";
import Heading from "./Heading";

export default function Section({ children, title, background, isMobile, color }) {
    //dvidie teh children
    let divisionCONSTANT = isMobile ? 3 : 5
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
    return (
       <>
        <Heading text={title} />
        <Carousel style={{background: 'cyan'}} emulateTouch autoPlay={false} showIndicators={false} showThumbs={false}showStatus={false}>
            {
                childgroups.map((group) => (
                    <div style={{display: 'grid', justifyItems: 'center', background: background, gridAutoFlow: 'column', color: color}}>
                        {
                            group.map(({ title, link, picture }) => (
                                <Card
                                onClick={()=>{window.location.href = link}}
                                style={{width: `${100/divisionCONSTANT - 1}vw`}}
                                    hoverable
                                    cover={<img style={{ maxWidth: `${100/divisionCONSTANT - 2}vw` }} src={picture} />}
                                >
                                    <Meta title={title} />
                                </Card>
                            ))
                        }
                    </div>
                ))
            }
        </Carousel>
       </>
    )
}