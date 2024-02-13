import PhotoAlbum from "react-photo-album"
import Heading from "./Heading"

export default function Gallery(props){
    return (
        <div style={{ margin: `${props.isMobile ? 0 : 2}vh 0`, width: '100vw', padding: `10px 0`, display: 'grid', justifyItems: 'center', justifySelf: 'center', background: props.background || 'url(https://images.pexels.com/photos/6044224/pexels-photo-6044224.jpeg?cs=srgb&dl=pexels-skylar-kang-6044224.jpg&fm=jpg&_gl=1*mviqoo*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNjg5NTk2MS4xMC4xLjE3MDY4OTU5NjQuMC4wLjA.)' }}>
          <Heading background='url(https://images.pexels.com/photos/4393860/pexels-photo-4393860.jpeg?cs=srgb&dl=pexels-mathias-reding-4393860.jpg&fm=jpg&h=200&w=200&fit=crop&_gl=1*wrrvu5*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNzIyMzY0OC4xNC4xLjE3MDcyMjM3MzguMC4wLjA.)' text={props.title} />
          <PhotoAlbum

            {...props}

            onClick={({ index }) => {
              window.location.href = props.photos[index].link
            }}
            layout='columns'
            
            columns={props.isMobile ? 2 : 5}
            renderPhoto={({ imageProps, photo }) => (<img className='smiley' {...imageProps} style={{ ...imageProps.style, borderRadius: 20, cursor: 'pointer' }} />)}
          />
        </div>
    )
}