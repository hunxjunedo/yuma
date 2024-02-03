import PhotoAlbum from "react-photo-album"
import Heading from "./Heading"

export default function Gallery(props){
    return (
        <div style={{ margin: '10vh 0', width: '100vw', padding: '2vh 0', justifySelf: 'center', background: 'url(https://images.pexels.com/photos/6044224/pexels-photo-6044224.jpeg?cs=srgb&dl=pexels-skylar-kang-6044224.jpg&fm=jpg&_gl=1*mviqoo*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNjg5NTk2MS4xMC4xLjE3MDY4OTU5NjQuMC4wLjA.)' }}>
          <Heading text={props.title} />
          <PhotoAlbum

            {...props}

            onClick={({ index }) => {
              window.location.href = props.photos[index].link
            }}
            layout='columns'
            renderPhoto={({ imageProps, photo }) => (<img className='smiley' {...imageProps} style={{ ...imageProps.style, borderRadius: 20, cursor: 'pointer' }} />)}
          />
        </div>
    )
}