import './our-process.styles.scss'

import ProcessCard from '../../components/process-card/process-card.component'
import { Fragment } from 'react';

import marketResearchImage from '../../assets/market-research 1.svg';
import negotiationImage from '../../assets/negotiation 1.svg'
import opportunityImage from '../../assets/opportunity 1.svg';
import compliantImage from '../../assets/compliant 1.svg';
import qualityImage from '../../assets/quality 1.svg';


const processData = [
    {
        "id": 1,

        "title": 'In-Depth Market Research',

        "image": marketResearchImage,

        "content": `Our team experts at U-turn Real Estate leaves no stone unturned when it comes to market research. We perform rigorous analysis to identify the most promising properties with the best returns for our clients.\n
        From market trends and demographics to local economy and infrastructure, we take into account every factor to make it worth your time and dime.`
    },

    {
        "id": 2,

        "title": 'Skilled Negotiations',

        "image": negotiationImage,

        "content": `With our skilled negotiators on board, you can rest assured that you'll get the best deal possible. We collaborate closely with builders and sellers to secure the most favorable prices and terms for our clients.\n 
        We leverage our bargaining power to obtain discounted prices and drastically reduce the cost per unit for our clients.`
    },

    {
        "id": 3,
        
        "title": 'Curated Opportunities',

        "image": opportunityImage,

        "content": "Our philosophy is simple we don't just sell properties, we create opportunities. We present our clients with a hand-picked selection of properties that match their preferences, providing them with the information they need to make an informed decision.\n\nFrom the location and features to the appreciation potential, we give you a comprehensive overview of every opportunity. We also assist with financing, closing, and property management, making the process seamless and hassle-free."
    },

    {
        "id": 4,
        
        "title": 'RERA Compliant Projects',

        "image": compliantImage,

        "content": `At U-turn Real Estate, we prioritize your peace of mind above all else. That's why we only work with builders who adhere to RERA guidelines, ensuring that your investment is safe and secure.\n
        All the projects we deal with are RERA compliant, giving you the confidence that you're making a smart investment choice.`
    },

    {
        "id": 5,
        
        "title": 'Verified by Experts',

        "image": qualityImage,

        "content": ` When it comes to selecting properties, we don't compromise on quality. Our expert team thoroughly evaluates each project to ensure that it meets our high standards before presenting it to our clients. By verifying every opportunity, we ensure that you're investing in a high-quality project that will deliver impressive returns.`
    },


]


const Process = () => {
    return (
        <div className='process-container'>
            <h1>OUR PROCESS</h1>
            {processData.map((data)=>
                <Fragment key={data.id}>
                    <ProcessCard data={data}/>
                    {
                        data.id===5?(<div className='none'/>):(<div className='separator'/>)
                    }
                </Fragment>
            )}
        </div>
    )
}

export default Process;
