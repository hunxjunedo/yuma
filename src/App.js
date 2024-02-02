import './App.css';
import Stripe from './stripe';
import Header from './header';
import { Avatar, Col, Collapse, ConfigProvider, Drawer, List } from 'antd';
import { useState } from 'react';
import Banner from './banner';
import Section from './section';

import Reviews from './Reviews';
import PhotoAlbum from 'react-photo-album';
import Heading from './Heading';

function App() {
  const isMobile = window.innerWidth <= 450;
  const config = {
    mains: {
      themeColor: 'purple',
      name: 'Binshafi Sports',
      bg: 'rgb(260, 260, 260, 0.9)',
      logo: 'https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447'
    },
    header: {
      children: [
        { title: 'cars', image: 'https://khanaan.pk/cdn/shop/files/Untitled_design_4_280x280.png?v=1656655903', link: 'www.google.com', children: [{ name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }, { name: 'RC', link: 'www.youtube.com' }] },
        { title: 'cars', image: 'https://khanaan.pk/cdn/shop/files/Untitled_design_4_280x280.png?v=1656655903', link: 'www.google.com', children: [{ name: 'RC', link: 'www.youtube.com' }] },
        { title: 'cars', image: 'https://khanaan.pk/cdn/shop/files/Untitled_design_4_280x280.png?v=1656655903', link: 'www.google.com', children: [{ name: 'RC', link: 'www.youtube.com' }] },
        { title: 'cars', image: 'https://khanaan.pk/cdn/shop/files/Untitled_design_4_280x280.png?v=1656655903', link: 'www.google.com', children: [{ name: 'RC', link: 'www.youtube.com' }] },
        { title: 'cars', image: 'https://khanaan.pk/cdn/shop/files/Untitled_design_4_280x280.png?v=1656655903', link: 'www.google.com', children: [{ name: 'RC', link: 'www.youtube.com' }] },
        { title: 'cars', image: 'https://khanaan.pk/cdn/shop/files/Untitled_design_4_280x280.png?v=1656655903', link: 'www.google.com', children: [{ name: 'RC', link: 'www.youtube.com' }] },
        { title: 'cars', image: 'https://khanaan.pk/cdn/shop/files/Untitled_design_4_280x280.png?v=1656655903', link: 'www.google.com', children: [{ name: 'RC', link: 'www.youtube.com' }] },
        { title: 'cars', image: 'https://khanaan.pk/cdn/shop/files/Untitled_design_4_280x280.png?v=1656655903', link: 'www.google.com', children: [{ name: 'RC', link: 'www.youtube.com' }] },
        { title: 'cars', image: 'https://khanaan.pk/cdn/shop/files/Untitled_design_4_280x280.png?v=1656655903', link: 'www.google.com', children: [{ name: 'RC', link: 'www.youtube.com' }] },
        { title: 'cars', image: 'https://khanaan.pk/cdn/shop/files/Untitled_design_4_280x280.png?v=1656655903', link: 'www.google.com', children: [{ name: 'RC', link: 'www.youtube.com' }] },
        { title: 'cars', image: 'https://khanaan.pk/cdn/shop/files/Untitled_design_4_280x280.png?v=1656655903', link: 'www.google.com', children: [{ name: 'RC', link: 'www.youtube.com' }] },
        { title: 'cars', image: 'https://khanaan.pk/cdn/shop/files/Untitled_design_4_280x280.png?v=1656655903', link: 'www.google.com', children: [{ name: 'RC', link: 'www.youtube.com' }] },
        { title: 'cars', image: 'https://khanaan.pk/cdn/shop/files/Untitled_design_4_280x280.png?v=1656655903', link: 'www.google.com', children: [{ name: 'RC', link: 'www.youtube.com' }] },
        { title: 'cars', image: 'https://khanaan.pk/cdn/shop/files/Untitled_design_4_280x280.png?v=1656655903', link: 'www.google.com', children: [{ name: 'RC', link: 'www.youtube.com' }] },


      ]
    },

    stripe: {
      show: true, background: 'pink',
      content: ['hello nice people', 'free delivery', 'hello nice people', 'free delivery', 'hello nice people', 'free delivery', 'hello nice people', 'free delivery', 'hello nice people', 'free delivery', 'hello nice people', 'free delivery', 'hello nice people', 'free delivery', 'hello nice people', 'free delivery',]
    },

    banner: {
      images: [
        { picture: "https://khanaan.pk/cdn/shop/files/Explore_New_Toy_Everyday_c8012c00-e85e-4563-8f53-88757a24832f_1345x315_crop_center.png?v=1670046040", link: "https://khanaan.pk/collections/baby-strollers", mobilepic: "https://khanaan.pk/cdn/shop/files/Ride_on_car_mobile_banner_2_2efe0ccc-e333-4c0f-ad96-79985c222a05_670x512_crop_center.png?v=1673848715" },
        { picture: "https://khanaan.pk/cdn/shop/files/Explore_New_Toy_Everyday_c8012c00-e85e-4563-8f53-88757a24832f_1345x315_crop_center.png?v=1670046040", link: "https://khanaan.pk/collections/baby-strollers", mobilepic: "https://khanaan.pk/cdn/shop/files/Ride_on_car_mobile_banner_2_2efe0ccc-e333-4c0f-ad96-79985c222a05_670x512_crop_center.png?v=1673848715" },
        { picture: "https://khanaan.pk/cdn/shop/files/Explore_New_Toy_Everyday_c8012c00-e85e-4563-8f53-88757a24832f_1345x315_crop_center.png?v=1670046040", link: "https://khanaan.pk/collections/baby-strollers", mobilepic: "https://khanaan.pk/cdn/shop/files/Ride_on_car_mobile_banner_2_2efe0ccc-e333-4c0f-ad96-79985c222a05_670x512_crop_center.png?v=1673848715" }
      ],
      autoPlay: true,
      infiniteLoop: true,
      swipeable: true,
      emulateTouch: true
    },
    reviews: {
      show: true,
      allReviews: [
        {
          text: 'very nice',
          rate: 3.5
        },
        {
          text: 'very nice',
          rate: 3.5
        },
        {
          text: 'very nice',
          rate: 3.5
        },
        {
          text: 'very nice',
          rate: 3.5
        },
        {
          text: 'very nice',
          rate: 3.5
        },
        {
          text: 'very nice',
          rate: 3.5
        }, {
          text: 'very nice',
          rate: 3.5
        },
        {
          text: 'very nice',
          rate: 3.5
        },
      ]
    }
  }

  const imageHandler = (props) => (
    <img {...props.imageProps} style={{...props.imageProps.style, borderRadius: 30}} />
  )

  const [currentTitle, setCurrentTitle] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const columnCOUNT = Math.ceil(config.header.children[currentTitle].children.length / 10)
  const themeColor = config.mains.themeColor
  const testchildren = [
    { title: 'test', picture: 'https://khanaan.pk/cdn/shop/files/baby-gear_7910f73d-ff2d-44c9-b04a-7b56205c7c67_350x350.png?v=1654057465', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
    { title: 'test', picture: 'https://khanaan.pk/cdn/shop/files/baby-gear_7910f73d-ff2d-44c9-b04a-7b56205c7c67_350x350.png?v=1654057465', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
    { title: 'test', picture: 'https://khanaan.pk/cdn/shop/files/baby-gear_7910f73d-ff2d-44c9-b04a-7b56205c7c67_350x350.png?v=1654057465', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
    { title: 'test', picture: 'https://khanaan.pk/cdn/shop/files/baby-gear_7910f73d-ff2d-44c9-b04a-7b56205c7c67_350x350.png?v=1654057465', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
    { title: 'test', picture: 'https://khanaan.pk/cdn/shop/files/baby-gear_7910f73d-ff2d-44c9-b04a-7b56205c7c67_350x350.png?v=1654057465', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
    { title: 'test', picture: 'https://khanaan.pk/cdn/shop/files/baby-gear_7910f73d-ff2d-44c9-b04a-7b56205c7c67_350x350.png?v=1654057465', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
    { title: 'test', picture: 'https://khanaan.pk/cdn/shop/files/baby-gear_7910f73d-ff2d-44c9-b04a-7b56205c7c67_350x350.png?v=1654057465', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
    { title: 'test', picture: 'https://khanaan.pk/cdn/shop/files/baby-gear_7910f73d-ff2d-44c9-b04a-7b56205c7c67_350x350.png?v=1654057465', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
    { title: 'test', picture: 'https://khanaan.pk/cdn/shop/files/baby-gear_7910f73d-ff2d-44c9-b04a-7b56205c7c67_350x350.png?v=1654057465', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
    { title: 'test', picture: 'https://khanaan.pk/cdn/shop/files/baby-gear_7910f73d-ff2d-44c9-b04a-7b56205c7c67_350x350.png?v=1654057465', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },

  ]
  const pictures = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
      tags: [
        { value: "Nature", title: "Nature" },
        { value: "Flora", title: "Flora" },
      ],
      caption: "After Rain (Jeshu John - designerspics.com)",
      link: 'www.google.com'
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      caption: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
      caption: "Color Pencils (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
      width: 320,
      height: 213,
      caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
    },
    {
      src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
      width: 320,
      height: 183,
      caption: "37H (gratispgraphy.com)",
    },
    {
      src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
      width: 240,
      height: 320,
      tags: [{ value: "Nature", title: "Nature" }],
      caption: "8H (gratisography.com)",
    },
    {
      src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
      width: 320,
      height: 190,
      caption: "286H (gratisography.com)",
    },
    {
      src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
      width: 320,
      height: 148,
      tags: [{ value: "People", title: "People" }],
      caption: "315H (gratisography.com)",
    },
    {
      src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
      width: 320,
      height: 213,
      caption: "201H (gratisography.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
      alt: "Big Ben - London",
      width: 248,
      height: 320,
      caption: "Big Ben (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
      alt: "Red Zone - Paris",
      width: 320,
      height: 113,
      tags: [{ value: "People", title: "People" }],
      caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
      alt: "Wood Glass",
      width: 313,
      height: 320,
      caption: "Wood Glass (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
      width: 320,
      height: 213,
      caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
      width: 320,
      height: 194,
      caption: "Old Barn (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
      alt: "Cosmos Flower",
      width: 320,
      height: 213,
      caption: "Cosmos Flower Macro (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
      width: 271,
      height: 320,
      caption: "Orange Macro (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
      width: 320,
      height: 213,
      tags: [
        { value: "Nature", title: "Nature" },
        { value: "People", title: "People" },
      ],
      caption: "Surfer Sunset (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
      width: 320,
      height: 213,
      tags: [
        { value: "People", title: "People" },
        { value: "Sport", title: "Sport" },
      ],
      caption: "Man on BMX (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
      width: 320,
      height: 213,
      caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
      width: 320,
      height: 213,
      caption: "Time to Think (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
      width: 320,
      height: 179,
      tags: [
        { value: "Nature", title: "Nature" },
        { value: "Fauna", title: "Fauna" },
      ],
      caption: "Untitled (Jan Vasek - jeshoots.com)",
    },
    {
      src: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
      width: 320,
      height: 215,
      tags: [{ value: "People", title: "People" }],
      caption: "Untitled (moveast.me)",
    },
    {
      src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
      width: 257,
      height: 320,
      caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    },
    {
      src: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
      width: 226,
      height: 320,
      caption: "A photo by Matthew Wiebe. (unsplash.com)",
    },
 ];
  const parsedItems = config.header.children.map(onecategory => {
    return { label: onecategory.title, children: <div className='drawer_links_holder' style={{ display: 'grid', gridAutoFlow: 'row' }}>{onecategory.children.map(child => (<div style={{ cursor: 'pointer' }} onClick={() => (window.location.href = child.link)} >{child.name}</div>))}</div> }
  })
  return (
    <>
      <ConfigProvider
        theme={
          {
            components: {
              Card: {
                headerBg: themeColor,

              },

            },
            token: {
              colorText: themeColor
            }
          }
        }>


        {/* //the drawer */}
        <Drawer
          placement='left'
          title='Categories'
          closable={true}
          onClose={() => (setDrawerOpen(false))}
          open={drawerOpen}
          width={window.innerWidth * 0.8}
        >
          <Collapse items={parsedItems}>

          </Collapse>

        </Drawer>
        {/* first the stripe */}
        {config.stripe && config.stripe.show ? <Stripe config={config.stripe} /> : ""}
        {/* //now the header, sticky */}
        <Header changer={setCurrentTitle} opener={setDrawerOpen} isMobile={isMobile} children={config.header.children} config={config.mains} />
        {/* //this is the navlinks */}
        <div style={{ display: 'none', position: 'absolute', top: '30vh', justifySelf: 'center', overflow: 'clip', borderRadius: 20, margin: 10, width: 'fit-content', minWidth: '70vw', gridAutoFlow: 'column', alignItems: 'center', background: 'rgb(200, 200, 200, 0.5)', backdropFilter: 'blur(10px)' }}>
          <div className='childholder' style={{ display: 'grid', color: themeColor, gridTemplateColumns: 'repeat(' + columnCOUNT + ',1fr)', justifyItems: 'center', padding: '10px 0px' }}>
            {
              config.header.children[currentTitle].children.map((onechild, index) => (
                <a href={onechild.link} style={{ color: themeColor }}>{onechild.name}</a>
              ))
            }
          </div>
          <div style={{ width: 'fit-content' }}>
            <img style={{ borderRadius: 30, padding: 10 }} src={config.header.children[currentTitle].image}></img>
          </div>
        </div>
        {/* //this is the banner */}
        <Banner config={config.banner} isMobile={isMobile} />
        {/* //sections */}
        <Section title='Top Categories' color={config.mains.themeColor} children={testchildren} isMobile={isMobile} />
        {/* //reviews */}
        {config.reviews && config.reviews.show ? <Section background='url(https://images.pexels.com/photos/6044224/pexels-photo-6044224.jpeg?cs=srgb&dl=pexels-skylar-kang-6044224.jpg&fm=jpg&_gl=1*mviqoo*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNjg5NTk2MS4xMC4xLjE3MDY4OTU5NjQuMC4wLjA.)' title='Testimonials' type='review' isMobile={isMobile} children={config.reviews.allReviews} /> : ''}
        <Section title='Top Categories' color={config.mains.themeColor} children={testchildren} isMobile={isMobile} />
        {/* //images carousel */}
        <div style={{margin: '10vh 0', width: '100vw', padding: '2vh 0', justifySelf: 'center', background: 'url(https://images.pexels.com/photos/6044224/pexels-photo-6044224.jpeg?cs=srgb&dl=pexels-skylar-kang-6044224.jpg&fm=jpg&_gl=1*mviqoo*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNjg5NTk2MS4xMC4xLjE3MDY4OTU5NjQuMC4wLjA.)'}}>
          <Heading text='Theres More' />
        <PhotoAlbum 
        photos={pictures}
        onClick={({ index }) => {
         window.location.href = pictures[index].link
        }}
        layout='columns'
        renderPhoto={({imageProps, photo})=> (<img className='smiley' {...imageProps}  style={{...imageProps.style, borderRadius: 20, cursor: 'pointer'} } />)}
        />
        </div>
      </ConfigProvider>

    </>
  );
}

export default App;
