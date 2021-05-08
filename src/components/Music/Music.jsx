import React from 'react'
import css from './Music.module.css'

 const Music = () => {
    // const imgURL = 'https://icon-library.com/images/play-icon-svg/play-icon-svg-15.jpg'
    return (
        <div className={css.music}>
            Music
            <ul>
                <li data-icon="🦄">Tommy Cash</li>
                {/*<img src={imgURL} alt=""/>*/}
                <li data-icon="🌈">XXXTentacion</li>
                {/*<img src={imgURL} alt=""/>*/}
                <li data-icon="😎">Lil Peep</li>
                {/*<img src={imgURL} alt=""/>*/}
                <li>T-Fest</li>
                {/*<img src={imgURL} alt=""/>*/}
                <li>Noise mc</li>
                {/*<img src={imgURL} alt=""/>*/}
                <li>Basta</li>
                {/*<img src={imgURL} alt=""/>*/}
                <li>Kid Cudi</li>
                {/*<img src={imgURL} alt=""/>*/}
            </ul>

        </div>
    )
}
export default Music