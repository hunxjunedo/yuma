import PhotoAlbum from "react-photo-album"
import Heading from "./Heading"

export default function Gallery(props){
    return (
        <div style={{ margin: '2vh 0', width: '100vw', padding: '5vh 0', justifySelf: 'center', background: 'url(https://images.pexels.com/photos/6044224/pexels-photo-6044224.jpeg?cs=srgb&dl=pexels-skylar-kang-6044224.jpg&fm=jpg&_gl=1*mviqoo*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNjg5NTk2MS4xMC4xLjE3MDY4OTU5NjQuMC4wLjA.)' }}>
          <Heading background='url(https://images.pexels.com/photos/7013777/pexels-photo-7013777.jpeg?cs=srgb&dl=pexels-dids-7013777.jpg&fm=jpg&w=5184&h=3456&_gl=1*ze7on1*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNzE2MjU5OS4xMi4xLjE3MDcxNjMxMjIuMC4wLjA.)' text={props.title} />
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