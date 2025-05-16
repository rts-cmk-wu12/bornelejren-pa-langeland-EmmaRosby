import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import SponserForm from "../components/sponserForm";

function SponserPage() {
    return ( 
        <>
            <Header />
            <main>
                <Hero heading="BLIV SPONSER" />

                <div className="sponser">
                    <div className="sponser__content">

                    
                        <p>Da det er meget individuelt, hvor meget en virksomhed kan og ønsker at støtte med, har vi opdelt støttemulighederne i 3 kategorier:</p>
                        <div>
                            <h3>Børnesponsorat</h3>
                            <p>Hvis din virksomhed vælger at blive børnesponsor, dækker I omkostningerne for et navngivet barns ophold og transport til og fra Langeland. Prisen pr. barn varierer fra lejr til lejr, men vi har fastsat en gennemsnitspris på kr. 4.000,- pr. barn for et ophold. Denne pris inkluderer transport, forplejning, forsikring, udflugter, adgangsbilletter til udflugtsmålene, smågaver og slik til ét barn.</p>
                        </div>
                        <div>
                            <h3>Lejrsponsorat</h3>
                            <p>For kr. 2.000,- kan virksomheden blive lejrsponsor og være med til at dække alle omkostningerne ved børnelejren, som bl.a. omfatter ejendommens drifts- og vedligeholdelsesomkostninger samt eventuelle ekstra udgifter omkring en lejr, der f.eks. kan være løn til specialuddannet personale.  </p>
                        </div>
                        <div>
                            <h3>Støtte til foreningen</h3>
                            <p>Virksomheder, der ønsker at støtte foreningens arbejde med et mindre beløb, kan vælge at blive diplomsponsorer. Af administrative årsager skal der minimum støttes med kr  1.000,- for at man kan modtage et trykt diplom til ophængning i virksomheden, men alle støttebeløb - store som små - er naturligvis velkomne.</p>
                        </div>
                    </div>
                    <SponserForm />
                </div>
            </main>
            <Footer />
        </>
     );
}

export default SponserPage;