import Navigation from './_navigation/Navigation';
import Title from './_title/Title';
import styles from './Header.module.css';
export default function Header(){
    return(
        <>
        <header>
            <Title />
            <Navigation />
        </header>
        </>
    )
}