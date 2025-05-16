function Hero({heading = "Text"}) {
    return (  
        <>
        <section className="hero">
            <div className="hero__imageContainer">
                <img src="src/assets/img/seven.jpg" alt="" />
            </div>
            <h2>{heading}</h2>
        </section>
        </>
    );
}

export default Hero;