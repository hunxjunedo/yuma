import './App.css';
import Stripe from './stripe';

import Header from './header';
import { Avatar, Col, Collapse, ConfigProvider, Drawer, List, Modal } from 'antd';
import { useState } from 'react';
import Banner from './banner';
import Section from './section';

import Reviews from './Reviews';
import PhotoAlbum from 'react-photo-album';
import Heading from './Heading';
import Gallery from './gallery';
import Search from 'antd/es/input/Search';

function App() {
  const isMobile = window.innerWidth <= 450;
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
          infobg: 'rgb(40, 40,40, 0.9)',
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
              { picture: "https://khanaan.pk/cdn/shop/files/Explore_New_Toy_Everyday_c8012c00-e85e-4563-8f53-88757a24832f_1345x315_crop_center.png?v=1670046040", link: "https://khanaan.pk/collections/baby-strollers", mobilepic: "https://res.cloudinary.com/di5dzukri/image/upload/v1706710632/Sliders/qxzg6xubt5zjbfixqgir.png" },
              { picture: "https://khanaan.pk/cdn/shop/files/Explore_New_Toy_Everyday_c8012c00-e85e-4563-8f53-88757a24832f_1345x315_crop_center.png?v=1670046040", link: "https://khanaan.pk/collections/baby-strollers", mobilepic: "https://res.cloudinary.com/di5dzukri/image/upload/v1706709639/Sliders/zab3x6ikhacoflmcil8z.png" },
              { picture: "https://khanaan.pk/cdn/shop/files/Explore_New_Toy_Everyday_c8012c00-e85e-4563-8f53-88757a24832f_1345x315_crop_center.png?v=1670046040", link: "https://khanaan.pk/collections/baby-strollers", mobilepic: "https://res.cloudinary.com/di5dzukri/image/upload/v1706710853/Sliders/kbqyffvsc4hs3wmmthix.jpg" },
              {picture: "", link: "", mobilepic: "https://res.cloudinary.com/di5dzukri/image/upload/v1706709620/Sliders/hpgixfd1xvhzvfsifjod.jpg"}
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
          title: 'Top Categories', children: [
            { title: 'Swimming Tubes', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726508/Top%20Categories/pvsgm1pq1wjgpznxiw8k.png', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: 'Swimming Pools', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706713058/Top%20Categories/yeoun6wmrsnuimpkhiek.jpg', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: 'Cricket Bats', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706711702/Top%20Categories/bkr8km0g8qbylcdwanrs.jpg', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: 'Watches ', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726510/Top%20Categories/udp70raryi1ezu081r3o.png', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: 'Footballs', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706711756/Top%20Categories/wjom7btch7hmkyq3ezsk.jpg', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: 'Metal Cars', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706711721/Top%20Categories/pjscifs9polexr0mphnp.jpg', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: 'Gifts For Her', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726531/Top%20Categories/io3syb8zwgnwnlv0nr7q.png', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: 'Ludo', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706711733/Top%20Categories/ulrp4yelpum76vit02rv.jpg', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: 'Board Games', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726507/Top%20Categories/slsfgikhlizl1vhhgktk.png', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: 'Gifts For Him', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726528/Top%20Categories/cjl6gofkwmcmi2b09naf.png', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: 'Football kits', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726521/Top%20Categories/umjpvodjomrfkq3sgwnz.png', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: 'Airpods', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706711788/Top%20Categories/cptjxfl4c4w4zb2lafv0.jpg', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: 'Decoration Items', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706711702/Top%20Categories/aap4joglmjyizjzr8pyx.jpg', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
        
          ]
        }
      },
      {
        name: 'section', props: {
          title: 'Best Price', children: [
            { title: 'Under 1000', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726783/Under%201000/m3ovfeobiycjrsxe0uov.jpg', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: '500', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726783/Under%201000/zwmqnwl20tu40gkmqbf1.jpg', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: '400', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726783/Under%201000/zkuooyay64d3lbjq9q3q.jpg', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: '300', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726782/Under%201000/hvp1siepy3cgzo3pxrgl.jpg', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: '200', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726782/Under%201000/kz4fdjdqfmbs134fuchl.jpg', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            { title: '100', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726782/Under%201000/buwvutbknpvggyodywhf.jpg', link: "https://khanaan.pk/cdn/shop/files/Untitled_design_488x112.png?v=1656651447" },
            
        
          ]
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
      logo: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706710048/Sliders/uescyyb1ltwpnbbtjcmu.png',
      searchparser: (value) => ('www.google.com/'+value)
    },


  }



  const [currentTitle, setCurrentTitle] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  const [searchOPEN, setsearchOPEN] = useState(false)
  const themeColor = config.mains.themeColor

  let headerINDEX = 0;
   config.sequence.forEach((obj, index) => {if(obj.name == 'header')  {headerINDEX = index; return;} })
  const parsedItems = config.sequence[headerINDEX].props.children.map(onecategory => {
    return { label: onecategory.title, children: <div className='drawer_links_holder' style={{ display: 'grid', gridAutoFlow: 'row' }}>{onecategory.children.map(child => (<div style={{ cursor: 'pointer' }} onClick={() => (window.location.href = child.link)} >{child.name}</div>))}</div> }
  })

 const columnCOUNT = Math.ceil(config.sequence[headerINDEX].props.children[currentTitle].children.length / 10)



  const elementsMapper = {
    'stripe': { Element: Stripe, Props: {} },
    'header': { Element: Header, Props: { changer: setCurrentTitle, setsearchOPEN, config: config.mains, opener: setDrawerOpen, isMobile, setInfoOpen } },
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
         <Search style={{marginBottom: 20}} placeholder='search here :)' onSearch={(val) => {window.location.href = config.mains.searchparser(val)}}  />
        <Collapse items={parsedItems}>

        </Collapse>

      </Drawer>
      <Modal title='Search' open={searchOPEN} onCancel={()=>(setsearchOPEN(false))} onOk={()=>{ window.location.href = config.mains.searchparser(document.querySelector('.ant-input-search input').value) }}>
        <Search placeholder='search here :)' onSearch={(val) => {window.location.href = config.mains.searchparser(val)}}  />
      </Modal>
      <div  onMouseLeave={()=>(setInfoOpen(false))} style={{ display: 'block', height: infoOpen ? 'auto' : '0', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", transition: '0.5s', opacity: infoOpen ? 1 : 0,  transform: infoOpen ? 'translate(0, 20px)' : 'translate(0, 0px)', zIndex: 1000, position: 'fixed', top: '10vh', justifySelf: 'center', overflow: 'clip', borderRadius: 20, margin: 10, width: 'fit-content', minWidth: '70vw', gridAutoFlow: 'column', alignItems: 'center', background: config.sequence[headerINDEX].props.infobg || 'rgb(200, 200, 200, 0.5)', backdropFilter: 'blur(20px)' }}>
          <div className='childholder' style={{ display: 'grid', color: themeColor, gridTemplateColumns: 'repeat(' + columnCOUNT + ',1fr)', justifyItems: 'center', padding: '10px 0px' }}>
            {
              config.sequence[headerINDEX].props.children[currentTitle].children.map((onechild, index) => (
                <a href={onechild.link} style={{ color: themeColor }}>{onechild.name}</a>
              ))
            }
          </div>
          <div style={{ width: 'fit-content' }}>
            <img style={{ borderRadius: 30, padding: 10 }} src={config.sequence[headerINDEX].props.children[currentTitle].image}></img>
          </div>
        </div>
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
  // return (
  //   <>
  //     <ConfigProvider
  //       theme={
  //         {
  //           components: {
  //             Card: {
  //               headerBg: themeColor,

  //             },

  //           },
  //           token: {
  //             colorText: themeColor
  //           }
  //         }
  //       }>




  //       {/* //the drawer */}
  //       <Drawer
  //         placement='left'
  //         title='Categories'
  //         closable={true}
  //         onClose={() => (setDrawerOpen(false))}
  //         open={drawerOpen}
  //         width={window.innerWidth * 0.8}
  //       >
  //         <Collapse items={parsedItems}>

  //         </Collapse>

  //       </Drawer>
  //       {/* first the stripe */}
  //       {config.stripe && config.stripe.show ? <Stripe config={config.stripe} /> : ""}
  //       {/* //now the header, sticky */}
  //       <Header changer={setCurrentTitle} opener={setDrawerOpen} isMobile={isMobile} children={config.header.children} config={config.mains} />
  //       {/* //this is the navlinks */}
  //       <div style={{ display: 'none', position: 'absolute', top: '30vh', justifySelf: 'center', overflow: 'clip', borderRadius: 20, margin: 10, width: 'fit-content', minWidth: '70vw', gridAutoFlow: 'column', alignItems: 'center', background: 'rgb(200, 200, 200, 0.5)', backdropFilter: 'blur(10px)' }}>
  //         <div className='childholder' style={{ display: 'grid', color: themeColor, gridTemplateColumns: 'repeat(' + columnCOUNT + ',1fr)', justifyItems: 'center', padding: '10px 0px' }}>
  //           {
  //             config.header.children[currentTitle].children.map((onechild, index) => (
  //               <a href={onechild.link} style={{ color: themeColor }}>{onechild.name}</a>
  //             ))
  //           }
  //         </div>
  //         <div style={{ width: 'fit-content' }}>
  //           <img style={{ borderRadius: 30, padding: 10 }} src={config.header.children[currentTitle].image}></img>
  //         </div>
  //       </div>
  //       {/* //this is the banner */}
  //       <Banner config={config.banner} isMobile={isMobile} />
  //       {/* //sections */}
  //       <Section color={config.mains.themeColor} isMobile={isMobile} />
  //       {/* //reviews */}
  //       {config.reviews && config.reviews.show ? <Section background='url(https://images.pexels.com/photos/6044224/pexels-photo-6044224.jpeg?cs=srgb&dl=pexels-skylar-kang-6044224.jpg&fm=jpg&_gl=1*mviqoo*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNjg5NTk2MS4xMC4xLjE3MDY4OTU5NjQuMC4wLjA.)' title='Testimonials' type='review' isMobile={isMobile} children={config.reviews.allReviews} /> : ''}
  //       <Section title='Top Categories' color={config.mains.themeColor} children={testchildren} isMobile={isMobile} />
  //       {/* //images gallery*/}

  //     </ConfigProvider>

  //   </>
  // );
}

export default App;
