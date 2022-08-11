import {Link} from 'react-router-dom'
import './Navbar.css';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import BtnToggle from './BtnToggle/BtnToggle'


const Navbar = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <nav className = {theme ? 'nav light' : 'nav dark'}>
            <ul>
<li><Link className='link' to="/">Home</Link></li>
<li><Link className='link' to="/about">About</Link></li>
<li><Link className='link' to="/works">Works</Link></li>

<BtnToggle />
</ul>
        </nav>
    )
}

export default Navbar