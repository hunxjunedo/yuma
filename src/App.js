import './App.css';
import Stripe from './stripe';

import Header from './header';
import { Avatar, Col, Collapse, ConfigProvider, Drawer, List, Modal, Tooltip } from 'antd';
import { useState } from 'react';
import Banner from './banner';
import Section from './section';

import Reviews from './Reviews';
import PhotoAlbum from 'react-photo-album';
import Heading from './Heading';
import Gallery from './gallery';
import Search from 'antd/es/input/Search';
import Footer from './footer';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import bgsvg from './bg.svg'
import Links from './links';
import { Facebook, Gem, Instagram,  Mail, MailOpen, MessageCircleHeart, Navigation, Phone, ShieldCheck, Truck } from 'lucide-react';

function App() {
  const isMobile = window.innerWidth <= 450;
  const config = {
    mains: {
      themeColor: '#4D93E7',
      name: 'Binshafi Sports',
      bg: 'rgb(250, 250, 250, 0.5)',
      logo: 'https://res.cloudinary.com/di5dzukri/image/upload/v1707226997/Sliders/aiwldjs0k2hvlkdvwhau.png',
      secondaryBG: 'rgb(30, 30, 30)',
      searchparser: (value) => ('localhost/bshafi/?s=' + value +'&post_type=product')
    },

    sequence: [
      {
        name: 'stripe', props: {
          config: {
            background: '#4D93E7',
            color: 'white',
            content: ['Free delivery above order of 3000    ', '   Your order will be delivered in 3 - 5 days   ',]

          }
        }
      },
      {
        name: 'header', props: {
          infobg: 'rgb(250, 250,250, 0.9)',
          color: 'black',
          accountlink: 'http://localhost/bshafi/my-account/',
          cartlink: 'http://localhost/bshafi/cart/',
          children: [
            { title: 'Swimming Items', image: 'https://res.cloudinary.com/di5dzukri/image/upload/v1707392903/Header%20Photos/gjeiqwtwjbezznaxiysg.png ', link: 'http://localhost/bshafi/product-category/swimming-items/', children: [{ name: 'Swimming Goggles', link: 'http://localhost/bshafi/product-category/swimming-items/swimming-goggles/' }, { name: 'Swimming pools', link: 'http://localhost/bshafi/product-category/swimming-items/swimming-pools/' }, { name: 'Swimming tubes', link: 'http://localhost/bshafi/product-category/swimming-items/swimming-tubes/' }] },
            { title: 'Toys', image: 'https://res.cloudinary.com/di5dzukri/image/upload/v1707392903/Header%20Photos/sxnqkfvewitqygc8bslg.png', link: 'http://localhost/bshafi/product-category/toys/', children: [{ name: 'Brain Train Games', link: 'http://localhost/bshafi/product-category/toys/brain-training-games/' }, { name: 'Cars', link: 'http://localhost/bshafi/product-category/toys/cars/' }, { name: 'Light and Music Toys', link: 'http://localhost/bshafi/product-category/toys/light-and-music-toys/' }, { name: 'Metal Cars', link: 'http://localhost/bshafi/product-category/toys/metal-cars/' }, { name: 'Tent-Houses', link: 'http://localhost/bshafi/product-category/toys/tent-houses/' }] },
            { title: 'Watches', image: 'https://res.cloudinary.com/di5dzukri/image/upload/v1707392903/Header%20Photos/dagynocrudpytkzpv3do.png', link: 'http://localhost/bshafi/product-category/watches/', children: [{ name: 'Men`s Watches', link: 'http://localhost/bshafi/product-category/watches/mens-watches/' }, { name: 'Women`s Watches', link: 'http://localhost/bshafi/product-category/watches/ladies-watches/' }, { name: 'Kid`s Watches', link: 'http://localhost/bshafi/product-category/watches/kids-watches/' }] },
            { title: 'Board Games', image: 'https://res.cloudinary.com/di5dzukri/image/upload/v1707392904/Header%20Photos/ciasbk6lfh3trbjkt1tj.png', link: 'http://localhost/bshafi/product-category/board-games/', children: [{ name: 'Laminated Board Games', link: 'http://localhost/bshafi/product-category/board-games/laminated-board-games/' }, { name: 'Ludo', link: 'http://localhost/bshafi/product-category/board-games/ludo/' }, { name: 'Wooden Board games', link: 'http://localhost/bshafi/product-category/board-games/wooden-board-game/' }] },
            { title: 'Sports', image: 'https://res.cloudinary.com/di5dzukri/image/upload/v1707392903/Header%20Photos/xjafpjyia3mdvb7mhhot.png', link: 'http://localhost/bshafi/product-category/sports/', children: [{ name: 'Cricket', link: 'http://localhost/bshafi/product-category/sports/cricket/' }, { name: 'Cricket Bats', link: 'http://localhost/bshafi/product-category/sports/cricket-bats/' }, { name: 'Footballs', link: 'http://localhost/bshafi/product-category/sports/footballs/' }, { name: 'Tennis Balls', link: 'http://localhost/bshafi/product-category/sports/tennis-ball/' } , {name: 'Badminton Rackets', link: 'http://localhost/bshafi/product-category/sports/badminton-rackets/'}, {name: 'Basket Ball', link: 'http://localhost/bshafi/product-category/sports/basket-balls/'}] },
            { title: 'Sports Attire', image: 'https://res.cloudinary.com/di5dzukri/image/upload/v1707392904/Header%20Photos/oovli3ufr5prhg5b2teu.png', link: 'http://localhost/bshafi/product-category/sports-attire/', children: [{ name: 'Cricket Attire', link: 'http://localhost/bshafi/product-category/sports-attire/cricket-attire/' }, { name: 'Football Attire', link: 'http://localhost/bshafi/product-category/sports-attire/football-attire/' }] },
            { title: 'Gift Items', image: 'https://res.cloudinary.com/di5dzukri/image/upload/v1707392904/Header%20Photos/arq3qhbgkrlkf0giqk8a.png', link: 'http://localhost/bshafi/product-category/gift-items/', children: [{ name: 'Gifts For Him', link: 'http://localhost/bshafi/product-category/gift-items/gifts-for-him/' }, { name: 'Gifts For Her', link: 'http://localhost/bshafi/product-category/gift-items/gifts-for-her/' }, { name: 'Diaries', link: 'http://localhost/bshafi/product-category/gift-items/diaries/' }] },
            { title: 'Decoration Items', image: 'https://res.cloudinary.com/di5dzukri/image/upload/v1707392904/Header%20Photos/s4g5n6dhpe9wtze4cwyp.png', link: 'http://localhost/bshafi/product-category/decoration-items/', children: [{ name: 'Candles', link: 'http://localhost/bshafi/product-category/decoration-items/candles/' }, { name: 'Foil Balloons', link: 'http://localhost/bshafi/product-category/decoration-items/foil-balloons/' }] },
            { title: 'Mobile Accessories', image: 'https://res.cloudinary.com/di5dzukri/image/upload/v1707392904/Header%20Photos/xx66qj4ylf1rotxkdbvr.png', link: 'http://localhost/bshafi/product-category/mobile-acessories/', children: [{ name: 'Airpods', link: 'http://localhost/bshafi/product-category/mobile-acessories/air-pods/' }] },
            { title: 'Stuff Toys', image: 'https://res.cloudinary.com/di5dzukri/image/upload/v1707392905/Header%20Photos/pjrnymstjs1y22uvp36g.png', link: 'http://localhost/bshafi/product-category/stuff-toys/', children: [{ name: 'Character Stuff Toys', link: 'http://localhost/bshafi/product-category/stuff-toys/character-stuff-toy/' }, { name: 'Teddy Bears', link: 'http://localhost/bshafi/product-category/stuff-toys/teddy-bears/' }] },
            { title: 'Under 1000', image: 'https://res.cloudinary.com/di5dzukri/image/upload/v1707392916/Header%20Photos/xmy3yqpfovbfcqsf0gzj.png', link: 'http://localhost/bshafi/product-category/under-1000/', children: [{ name: 'Under 500', link: 'http://localhost/bshafi/product-category/under-1000/under-500/' }, { name: 'Under 400', link: 'http://localhost/bshafi/product-category/under-1000/under-400/' }, { name: 'Under 300', link: 'http://localhost/bshafi/product-category/under-1000/under-300/' }, { name: 'Under 200', link: 'http://localhost/bshafi/product-category/under-1000/under-200/' }, { name: 'Under 100', link: 'http://localhost/bshafi/product-category/under-1000/under-100/' }] },



          ]
        }
      },
      {
        name: 'banner', props: {
          showThumbs: false,

          config: {
            images: [
              { picture: "https://res.cloudinary.com/di5dzukri/image/upload/v1707226849/Sliders/qzuegbbcxvey32dy8cbi.png", link: "", mobilepic: "https://res.cloudinary.com/di5dzukri/image/upload/v1706710632/Sliders/qxzg6xubt5zjbfixqgir.png" },
              { picture: "https://res.cloudinary.com/di5dzukri/image/upload/v1707225206/Sliders/pm5nrxpiuybeterocn3u.png", link: "http://localhost/bshafi/product-category/swimming-items/", mobilepic: "https://res.cloudinary.com/di5dzukri/image/upload/v1706709639/Sliders/zab3x6ikhacoflmcil8z.png" },
              { picture: "https://res.cloudinary.com/di5dzukri/image/upload/v1707225797/Sliders/hryguz5gue7d0njvnuax.png", link: "http://localhost/bshafi/product-category/sports", mobilepic: "https://res.cloudinary.com/di5dzukri/image/upload/v1706710853/Sliders/kbqyffvsc4hs3wmmthix.jpg" },
              { picture: "https://res.cloudinary.com/di5dzukri/image/upload/v1707226260/Sliders/jplranrggtjkg5woeq4a.jpg", link: "", mobilepic: "https://res.cloudinary.com/di5dzukri/image/upload/v1706709620/Sliders/hpgixfd1xvhzvfsifjod.jpg" }
            ],
            autoPlay: true,
            infiniteLoop: true,
            swipeable: true,
            emulateTouch: true,
            preventMovementUntilSwipeScrollTolerance: true,
            swipeScrollTolerance: 50,
            showArrows: false
          }

        }
      },
      {
        name: 'section', props: {
          background: 'white',
          title: 'Top Categories', children: [
            { title: 'Swimming Tubes', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726508/Top%20Categories/pvsgm1pq1wjgpznxiw8k.png', link: "http://localhost/bshafi/product-category/swimming-items/swimming-tubes/" },
            { title: 'Swimming Pools', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706713058/Top%20Categories/yeoun6wmrsnuimpkhiek.jpg', link: 'http://localhost/bshafi/product-category/swimming-items/swimming-pools/' },
            { title: 'Cricket', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706711702/Top%20Categories/bkr8km0g8qbylcdwanrs.jpg', link: 'http://localhost/bshafi/product-category/sports/cricket/' },
            { title: 'Watches ', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726510/Top%20Categories/udp70raryi1ezu081r3o.png', link: "http://localhost/bshafi/product-category/watches/" },
            { title: 'Footballs', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706711756/Top%20Categories/wjom7btch7hmkyq3ezsk.jpg', link: "http://localhost/bshafi/product-category/sports/footballs/" },
            { title: 'Metal Cars', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706711721/Top%20Categories/pjscifs9polexr0mphnp.jpg', link: "http://localhost/bshafi/product-category/toys/metal-cars/" },
            { title: 'Gifts For Her', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726531/Top%20Categories/io3syb8zwgnwnlv0nr7q.png', link: 'http://localhost/bshafi/product-category/gift-items/gifts-for-her/' },
            { title: 'Ludo', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706711733/Top%20Categories/ulrp4yelpum76vit02rv.jpg', link: "http://localhost/bshafi/product-category/board-games/ludo/" },
            { title: 'Board Games', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726507/Top%20Categories/slsfgikhlizl1vhhgktk.png', link: 'http://localhost/bshafi/product-category/board-games/' },
            { title: 'Gifts For Him', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726528/Top%20Categories/cjl6gofkwmcmi2b09naf.png', link: 'http://localhost/bshafi/product-category/gift-items/gifts-for-him/' },
            { title: 'Football kits', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726521/Top%20Categories/umjpvodjomrfkq3sgwnz.png', link: 'http://localhost/bshafi/product-category/sports-attire/football-attire/' },
            { title: 'Airpods', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706711788/Top%20Categories/cptjxfl4c4w4zb2lafv0.jpg', link: 'http://localhost/bshafi/product-category/mobile-acessories/air-pods/' },
            { title: 'Decoration Items', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706711702/Top%20Categories/aap4joglmjyizjzr8pyx.jpg', link: 'http://localhost/bshafi/product-category/decoration-items/' },

          ]
        }
      },
      {
        name: 'banner', props: {

          config: {
            images: [
              { picture: "https://res.cloudinary.com/di5dzukri/image/upload/v1707225206/Sliders/pm5nrxpiuybeterocn3u.png", link: "http://localhost/bshafi/product-category/swimming-items/", mobilepic: "https://res.cloudinary.com/di5dzukri/image/upload/v1706709639/Sliders/zab3x6ikhacoflmcil8z.png" },

            ],
            autoPlay: true,
            infiniteLoop: true,
            swipeable: true,
            emulateTouch: true,
            preventMovementUntilSwipeScrollTolerance: true,
            swipeScrollTolerance: 50
          }

        }
      },
      {
        name: 'section', props: {
          background: 'white',
          title: 'Shop by Price', children: [
            { title: '', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726783/Under%201000/m3ovfeobiycjrsxe0uov.jpg', link: "http://localhost/bshafi/product-category/under-1000/" },
            { title: '', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726783/Under%201000/zwmqnwl20tu40gkmqbf1.jpg', link: "http://localhost/bshafi/product-category/under-1000/under-500/" },
            { title: '', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726783/Under%201000/zkuooyay64d3lbjq9q3q.jpg', link: "http://localhost/bshafi/product-category/under-1000/under-400/" },
            { title: '', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726782/Under%201000/hvp1siepy3cgzo3pxrgl.jpg', link: "http://localhost/bshafi/product-category/under-1000/under-300/" },
            { title: '', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726782/Under%201000/kz4fdjdqfmbs134fuchl.jpg', link: "http://localhost/bshafi/product-category/under-1000/under-200/" },
            { title: '', picture: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706726782/Under%201000/buwvutbknpvggyodywhf.jpg', link: "http://localhost/bshafi/product-category/under-1000/under-100/" },


          ]
        }
      },

      {
        name: 'gallery',


        props: {
          title: 'There`s More',
          background: 'white',
          photos: [
            {
              src: "https://res.cloudinary.com/di5dzukri/image/upload/v1707152950/Gallery/g42rjzzxqy0io3im7yuu.png",
              link: "http://localhost/bshafi/product-category/board-games/",
              width: 300,
              height: 150,

            },
            {
              src: "https://res.cloudinary.com/di5dzukri/image/upload/v1707228251/Gallery/h34psycomzixh1fnf7re.png",
              width: 100,
              height: 100,
              caption: "286H (gratisography.com)",
              link: 'http://localhost/bshafi/product-category/watches/'
            },
            {
              src: "https://res.cloudinary.com/di5dzukri/image/upload/v1707152950/Gallery/ovpjkimkifjvi55bkhjl.png",
              width: 200,
              height: 200,
              caption: "315H (gratisography.com)",
              link: 'http://localhost/bshafi/product-category/sports/footballs/'
            },
            {
              src: "https://res.cloudinary.com/di5dzukri/image/upload/v1707230507/Gallery/ukaywjw74uiedzwo8aya.png",
              width: 120,
              height: 120,
              link: 'http://localhost/bshafi/product-category/decoration-items/',
              caption: "201H (gratisography.com)",
            },
            {
              src: "https://res.cloudinary.com/di5dzukri/image/upload/v1707227999/Gallery/lzarmg6jyjmobox5fyl4.png",
              width: 90,
              height: 90,
              link: 'http://localhost/bshafi/product-category/mobile-acessories/air-pods/',
              caption: "Big Ben (Tom Eversley - isorepublic.com)",
            },
            {
              src: "https://res.cloudinary.com/di5dzukri/image/upload/v1707231279/Gallery/soq7uach9c9ykjmiln9g.png",
              width: 150,
              height: 300,
              link: 'http://localhost/bshafi/product-category/sports/cricket-bats/',
              caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
            },
            {
              src: "https://res.cloudinary.com/di5dzukri/image/upload/v1707152950/Gallery/rwbux72ktfzhnjkqziuu.png",
              width: 250,
              height: 300,
              link: 'http://localhost/bshafi/product-category/toys/',
              caption: "Wood Glass (Tom Eversley - isorepublic.com)",
            },
            {
              src: "https://res.cloudinary.com/di5dzukri/image/upload/v1707156342/Gallery/gmtnynacuetgp8ljdt7e.png",
              width: 150,
              link: 'http://localhost/bshafi/product-category/toys/metal-cars/',
              height: 150,
              caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
            },
            {
              src: "https://res.cloudinary.com/di5dzukri/image/upload/v1707229513/Gallery/l9zowyamkeptj04g1ua7.png",
              width: 250,
              link: 'http://localhost/bshafi/product-category/toys/metal-cars/',
              height: 250,
              link: 'http://localhost/bshafi/product-category/sports-attire/cricket-attire/',
              caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
            },
            {
              src: "https://res.cloudinary.com/di5dzukri/image/upload/v1707228886/Gallery/gi5s0jwioy2y41ejmyq5.png",
              width: 230,
              link: 'http://localhost/bshafi/product-category/sports-attire/football-attire/',
              height: 230,
              caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
            },
            {
              src: "https://res.cloudinary.com/di5dzukri/image/upload/v1707557773/Gallery/k9sifmf1ku7dhauoopkz.png",
              width: 500,
              link: 'http://localhost/bshafi/product-category/sports/badminton-rackets/',
              height: 500,
              caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
            },

          ]
        }

      },
      {
        name: 'review', props: {
          headingbg: 'url(https://images.pexels.com/photos/4393860/pexels-photo-4393860.jpeg?cs=srgb&dl=pexels-mathias-reding-4393860.jpg&fm=jpg&h=200&w=200&fit=crop&_gl=1*wrrvu5*_ga*MTY4ODkyODE0MS4xNzAyMDM2Mzk4*_ga_8JE65Q40S6*MTcwNzIyMzY0OC4xNC4xLjE3MDcyMjM3MzguMC4wLjA.)',
          title: 'What Our Customers Say', type: 'review', background: 'white', children: [
            {
              text: 'Very happy, Recieved the product exactly as shown in the picture ',
              rate: 5,
              reviewer: 'Khizer Saleem'
            },
            {
              text: 'Mere bachoun ko cheezein buhat pasand aayin mai dobara zaroor buy karoongi ',
              rate: 4,
              reviewer: 'Maryam Sheikh '
            },
            {
              text: ' The packaging was great none of the products were damaged and were the same as ordered  ',
              rate: 4.5,
              reviewer: 'Tooba Noman '
            },
            {
              text: ' Thanks for the custom gift packing for my kid it was really amazing   ',
              rate: 5,
              reviewer: 'Salman Ahmed '
            },
            {
              text: ' seriously i don’t trust shopping online but i took a chance and ordered from Cod method. But the product was the same so i will definitely come next time     ',
              rate: 4,
              reviewer: 'Amna Naseem '
            },
            {
              text: ' Did some shopping got good prices compared to others ',
              rate: 4,
              reviewer: 'Areeb Ahmed   '
            },
            {
              text: ' Happy because the shipping vas very fast ',
              rate: 5,
              reviewer: 'Momina Danish '
            },
            {
              text: ' Ordered the swimming rings for my kids. Glad to see none of them were punctured ',
              rate: 5,
              reviewer: 'Danish Ali  '
            },
            {
              text: '  Bought a bat for myself got great compliments definitely gonna buy again       ',
              rate: 4,
              reviewer: 'Anas Shahid   '
            },
            {
              text: ' The non-inflateable pool is life saver. It never gets punctured       ',
              rate: 5,
              reviewer: 'Azka   '
            },
          ]
        }
      },
      {
        name: 'artlink', props: {
          background: `url(${bgsvg})`,
          heading: 'Why Us',
          items: [
            {icon: Gem, title: 'Value', para: 'We only choose original and safe to use products for our children before putting up on sale.'},
            {icon: ShieldCheck, title: 'Replacement Warranty', para: 'We accept we can make mistakes, But the best part is you are 100% Secure. Just Call Us 03243233879 & See how we solve your problems.'},
            {icon: Truck, title: 'Nationwide Fastest Delivery', para: 'We work with industry’s leading courier partners to insure your package reaches you faster & Safely'},
          ]
        }
      },
      {
        name: 'footer',

        props: {
          background: 'linear-gradient(90deg, rgba(157,152,232,1) 0%, rgba(0,155,255,1) 49%, rgba(69,69,142,1) 100%)',
          headingShow: false,
          para: {
            title: 'Binshafi Sports',
            text: 'Shop high quality toys and sports from best brands online in Pakistan. Enjoy fast shipping, multiple payment options, easy return & great service. ',
            extras: (
             <>
              <Heading text='Connect' />
              <div className='connecticons' style={{display: 'grid', color: 'white', gridAutoFlow: 'column', alignItems: 'center', justifyItems: 'center'}}>
                <a href='https://www.facebook.com/binshafisports'>{<Instagram  color='white' />}</a>
                <a href='https://www.instagram.com/binshafi_sports/?hl=de'>{<Facebook  color='white'/>}</a>
                <a href='mailto:binshafisports.pk@gmail.com'>{<MailOpen color='white' />}</a>
                <a href='tel:+92 324 3233879'>{<Phone color='white' />}</a>
                <a href='https://api.whatsapp.com/send/?phone=+923243233879'>{<p>WA</p>}</a>
                <Tooltip trigger='hover' title='Shop 3 Block 3 K.A.E.C.H.S society Karachi , Pakistan 74900 ' defaultOpen >
                  <a>{<Navigation color='white' />}</a>
                </Tooltip>
              </div>
              

             </>
            )
          },
          links: [
            { title: 'For Customers', children: [
              { name: 'About Us', link: 'http://localhost/bshafi/about-us/' }, 
              { name: 'Terms Of Service', link: 'http://localhost/bshafi/terms-of-service/' },
              { name: 'Privacy Policy', link: 'http://localhost/bshafi/privacy-policy/' }, 
              { name: 'Refund & Returns Policy', link: 'http://localhost/bshafi/refund_returns/' },
              { name: 'FAQ’S', link: 'http://localhost/bshafi/faqs/' },
              { name: 'Track Your Order', link: 'abcd' }

            ] },
           

          ]
        }
      },
      {name: 'whatsapp', props: {
        phoneNumber: '+923243233879',
        accountName: 'Binshafisports',
        darkMode: true,
        avatar: 'https://res.cloudinary.com/di5dzukri/image/upload/v1706710048/Sliders/uescyyb1ltwpnbbtjcmu.png'
      }}



    ],


  }



  const [currentTitle, setCurrentTitle] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  const [searchOPEN, setsearchOPEN] = useState(false)
  const themeColor = config.mains.themeColor

  let headerINDEX = 0;
  config.sequence.forEach((obj, index) => { if (obj.name == 'header') { headerINDEX = index; return; } })
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
    'gallery': { Element: Gallery, Props: { color: config.mains.themeColor, isMobile } },
    'artlink' : {Element: Links, Props: {isMobile, color: themeColor}},
    'footer': { Element: Footer, Props: { color: 'white', isMobile } },
    'whatsapp': {Element: FloatingWhatsApp, Props: {}}
  }

  return (
    <ConfigProvider
      theme={
        {
          components: {
            Card: {
              headerBg: themeColor,

            },
            Collapse: {
              contentBg: 'transparent'
            },
            Input: {
              activeBg: ' rgb(220, 220, 220, 0.0)',
              hoverBg: ' rgb(220, 220, 220, 0.9)',
              colorIcon: themeColor,
              colorTextPlaceholder: themeColor
            }

          },
          token: {
            colorText: themeColor,
            colorBgElevated: ' rgb(250, 250, 250, 0.9)',
            colorBgContainer: ' rgb(220, 220, 220, 0.9)',
            colorIcon: themeColor,
            colorTextTertiary: themeColor
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
        <Search style={{ marginBottom: 20 }} placeholder='search here :)' onSearch={(val) => { window.location.href = config.mains.searchparser(val) }} />
        <Collapse items={parsedItems}>

        </Collapse>

      </Drawer>
      <Modal title='Search' open={searchOPEN} onCancel={() => (setsearchOPEN(false))} onOk={() => { window.location.href = config.mains.searchparser(document.querySelector('.ant-input-search input').value) }}>
        <Search placeholder='search here :)' onSearch={(val) => { window.location.href = config.mains.searchparser(val) }} />
      </Modal>
      <div onMouseLeave={() => (setInfoOpen(false))} style={{ display: 'grid', height: infoOpen ? 'auto' : '0', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", transition: '0.5s', opacity: infoOpen ? 1 : 0, transform: infoOpen ? 'translate(0, 20px)' : 'translate(0, 0px)', zIndex: 1000, position: 'fixed', top: '10vh', justifySelf: 'center', overflow: 'clip', borderRadius: 20, margin: 10, width: 'fit-content', minWidth: '50vw', gridAutoFlow: 'column', alignItems: 'center', background: config.sequence[headerINDEX].props.infobg || 'rgb(200, 200, 200, 0.5)', backdropFilter: 'blur(20px)' }}>
        <div className='childholder' style={{ display: 'grid', alignSelf: 'center', justifySelf: 'center', color: themeColor, gridTemplateColumns: 'repeat(' + columnCOUNT + ',1fr)', justifyItems: 'center', padding: 10 }}>
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
