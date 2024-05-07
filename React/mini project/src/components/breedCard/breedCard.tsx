import { useEffect, useState } from 'react'
import './breedCard.scss'


function breedCard() {
    const [breeds, setBreeds] = useState([]);
    const [photos, setPhotos] = useState({});

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => setBreeds(data.message))
            .catch(err => console.error(err))
    }, []);

    useEffect(() => {
        if (breeds.length > 0) {
            breeds.forEach(breed => {
                fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`)
                    .then(response => response.json())
                    .then(data => {
                        setPhotos(prevPhotos => ({
                            ...prevPhotos,
                            [breed]: data.message[0],
                        }));
                    })
                    .catch(err => console.error(err));
            });
        }
    }, [breeds]);
    return (
        <>
        {
            breeds.map(breed =>{
            <div key={breed} className="breedCard">
                <p>{breed}</p>
            </div>
            })
        }
        </>
    )
}

export default breedCard


