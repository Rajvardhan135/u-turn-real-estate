import './wdwo-card.styles.scss'
import { useState } from 'react'

const WdwoCard = ({data}) => {
    const {title, image, content, id} = data
    return (
        <div>
            <div className={id % 2 !== 0 ? 'wdwo-card' : 'wdwo-card wdwo-card-inverted'}>
                <img src={image} className='wdwo-image'/>
                <div className='wdwo-card-content'>
                    <h2>{title}</h2>
                    <div className='wdwo-card-content-box'>
                        <div className='wdwo-empty-div'/>
                        <p className='medium-text'>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WdwoCard