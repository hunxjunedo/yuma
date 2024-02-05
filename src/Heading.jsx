import { useInView } from "react-intersection-observer";

export default function Heading({ text, background }) {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.001,
        triggerOnce: true
      });

    
   
    return (

      

                    <div  className="filler heading"  style={{ textAlign: 'center', zIndex: 10, backgroundSize: inView ? '100%' : '500%',  animationTimingFunction: 'ease-in', opacity: inView ? 1 : 0, filter: inView ? 'none': 'blur(10px)' ,transform: inView ? 'scale(1)' : 'scale(50)', width: inView ? 'auto' : '100vw', overflow: 'clip', transition: '2s', backgroundImage: background || "url(https://images.pexels.com/photos/3824262/pexels-photo-3824262.jpeg?cs=srgb&dl=pexels-dids-3824262.jpg&fm=jpg&w=640&h=853&_gl=1*phuhra*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNjI4ODA0MC45LjEuMTcwNjI4ODEyMy4wLjAuMA..)" }}>
                        <h1 ref={ref}>{text}</h1>
                    </div>
    )
}