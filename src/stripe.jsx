import Marquee from "react-fast-marquee";

export default function Stripe({config}){
    let contentLENGTH = 0;
    let delimiter = '|'
    let maxCharsToFIt = Math.floor(window.innerWidth / 7.5)
    Array.isArray(config.content) ? config.content.map(sentence => (contentLENGTH += sentence.length)) : contentLENGTH += config.content.length
    let finalcontent = Array.isArray(config.content) ? config.content.map(sentence => [sentence, delimiter] ) : config.content
    console.log(finalcontent)
    return(
        <div style={{height: 30, width: '100vw', display: 'grid', alignItems: 'center', justifyItems: 'center', background: config.background}}>
         {contentLENGTH >= maxCharsToFIt ? <Marquee  pauseOnHover pauseOnClick>{finalcontent}</Marquee> : finalcontent}
        </div>
    )
}