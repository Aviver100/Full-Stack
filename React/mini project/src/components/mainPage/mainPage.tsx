import { useEffect, useState } from 'react'
import './mainPage.scss'
import BreedCard from '../breedCard/breedCard';


function mainPage() {
    const [breed, setBreed] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => setBreed(data.message))
            .catch(err => console.error(err))
    }, []);

    fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`)
    //     .then(response => response.json())
    //     .then(data => setPhoto(data.message))
    //     .catch(err => console.error(err))

    return (
        <>
            <input className='search' type="text" />
            <div className="main">
                {Object.keys(breed).map((breed) => (
                    <BreedCard breed={breed} /> 
                    // <BreedCard /> 

                ))
                }
            </div>
        </>
    )
}

export default mainPage


