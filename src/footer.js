import { Carousel, Col, Collapse, Divider, theme } from "antd"
import Heading from "./Heading"

export default function Footer({ color, links, isMobile, background }) {
    return (
        <div style={{ background: 'white', minHeight: '40vh', width: '100vw', display: 'grid', background: background}}>
          <Heading background='url(https://images.pexels.com/photos/7013777/pexels-photo-7013777.jpeg?cs=srgb&dl=pexels-dids-7013777.jpg&fm=jpg&w=5184&h=3456&_gl=1*ze7on1*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNzE2MjU5OS4xMi4xLjE3MDcxNjMxMjIuMC4wLjA.)' text='Quick Links' />
            <div className="foot_links" style={{ display: 'grid', gridAutoFlow: isMobile ? 'row' : 'column',  background:  'rgb(10, 10, 10, 0.8)', backdropFilter: 'blur(5px)', padding: 10, justifyItems: 'center' }}>
                {
                    isMobile ? <Collapse 
                    accordion={true}
                    style={{width: '90vw'}}
                    items={links.map(onelink => (
                        {label: onelink.title.toUpperCase(), children: <div style={{display: 'flex', flexFlow: 'column', }}>{onelink.children.map(child => (<a style={{color: color}} href={child.link}>{child.name.toUpperCase()}</a>))}</div> }
                    ))}
                    />
                    
                    :
                    links.map(onecategory => (
                    <>
                        <div style={{display: 'flex', flexFlow: 'column', width: '90%', borderRight: '1px solid grey'}}>
                            <Heading background='url(https://images.pexels.com/photos/7013777/pexels-photo-7013777.jpeg?cs=srgb&dl=pexels-dids-7013777.jpg&fm=jpg&w=5184&h=3456&_gl=1*ze7on1*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNzE2MjU5OS4xMi4xLjE3MDcxNjMxMjIuMC4wLjA.)' text={onecategory.title} />
                          
                                    {
                                          onecategory.children.map(child => (
                                           <a style={{color: color}} href={child.link}>{child.name.toUpperCase()}</a>
                                        ))
                                    }
                            
                        </div>
                    </>
                    ))
                }
            </div>
            <Divider type="horizontal" >
<div style={{background: 'rgb(40, 10, 40)', borderRadius: 20, padding: 10}}>
made with 🤍 and ⌨️ by <a className="credit" href="https://www.github.com/hunxjunedo">hunxjunedo</a>`s <a className="credit" href="ttps://www.github.com/hunxjunedo/yuma">Yuma</a>`

</div>
            </Divider>
            <div>
            </div>
        </div>
    )
}