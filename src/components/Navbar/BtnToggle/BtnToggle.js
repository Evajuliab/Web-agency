import React, {useContext} from "react";
import './BtnToggle.css';
import { ThemeContext } from "../../../Context/ThemeContext";

const BtnToggle = () => {

    const {toggleTheme, theme} = useContext(ThemeContext)

    return (
      

        <button className = {theme ? 'btn-toggle goLight' : 'btn-toggle goDark'} onClick= {toggleTheme} 
        >{theme ? 'Dark' : 'Light'}</button>

        
    )
}

export default BtnToggle