import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './AboutPreview.css';
import Button from '../../../../components/Button/Button';
import Carousel from '../../../../components/Carousel/Carousel';
import OwlCarousel from 'react-owl-carousel2';
import '../../../../external/owl.carousel.css';
import '../../../../external/owl.theme.default.css';


const aboutPreview = (props) => {
    const carouselItems = ['🐶', '👔', '🏀', '🎣', '🎸', '🔧', '🌇', '📚', '🍁','🎓', '🧠', '👨🏻‍💻', '🏋🏻‍', '🥑 ', '🏈', '⚾️', '🥅', '🎢'];
    const options = {
        items: 5,
        nav: false,
        autoplay: true,
        loop: true,
        dots: false,
        autoplayTimeout: 2000,
        rtl: false,
        mouseDrag: false
    }
    return (
    <div styleName='aboutPreview'>
        <div styleName="stripe"></div>
            <div className="container">
                <div styleName="abt-prev-el" className="row">
                <h2>something cool</h2>
                </div>
            </div>
            <div className="container">
                <div styleName="abt-prev-el" className="row">
                    <Button btnType="btnSmall">About Me</Button>
                </div>
            </div>
        <OwlCarousel
        options={options}
        >   
            <Carousel carouselItems={carouselItems} classes="owl-carousel owl-theme" />
        </OwlCarousel>
    </div>
    )
}

export default CSSModules(aboutPreview, styles);