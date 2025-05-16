import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";

function AboutPage() {
    const [slideIndex, setSlideIndex] = useState(1);

    // Handle slide navigation
    const plusSlides = (n) => {
        let newIndex = slideIndex + n;
        let slides = document.getElementsByClassName("about__gallery__container");
        
        if (newIndex > slides.length) {
            newIndex = 1;
        }
        if (newIndex < 1) {
            newIndex = slides.length;
        }
        
        setSlideIndex(newIndex);
    };

    // Update slides whenever slideIndex changes
    useEffect(() => {
        showSlides();
    }, [slideIndex]);

    // Show current slide
    const showSlides = () => {
        let slides = document.getElementsByClassName("about__gallery__container");
        
        if (!slides || slides.length === 0) return;
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slides[slideIndex - 1].style.display = "block";
    };

    return (  
        <>
            <Header /> 
            <main>
                <Hero heading="OM OS" /> 
                <div className="about">
                    <div className="about__gallery">
                        <div className="about__gallery__container">
                            <img src="src/assets/img/three.jpg" alt="Swimming pool"/>
                        </div>
                        <div className="about__gallery__container">
                            <img src="src/assets/img/two.jpg" alt="Playground"/>
                        </div>
                        <div className="about__gallery__container">
                            <img src="src/assets/img/four.jpg" alt="Playground"/>
                        </div>
                        <div className="about__gallery__container">
                            <img src="src/assets/img/one_crop.png" alt="Main building"/>
                        </div>
                        <div className="about__gallery__container">
                            <img src="src/assets/img/five.jpg" alt="Kitchen"/>
                        </div>
                        <div className="about__gallery__container">
                            <img src="src/assets/img/six.jpg" alt="Interior"/>
                        </div>
                        <div className="about__gallery__container">
                            <img src="src/assets/img/seven.jpg" alt="Building exterior"/>
                        </div>

                        <a className="about__gallery__prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                        <a className="about__gallery__next" onClick={() => plusSlides(1)}>&#10095;</a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default AboutPage;