import './navigation.styles.scss';
import {ReactComponent as UturnLogo} from '../../assets/logo.svg';
import {ReactComponent as MenuIcon} from '../../assets/menu.svg';
import {ReactComponent as CrossIcon} from '../../assets/x-menu.svg';
import { Link, Outlet, NavLink } from 'react-router-dom';
import { Fragment, useState } from 'react';
import Footer from '../../components/footer/footer.component'

const Navigation = () => {

    const [navClassName, setNavClassName] = useState('navigation')
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);

        if(navClassName === 'navigation')
            setNavClassName('navigation menu-navigation')
        else
            setNavClassName('navigation')
    }

    return (
        <Fragment>
            <div className={navClassName}>
                <button className='menu' onClick={handleMenuClick}>
                    {isMenuOpen? <CrossIcon /> : <MenuIcon />}
                </button>

                <div className='nav-links-container'>
                    <NavLink className='nav-link' to='/'>
                        Home
                    </NavLink>
                    <NavLink className='nav-link' to='/what-do-we-offer' >
                        What Do We Offer?
                    </NavLink>
                    <NavLink className='nav-link' to='/our-process' >
                        Our Process
                    </NavLink>
                    <NavLink className='nav-link' to='/about-us' >
                        About us
                    </NavLink>
                </div>   
                <Link className='logo-container' to='/'>
                    <UturnLogo className='logo'/>
                </Link>
            </div>
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default Navigation