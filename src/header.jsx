import { Avatar, List, Popover } from "antd";
import { ChevronDown, MenuIcon, ShoppingBasket, User } from "lucide-react";
import { useState } from "react";

export default function Header({ config, children, changer, isMobile, opener }) {
    let alltitles = children.map(ontitle => ({ title: ontitle.title, link: ontitle.link, haschildren: ontitle.children.length > 0 }))

    return (

        <div style={{ height: `${isMobile ? 10 : 10}vh`, width: '99vw', position: 'sticky', top: 0, backdropFilter: 'saturate(180%) blur(20px)', zIndex: '100', background: config.bg, display: 'grid', boxShadow: "-5px 10px 103px -30px rgba(0,0,0,0.49)" }}>
            <div style={{ display: 'grid', gridAutoFlow: 'column', padding: '0 10px', alignItems: 'center' }}>
                <img style={{ maxHeight: `${isMobile ? 2.5 : 4}vh` }} src={config.logo}></img>
                <div style={{fontSize: 12}}>
                {
                isMobile ? ('') :
                    (
                        <div style={{ display: 'grid', justifyItems: 'center', gridAutoFlow: 'column' }}>
                            {
                                alltitles.map((onetitle, index) => (
                                    <a onMouseEnter={() => (changer(index))} href={onetitle.link} style={{ display: 'grid', color: config.themeColor, width: 'fit-content', cursor: 'pointer', gridAutoFlow: 'column', 'alignItems': 'center', textTransform: 'uppercase' }}>{onetitle.title} {onetitle.haschildren ? <ChevronDown /> : ''}</a>

                                ))
                            }
                        </div>
                    )
            }
                </div>

                <div style={{ justifySelf: 'end', display: 'grid', gridAutoFlow: 'column' }}>
                    {isMobile ? (<MenuIcon onClick={() => (opener(true))} style={{ margin: 5, cursor: 'pointer' }} color={config.themeColor} />)
                        : ('')}
                    <ShoppingBasket style={{ margin: 5, cursor: 'pointer' }} color={config.themeColor} />
                    <User style={{ margin: 5, cursor: 'pointer' }} color={config.themeColor} />
                </div>
            </div>
           


        </div>
    )
}