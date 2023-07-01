import './about.styles.scss'
import team from '../../assets/team.svg'
import money from '../../assets/money.svg'

const About = () => {
    return (
        <div className='about-us'>
            <h1>ABOUT US</h1>
            <div className='about-intro-section'>
                <h3>Welcome to U-turn Real Estate, </h3>
                <p className='big-text'>A place where inflated real estate prices take a U-turn. With over a decade of industry expertise, we specialize in discovering hidden gems of the real estate market that are often overlooked by traditional estate agencies.
                </p>
            </div>
            <div className='about-us-info'>
                <div className='about-us-info-logo'>
                    <img src={team}/>
                </div>
                <p className='grey-color-text big-text'>Our team comprises over 200 highly skilled experts who are driven by passion and dedication to delivering results. We pride ourselves on our unparalleled commitment to excellence, transparency, and client satisfaction.</p>
            </div>
            <div className='about-us-info'>
                <div className='about-us-info-logo'>
                    <img src={money}/>
                </div>
                <p className='grey-color-text big-text'>Whether you are a first-time home buyer or an experienced investor, our tailored solutions cater to your unique needs, ensuring you enjoy the best of both worlds: the comfort of a home and the returns of an investor.</p>
            </div>
            <p className='primary-color-text big-text' style={{textAlign: 'center'}}>Join hands with U-turn and experience real estate at its finest.</p>
        </div>
    )
}

export default About;