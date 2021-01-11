import React from 'react'
import pagenotfound_image from '../../assets/images/pagenotfound_image.png'
import './styles.css'

const PageNotFound = () => {
    return (
        <div className='pagenotfound'>
            <h1>página não encontrada</h1>
            <img src={pagenotfound_image} alt='imagem de uma esfera do dragão'/>
        </div>
    )
}

export default PageNotFound