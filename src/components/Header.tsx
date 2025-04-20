import '../styles/header.css';
import globe_img from '../assets/globe.png';

export default function Header() {
    return(
        <header>
            <img src={ globe_img } alt="globe image" />
            <span>my travel journal.</span>
        </header>
    )
}