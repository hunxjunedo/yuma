import './App.css';
import Stripe from './stripe';
import Header from './header';
import { Avatar, Col, Collapse, ConfigProvider, Drawer, List } from 'antd';
import { useState } from 'react';
import Banner from './banner';
import Section from './section';
import Reviews from './Reviews';

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
      allReviews: [
       {
        text: 'very nice',
        rate: 3.5
       },
       {
        text: 'very nice',
        rate: 3.5
       }
      ]
    }
  }

  const [currentTitle, setCurrentTitle] = useState(0)
  const [drawerOpen,setDrawerOpen] = useState(false)
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
  const parsedItems = config.header.children.map(onecategory => {
    return {label: onecategory.title, children: <div className='drawer_links_holder' style={{display: 'grid', gridAutoFlow: 'row'}}>{onecategory.children.map(child=>(<div onClick={()=>(window.location.href = child.link)} >{child.name}</div>))}</div>}
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
        onClose={()=>(setDrawerOpen(false))}
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
        <Section title='Top Categories' color={config.mains.themeColor} children={testchildren} background='cyan' isMobile={isMobile} />
        {/* //reviews */}
        <Reviews crsconfig={config.banner} config={config.reviews} />
        <Section title='Top Categories' color={config.mains.themeColor} children={testchildren} background='pink' isMobile={isMobile} />
      </ConfigProvider>

    </>
  );
}

export default App;
