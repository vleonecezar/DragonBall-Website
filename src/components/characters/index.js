import React, { useState, useEffect } from 'react'
import './styles.css'

async function getCharacters() {
    let response = await fetch('http://localhost:3000/api/characters.json')
    let data = await response.json()
    return data
}

const Characters = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getCharacters().then(data => {
            setCharacters(
                data['characters'].map(char => {
                    return(
                        <div key={char.id} className='character'>
                            <img src={char.image} alt={`foto de ${char.name}`}/>
                            <p>{char.name}</p>
                        </div>
                    )
                })
            )
        })
    }, [])

    return (
        <div className='main-characters'>
            <h2>Principais Personagens</h2>
            <div className='characters'>
                {characters}
            </div>
        </div>
    )
}

export default Characters