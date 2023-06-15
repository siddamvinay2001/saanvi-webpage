import hospImg1 from '../../assets/home1.jpeg';
import hospImg2 from '../../assets/home2.jpeg';
import hospImg3 from '../../assets/home3.jpeg';
import './styles/banner.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'


export default function Banner() {
    return (
        <div className='banner-main'>
           <AliceCarousel autoPlay autoPlayInterval="3000">
           <img src={hospImg1} className="sliderimg"></img>
           <img src={hospImg2} className="sliderimg"></img>
           <img src={hospImg3} className="sliderimg"></img>
           </AliceCarousel>
          {/* <p><img src={hospImg1} className="slidering"></img></p>
          <p><img src={hospImg2} className="slidering"></img></p>
          <p><img src={hospImg3} className="slidering"></img></p> */}
        </div>
    );
}