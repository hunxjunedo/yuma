import { Avatar, List, Popover } from "antd";
import { ChevronDown, MenuIcon, ShoppingBasket, User } from "lucide-react";
import { useState } from "react";

export default function Header({ config, children, changer, isMobile, opener }) {
    let alltitles = children.map(ontitle => ({ title: ontitle.title, link: ontitle.link, haschildren: ontitle.children.length > 0 }))

    return (

        <div style={{ height: `${isMobile ? 10 : 20}vh`, width: '100vw', position: 'sticky', top: 0, backdropFilter: 'blur(15px)', zIndex: '100', background: config.bg, display: 'grid', boxShadow: "-5px 10px 103px -30px rgba(0,0,0,0.49)", gridTemplateRows: `repeat(${isMobile ? 1 : 2}, 1fr)` }}>
            <div style={{ display: 'grid', gridAutoFlow: 'column', padding: 20, alignItems: 'center' }}>
                <img style={{ maxWidth: `${isMobile ? 40 : 20}vw` }} src={config.logo}></img>
                <div style={{ justifySelf: 'end', display: 'grid', gridAutoFlow: 'column' }}>
                    {isMobile ? (<MenuIcon onClick={() => (opener(true))} style={{ margin: 5, cursor: 'pointer' }} color={config.themeColor} />)
                        : ('')}
                    <ShoppingBasket style={{ margin: 5, cursor: 'pointer' }} color={config.themeColor} />
                    <User style={{ margin: 5, cursor: 'pointer' }} color={config.themeColor} />
                </div>
            </div>
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
    )
}