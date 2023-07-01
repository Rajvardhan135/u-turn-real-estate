import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-image-container'>
                <img src={require('../../assets/homepage-4.jpg')} alt='footer' className='footer-image'/>
            </div>
            <div className='footer-content'>
                <p className='normal-text'>Address: </p>
                <p className='normal-text'>Email: </p>
                <p className='normal-text'>Call: </p>
            </div>
        </div>
    )
}

export default Footer;