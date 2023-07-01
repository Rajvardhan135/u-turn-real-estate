import './home.styles.scss'
import Button from '../../components/button/button.component';

const Home = () => {
    return (
        <div className='home-page-container'>
            <div className='hero-section-container'>
                <img src={require('../../assets/homepage-1.jpg')} className='hero-img'></img>
                <div className='hero-text'>
                    <p>A place where inflated real estate prices take a U-turn. With over a decade of industry expertise, we specialize in discovering hidden gems of the real estate market that are often overlooked by traditional estate agencies.</p>
                    <Button>Read More</Button>
                </div>
                <div className='hero-yellow-box' />
            </div>
        </div>
    )
}

export default Home;