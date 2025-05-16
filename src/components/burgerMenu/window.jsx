import {  NavLink } from "react-router-dom"
import Button from "./menuButton"

export default function Window({ show, setShow }){

    const style = {
        active: {
            color: "black",
            textDecoration: "underline",
        }

    }

    return  (
        <section className={`burgermenu ${show ? 'visible' : 'hidden'}`}>
            <Button show={show} setShow={setShow}  className="burgermenu__button"/>
            <nav onClick={() => setShow(prevState => !prevState)} className="burgermenu__burgerNavigation"> 
                <ul>
                    <li><NavLink to="/" style={({ isActive }) => isActive ? style.active : undefined}>Hjem</NavLink></li>
                    <li><NavLink to="/about" style={({ isActive }) => isActive ? style.active : undefined}>Om os</NavLink></li>
                    <li><NavLink to="/sponser" style={({ isActive }) => isActive ? style.active : undefined}>Bliv sponser</NavLink></li>
                    <li><NavLink to="/thanks" style={({ isActive }) => isActive ? style.active : undefined}>Børnelejren takker</NavLink></li>
                </ul>
            </nav>
        </section>

     

    )
    
}