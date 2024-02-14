import { Carousel, Col, Collapse, Divider, theme } from "antd"
import Heading from "./Heading"

export default function Footer({ color, links, isMobile, background, para, headingShow }) {
    return (
        <div style={{ background: background, minHeight: '40vh', width: '100vw', display: 'grid', }}>
         {   headingShow ? <Heading background='url(https://images.pexels.com/photos/4393860/pexels-photo-4393860.jpeg?cs=srgb&dl=pexels-mathias-reding-4393860.jpg&fm=jpg&h=200&w=200&fit=crop&_gl=1*wrrvu5*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNzIyMzY0OC4xNC4xLjE3MDcyMjM3MzguMC4wLjA.)' text='Quick Links' /> : ('')}

            <div className="foot_links" style={{ display: 'grid', gridTemplateColumns: isMobile ? '100%' : '50% 50%', gridAutoFlow: isMobile ? 'row' : 'column', backdropFilter: 'blur(5px)', padding: 10, justifyItems: 'center' }}>
                {
                    isMobile ? (
                       <>
                        <div style={{width: isMobile ? '95vw' : '20vw', textAlign: 'center', color}}>
                                    <img style={{maxHeight: '15vh'}} src="https://res.cloudinary.com/di5dzukri/image/upload/v1707910750/Top%20Categories/fgtboweazwmoq6kevqgn.png" />
                                    <p>
                                        {para.text}
                                    </p>
                                    {
                                        para.extras
                                    }
                                </div>
                        <Collapse
                        accordion={true}
                        style={{ width: '90vw', color }}
                        items={links.map(onelink => (
                            { label: onelink.title.toUpperCase(), children: <div style={{ display: 'flex', flexFlow: 'column', }}>{onelink.children.map(child => (<a style={{ color: color }} href={child.link}>{child.name.toUpperCase()}</a>))}</div> }
                        ))}
                    />
                       </>)

                        :
                        // <Heading text={para.title} />
                        (
                            <>
                                <div style={{width: isMobile ? '95vw' : '20vw', color}}>
                                <img style={{maxHeight: '15vh'}} src="https://res.cloudinary.com/di5dzukri/image/upload/v1707910750/Top%20Categories/fgtboweazwmoq6kevqgn.png" />

                                    <p>
                                        {para.text}
                                    </p>
                                    {
                                        para.extras
                                    }
                                </div>
                                {links.map(onecategory => (
                                    <>
                                        <div style={{ display: 'flex', flexFlow: 'column', width: '90%', placeItems: 'center',  padding: '0px 10px' }}>
                                            <Heading background='url(https://images.pexels.com/photos/4393860/pexels-photo-4393860.jpeg?cs=srgb&dl=pexels-mathias-reding-4393860.jpg&fm=jpg&h=200&w=200&fit=crop&_gl=1*wrrvu5*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNzIyMzY0OC4xNC4xLjE3MDcyMjM3MzguMC4wLjA.)' text={onecategory.title} />

                                            {
                                                onecategory.children.map(child => (
                                                    <a style={{ color: color }} href={child.link}>{child.name.toUpperCase()}</a>
                                                ))
                                            }

                                        </div>
                                    </>
                                )

                                )}
                                <div>

                                </div>
                            </>
                        )
                }
            </div>
            <Divider type="horizontal" >
                <div style={{ background: 'rgb(40, 10, 40)', borderRadius: 20, padding: 10 }}>
                    made by <a className="credit" href="https://www.github.com/hunxjunedo">hunxjunedo</a>`s <a className="credit" href="ttps://www.github.com/hunxjunedo/yuma">Yuma</a>

                </div>
            </Divider>
            <div>
            </div>
        </div>
    )
}