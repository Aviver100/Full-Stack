import { useState } from 'react'
import './mainPage.scss'


function dogCard() {
    const [breed, setBreed] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [searchInput, setSearchInput] = useState("");

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
                        <img src="" alt="" />
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default dogCard


