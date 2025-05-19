import { Link } from "react-router";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";


function HomePage() {
    return ( 
        <>
        <Header />
        <main>
        <Hero heading={<>VELKOMMEN TIL <img src="/Logo_white.svg" alt="Logo" /></>} />
            
            <div className="welcome">
                <div className="welcome__text">
                    <div className="welcome__text__content">
                        <p>
                            Børnelejren på Langeland er en forening, der udelukkende har til 
                            formål at sende dårligt stillede børn og unge sammen med deres 
                            pædagoger på et ophold i landlige omgivelser på det naturskønne 
                            Sydlangeland.
                        </p>
                        <p>
                            Der er mange børn i verden, der ikke har det så godt, som de 
                            burde have det. Det gælder desværre også i Danmark. Der er børn 
                            med medfødte handicap, børn der er blevet alvorligt syge, børn 
                            der lider under omsorgssvigt eller bliver udsat for overgreb, 
                            børn der har mistet én af eller begge deres forældre, børn der 
                            er tvangsfjernet fra deres hjem og familie, børn der bliver 
                            mobbet i skolen, børn der vokser op i meget fattige familier, 
                            børn fra skilsmisse- og sammenbragte familier - vi kender 
                            allesammen et barn, der tilhører en af disse grupper, og det er 
                            disse børn, vi gerne vil gøre noget for.
                        </p>
                        <p className="welcome__text__content-red">
                            Foreningen Børnelejren på Langeland samler penge ind fra 
                            erhvervslivet, fonde og private til at sende dårligt stillede 
                            børn på et velfortjent lejrophold på Søgård.
                        </p>
                    </div>
                    <div className="welcome__text__content__sponser">
                        <p>Hjælp os med at hjælpe dem!</p>
                        <button><Link to="/sponser">Tildmeld dig som sponser!</Link></button>
                    </div>      
                </div>
                <img src="img/one.jpg" alt="" className="welcome__img"/>
            </div>
        </main>
        <Footer />
        </>
     );
}

export default HomePage;