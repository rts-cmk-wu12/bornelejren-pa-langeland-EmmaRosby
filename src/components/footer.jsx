function Footer() {
    return (  
        <>
        <footer className="footer">
            <div className="footer__container">
                <h4 className="footer__container__heading">Kontakt os:</h4>
                <div>
                    <p className="bold">Sekretariatet og administration:</p>
                    <p>Knud Bro Alle 1, st. mf.<br />3660 Stenløse</p>
                </div>
                <div>
                    <p><span>Telefon:</span> 38711260</p>
                    <p><span>E-mail:</span> info@børnelejr.dk</p>
                    <p><span>Hjemmeside:</span> <a href="http://www.lejren.dk"></a></p>
                </div>
            </div>
            <div className="footer__container">
                <h4 className="footer__container__heading">Betalingsoplysninger:</h4>
                <p><span>SEnr:</span> 26917425</p>
                <p><span>Danske Bank:</span> reg.nr. 1551 konto 10008182</p>
                <p><span>Merkur Bank:</span> reg.nr. 8401 konto 1077819</p>
                <p><span>Merkur Bank:</span> reg.nr. 8401 konto 4215119</p>
                <p><span>MobilePay:</span> 27231</p>
            </div>
            <div className="footer__container">
                <div>
                    <h4 className="footer__container__heading">Lejren:</h4>
                    <p>Søgård Hovedgård <br />Søgårdsvej 8A <br />5935 Bagenkop</p>
                </div>
                <div className="footer__container__logo">
                    <p>Foreningen Børnelejren på Langeland</p>
                    <img src="src/assets/logo.svg" alt="" />
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;