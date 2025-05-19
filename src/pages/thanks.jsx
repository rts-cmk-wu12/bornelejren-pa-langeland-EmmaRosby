import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";

function ThanksPage() {
    const [sponsors, setSponsors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchSponsors() {
            try {
                setLoading(true);
                const response = await fetch(`${import.meta.env.VITE_URL}/api/sponsers`);
                
                if (!response.ok) {
                    throw new Error(`Server responded with status: ${response.status}`);
                }
                
                const data = await response.json();
                setSponsors(data);
                setError(null);
            } catch (err) {
                console.error("Error fetching sponsors:", err);
                setError("Der opstod en fejl under hentning af sponsorer. Prøv igen senere.");
                setSponsors([]);
            } finally {
                setLoading(false);
            }
        }
        
        fetchSponsors();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Hero heading="BØRNELEJREN TAKKER" />

                <div className="thanks">
                    <div>
                        <p>Børnelejren på Langeland takker alle, der på den ene eller anden måde, har støttet foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård - det være sig ved naturaliesponsorater eller økonomisk støtte fra støttemedlemmer, virksomhedssponsorer og donationer fra fonde</p>
                        <img src="img/eight.png" alt="" />
                    </div>
                    <div className="thanks__sponsors">
                        <h3>En særligt tak til</h3>
                        {loading ? (
                            <p>Indlæser sponsorer...</p>
                        ) : error ? (
                            <p className="error-message">{error}</p>
                        ) : sponsors.length > 0 ? (
                            sponsors.map((sponsor, index) => (
                                <div className="thanks__sponsors__container" key={index}>
                                    <p>{sponsor.year}</p>
                                    <p>{sponsor.company}</p>
                                    <p>{sponsor.amount} kr.</p>
                                </div>
                            ))
                        ) : (
                            <p>Ingen sponsorer at vise</p>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default ThanksPage;