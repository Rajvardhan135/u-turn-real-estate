import './what-do-we-offer.styles.scss'
import WdwoCard from '../../components/wdwo-card/wdwo-card.component'
import wdwoData from '../../content/wdwo-content'

const Offer = () => {
    return (
        <div className='wdwo-container'>
            <h1>WHAT DO WE OFFER</h1>
            <div className='wdwo-cards-container'>
               {
                wdwoData.map((data) => 
                    <WdwoCard data={data} key={data.id}/>
                )
               } 
            </div>
        </div>
    )
}

export default Offer;
