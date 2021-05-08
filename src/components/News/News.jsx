import css from './News.module.css';
import React from 'react'


 const News = () => {
    return (
        <div className={css.news}>
            News
            <ul>
                <li>some post</li>
            </ul>
        </div>
    )
}
export default News