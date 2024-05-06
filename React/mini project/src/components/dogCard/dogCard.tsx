import { useEffect, useState } from 'react'
import './dogCard.scss'


function dogCard() {
    const [breed, setBreed] = useState([]);
    // const [photo, setPhoto] = useState([]);

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => setBreed(data.message))
        .catch(err => console.error(err))

    // fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`)
    //     .then(response => response.json())
    //     .then(data => setPhoto(data.message))
    //     .catch(err => console.error(err))

    return (
        <>
            <div className="main">
                {Object.keys(breed).map((breed) => (
                    <div className='dogBox'>
                        <p>{breed}</p>

                    </div>
                ))
                }
            </div>
        </>
    )
}

export default dogCard