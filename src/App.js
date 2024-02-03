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
import Gallery from './gallery';

function App() {
  const isMobile = window.innerWidth <= 450;
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
  const config = {
    sequence: [
      {
        name: 'stripe', props: {
          config: {
            background: 'pink',
            content: ['hello nice people', 'free delivery', 'hello nice people', 'free delivery', 'hello nice people', 'free delivery', 'hello nice people', 'free delivery', 'hello nice people', 'free delivery', 'hello nice people', 'free delivery', 'hello nice people', 'free delivery', 'hello nice people', 'free delivery',]

          }
        }
      },
      {
        name: 'header', props: {
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
        }
      },
      {
        name: 'banner', props: {

          config: {
            images: [
              { picture: "https://khanaan.pk/cdn/shop/files/Explore_New_Toy_Everyday_c8012c00-e85e-4563-8f53-88757a24832f_1345x315_crop_center.png?v=1670046040", link: "https://khanaan.pk/collections/baby-strollers", mobilepic: "https://khanaan.pk/cdn/shop/files/Ride_on_car_mobile_banner_2_2efe0ccc-e333-4c0f-ad96-79985c222a05_670x512_crop_center.png?v=1673848715" },
              { picture: "https://khanaan.pk/cdn/shop/files/Explore_New_Toy_Everyday_c8012c00-e85e-4563-8f53-88757a24832f_1345x315_crop_center.png?v=1670046040", link: "https://khanaan.pk/collections/baby-strollers", mobilepic: "https://khanaan.pk/cdn/shop/files/Ride_on_car_mobile_banner_2_2efe0ccc-e333-4c0f-ad96-79985c222a05_670x512_crop_center.png?v=1673848715" },
              { picture: "https://khanaan.pk/cdn/shop/files/Explore_New_Toy_Everyday_c8012c00-e85e-4563-8f53-88757a24832f_1345x315_crop_center.png?v=1670046040", link: "https://khanaan.pk/collections/baby-strollers", mobilepic: "https://khanaan.pk/cdn/shop/files/Ride_on_car_mobile_banner_2_2efe0ccc-e333-4c0f-ad96-79985c222a05_670x512_crop_center.png?v=1673848715" }
            ],
            autoPlay: true,
            infiniteLoop: true,
            swipeable: true,
            emulateTouch: true
          }

        }
      },
      {
        name: 'section', props: {
          title: 'Top Categories', children: testchildren
        }
      },
      {
        name: 'section', props: {
          title: 'Top Brands', children: testchildren
        }
      },
      {
        name: 'review', props: {
          title: 'Testimonials', type: 'review', background: 'url(https://images.pexels.com/photos/6044224/pexels-photo-6044224.jpeg?cs=srgb&dl=pexels-skylar-kang-6044224.jpg&fm=jpg&_gl=1*mviqoo*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNjg5NTk2MS4xMC4xLjE3MDY4OTU5NjQuMC4wLjA.)', children: [
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
      },
      {
        name: 'gallery',

        props: {
          title: 'There`s More',
          photos: [
            {
              src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
              width: 240,
              height: 320,
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
              width: 248,
              height: 320,
              caption: "Big Ben (Tom Eversley - isorepublic.com)",
            },
            {
              src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
              width: 320,
              height: 113,
              caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
            },
            {
              src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
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
          ]
        }

      }



    ],
    mains: {
      themeColor: 'purple',
      name: 'Binshafi Sports',
      bg: 'rgba(255,255,255,.5)',
      logo: 'https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447'
    },


  }

  const imageHandler = (props) => (
    <img {...props.imageProps} style={{ ...props.imageProps.style, borderRadius: 30 }} />
  )

  const [currentTitle, setCurrentTitle] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  // const columnCOUNT = Math.ceil(config.header.children[currentTitle].children.length / 10)
  const columnCOUNT = 10
  const themeColor = config.mains.themeColor

  let headerINDEX = 0;
   config.sequence.forEach((obj, index) => {if(obj.name == 'header')  {headerINDEX = index; return;} })
  const parsedItems = config.sequence[headerINDEX].props.children.map(onecategory => {
    return { label: onecategory.title, children: <div className='drawer_links_holder' style={{ display: 'grid', gridAutoFlow: 'row' }}>{onecategory.children.map(child => (<div style={{ cursor: 'pointer' }} onClick={() => (window.location.href = child.link)} >{child.name}</div>))}</div> }
  })


  const elementsMapper = {
    'stripe': { Element: Stripe, Props: {} },
    'header': { Element: Header, Props: { changer: setCurrentTitle, config: config.mains, opener: setDrawerOpen, isMobile } },
    'banner': { Element: Banner, Props: { isMobile } },
    'section': { Element: Section, Props: { color: config.mains.themeColor, isMobile } },
    'review': { Element: Section, Props: { color: config.mains.themeColor, isMobile } },
    'gallery': { Element: Gallery, Props: { color: config.mains.themeColor, isMobile } }
  }

  return (
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
      {
        config.sequence.map(elementToRender => {
          //first check the name & get element if present
          let { Element, Props } = elementsMapper[elementToRender.name]
          let additionalProps = elementToRender.props
          console.log(Element, Props, additionalProps)
          return Element ? <Element {...additionalProps} {...Props} /> : console.log('')
        })
      }

    </ConfigProvider>
  )
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
        <Section color={config.mains.themeColor} isMobile={isMobile} />
        {/* //reviews */}
        {config.reviews && config.reviews.show ? <Section background='url(https://images.pexels.com/photos/6044224/pexels-photo-6044224.jpeg?cs=srgb&dl=pexels-skylar-kang-6044224.jpg&fm=jpg&_gl=1*mviqoo*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNjg5NTk2MS4xMC4xLjE3MDY4OTU5NjQuMC4wLjA.)' title='Testimonials' type='review' isMobile={isMobile} children={config.reviews.allReviews} /> : ''}
        <Section title='Top Categories' color={config.mains.themeColor} children={testchildren} isMobile={isMobile} />
        {/* //images gallery*/}

      </ConfigProvider>

    </>
  );
}

export default App;
