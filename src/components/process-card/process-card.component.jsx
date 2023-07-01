import './process-card.styles.scss'
import { Fragment } from 'react';

const ProcessCard = ({data}) => {
    console.log(data);
    const {title , content, image} =  data
    return (
        <div className='process-card'>
            <img src={image} className='process-image'/>
            <h3>{title}</h3>
            <p className='big-text'>{content.split('\n').map((line, index) => <Fragment key={index}>{line}<br /></Fragment>)}</p>
        </div>
    )
}

export default ProcessCard;