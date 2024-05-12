import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './breedPage.module.scss'
import Chat from '../chat/chat';

function breedPage({ breed }: { breed: string }) {
  const { breedParam } = useParams();
  const [breedImage, setBreedImage] = useState();

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breedParam}/images/random/1`)
      .then(response => response.json())
      .then(data => setBreedImage(data.message))
      .catch(() => alert())
  }, [])

  return (
    <>
      <div className={styles.container}>

        <div className={styles.breedInfo}>
          <h1 className={styles.breedTitle}>{breedParam}</h1>
          <img className={styles.breedPhoto} src={breedImage} alt={breedParam} />
        </div>

        <div className={styles.chat}>
          <Chat url={'ws://localhost:8080'} />
        </div>
      </div>
    </>

  )
}

export default breedPage