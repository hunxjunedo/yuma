import { Avatar, List, Popover } from "antd";
import { ChevronDown, MenuIcon, Search, ShoppingBasket, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export default function Header({ config, color, setsearchOPEN, children, changer, isMobile, opener, accountlink, cartlink, setInfoOpen }) {
    let alltitles = children.map(ontitle => ({ title: ontitle.title, link: ontitle.link, haschildren: ontitle.children.length > 0 }))

    return (

        <div style={{ height: `${isMobile ? 10 : 10}vh`, width: '99vw', position: 'sticky', top: 0, backdropFilter: 'saturate(180%) blur(20px)', zIndex: '100', background: config.bg, display: 'grid', boxShadow: "-5px 10px 103px -30px rgba(0,0,0,0.49)" }}>
            <div style={{ display: 'grid', gridAutoFlow: 'column', padding: '0 10px', alignItems: 'center' }}>
                {isMobile ? (<MenuIcon onClick={() => (opener(true))} style={{ margin: 5, cursor: 'pointer' }} color={color || config.themeColor} />) : ('')}
                <img style={{ maxHeight: `${isMobile ? 4 : 5}vh`, justifySelf: 'center' }} src={config.logo}></img>
                {!isMobile ? (<div style={{ fontSize: 12, width: '70vw', justifySelf: 'center', overflowX: 'scroll', padding: '10px 0' }}>
                    {

                        (
                            <div style={{ display: 'grid', justifyItems: 'center', gridAutoFlow: 'column' }}>
                                {
                                    alltitles.map((onetitle, index) => (
                                        <a onMouseEnter={() => { changer(index); setInfoOpen(true) }} href={onetitle.link} style={{ display: 'grid', color: color || config.themeColor, width: 'fit-content', cursor: 'pointer', gridAutoFlow: 'column', 'alignItems': 'center', textTransform: 'uppercase', whiteSpace: 'nowrap',padding: '0 5px' }}>{onetitle.title} {onetitle.haschildren ? <ChevronDown /> : ''}</a>

                                    ))
                                }
                            </div>
                        )
                    }
                </div>) : ('')}

                <div style={{ justifySelf: 'end', display: 'grid', gridAutoFlow: 'column' }}>
                    {isMobile ? ('')
                        : (<Search onClick={() => (setsearchOPEN(true))} style={{ margin: 5, cursor: 'pointer' }} color={color || config.themeColor} />)}
                    <ShoppingCart onClick={()=>(window.location.href=cartlink)} style={{ margin: 5, cursor: 'pointer' }} color={color || config.themeColor} />
                    <User  onClick={()=>(window.location.href=accountlink)}  style={{ margin: 5, cursor: 'pointer' }} color={color || config.themeColor} />
                </div>
            </div>



        </div>
    )
}