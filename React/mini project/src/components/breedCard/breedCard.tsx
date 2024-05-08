import { useEffect, useState } from 'react'
import './breedCard.scss'


function breedCard({ breed }: { breed: string }) {
    const [breedPhoto, setBreedPhoto] = useState('');


    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`)
            .then(data => data.json())
            .then(json => setBreedPhoto(json.message))
            .catch(() => alert())
    }, [breed])

    return (
        <>
            <div key={breed} className="breedCard">
                <img src={breedPhoto} />
                <p>{breed}</p>
            </div>
        </>
    )
}

export default breedCard


