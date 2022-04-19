import { Activelink } from './Activelink';
import style from './NavBar.module.css'


const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];


export const NavBar = () => {


    return (
        <nav className={ style['menu-container'] }>

            {
                menuItems.map( ({ text, href }) => (
                    <Activelink key={ href } text={ text } href={ href } />
                ))
            }


            {/* <Activelink text="Home" href="/" />
            <Activelink text="About" href="/about" />
            <Activelink text="Contact" href="/contact" />
            <Activelink text="Pricing" href="/pricing" /> */}
        </nav>
    );


}
