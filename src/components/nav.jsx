
import { NavLink } from "react-router";



function Navigation() {

    const style = {
        active: {
            color: "black",
            textDecoration: "underline",
        }
    };
    return (  
        <nav className="navigation">
            <ul>
            <li><NavLink to="/" style={({ isActive }) => isActive ? style.active : undefined}>Hjem</NavLink></li>
                <li><NavLink to="/about" style={({ isActive }) => isActive ? style.active : undefined}>Om os</NavLink></li>
                <li><NavLink to="/sponser" style={({ isActive }) => isActive ? style.active : undefined}>Bliv sponser</NavLink></li>
                <li><NavLink to="/thanks" style={({ isActive }) => isActive ? style.active : undefined}>Børnelejren takker</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;