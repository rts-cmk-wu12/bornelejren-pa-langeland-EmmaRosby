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
                    <div className="about__content">
                        <p>Børnelejren på Langeland er en velgørende, non-profit forening, som afholder
                            finansierede lejre for dårligt stillede børn og unge fra hele landet. Børnelejrene bliver
                            afholdt på foreningens bondegård, Søgård Hovedgård, som ligger i naturskønne
                            omgivelser på sydspidsen af Langeland. Samtlige omkostninger til alle børns ophold og
                            transport til/fra lejren bliver finansieret af foreningen, og det er et krav fra foreningens
                            side, at der ikke opkræves brugerbetaling af børnenes forældre for opholdet på Søgård.
                        </p>
                        <p>
                            Foreningens bestyrelse og frivillige hjælpere arbejder ulønnet for Foreningen.
                            Medarbejderne fra institutionerne på foreningens lejre, får ikke kolonitillæg udbetalt af
                            Foreningen.
                        </p>


                        <p>
                            Det er primært virksomheder og støttemedlemmer, der finansierer foreningens drift og
                            aktiviteter. Vi har heldigvis erfaret, at rigtig mange virksomheder er villige til at bakke op
                            omkring lejren, ligesom vi håber på endnu flere private, passive støttemedlemmer.
                        </p>

                        <p>
                            Alle skriftlige henvendelser vedrørende Foreningen Børnelejren på Langeland og Søgård
                            Hovedgård bedes venligst sendt til Knud Bro Alle 1, st. mf., 3660 Stenløse. Telefoniske
                            henvendelser bedes ligeledes rettet til sekretariatet på telefon 38711260. Foreningens
                            formand er dagligt at træffe i sekretariatet.
                        </p>
                    </div>
                    <div className="about__gallery">
                        <div className="about__gallery__container">
                            <img src="src/assets/img/three.jpg" alt="Swimming pool" />
                        </div>
                        <div className="about__gallery__container">
                            <img src="src/assets/img/two.jpg" alt="Playground" />
                        </div>
                        <div className="about__gallery__container">
                            <img src="src/assets/img/four.jpg" alt="Playground" />
                        </div>
                        <div className="about__gallery__container">
                            <img src="src/assets/img/one_crop.png" alt="Main building" />
                        </div>
                        <div className="about__gallery__container">
                            <img src="src/assets/img/five.jpg" alt="Kitchen" />
                        </div>
                        <div className="about__gallery__container">
                            <img src="src/assets/img/six.jpg" alt="Interior" />
                        </div>
                        <div className="about__gallery__container">
                            <img src="src/assets/img/seven.jpg" alt="Building exterior" />
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