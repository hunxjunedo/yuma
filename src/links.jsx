import Heading from "./Heading";

export default function Link({background, items, color, isMobile, heading}){
    return (
 <>
 <Heading text={heading} />
 <div style={{background, scrollSnapType: 'x mandatory', gap: 20, alignItems: 'center', justifyItems: 'center', backgroundRepeat: 'no-repeat',  gridAutoFlow: 'column', overflowX: 'scroll', display: 'grid', backgroundSize: 'cover', height: '50vh'}}>
{
    items.map(Child=> (
        <div style={{
            background: 'rgb(250, 250, 250, 0.8)',
            borderRadius: 40,
            scrollSnapAlign: 'start',
            backdropFilter: 'blur(5px)',
            display: 'grid',
            gridTemplateColumns: '30% 70%',
            alignItems: 'center',
            justifyItems: 'center',
            width: `${isMobile ? 90 : 26}vw`,
            height: '80%',

        }}>
            <div>{<Child.icon size={50} color={color} />}</div>
            <div>
                <h3>{Child.title}</h3>
                <p>{Child.para}</p>
            </div>
        </div>
    ))
}
        </div>
 </>
    )
}