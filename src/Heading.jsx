import { useInView } from "react-intersection-observer";

export default function Heading({ text, background }) {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.001,
        triggerOnce: true
      });



return (

    

                    <div  className="filler heading"  style={{ textAlign: 'center', zIndex: 10, backgroundSize: inView ? '100%' : '500%',  animationTimingFunction: 'ease-in', opacity: inView ? 1 : 0, filter: inView ? 'none': 'blur(10px)' ,transform: inView ? 'scale(1)' : 'scale(50)', width: inView ? 'auto' : '2vw', overflow: 'clip', transition: '2s', backgroundImage: background || "url(https://images.pexels.com/photos/4393860/pexels-photo-4393860.jpeg?cs=srgb&dl=pexels-mathias-reding-4393860.jpg&fm=jpg&h=200&w=200&fit=crop&_gl=1*wrrvu5*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNzIyMzY0OC4xNC4xLjE3MDcyMjM3MzguMC4wLjA.)" }}>
                        <h1 ref={ref}>{text}</h1>
                    </div>
    )
}