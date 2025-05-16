import PrimaryMenu from "./burgerMenu/primaryMenu";
import Navigation from "./nav";


function Header() {
    return (  
        <>
            <header className="header">
                <h1>BØRNELEJREN PÅ LANGELAND</h1>
                <img src="src/assets/logo.svg" alt="" />
                <Navigation />
                <PrimaryMenu />
            </header>
        </>
    );
}

export default Header;