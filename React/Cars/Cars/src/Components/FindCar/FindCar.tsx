// https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&filters={%22mispar_rechev%22:%2211502001%22}

import { useEffect, useState } from 'react'

interface Car {
    _id: number,
    mispar_rechev: number,
    tozeret_cd: number,
    sug_degem: string,
    tozeret_nm: string,
    degem_cd: number,
    degem_nm: string,
    ramat_gimur: string,
    ramat_eivzur_betihuty: string,
    kvutzat_zihum: string,
    shnat_yitzur: number,
    degem_manoa: string,
    mivchan_acharon_dt: string,
    tokef_dt: string,
    baalut: string,
    misgeret: string,
    tzeva_cd: number,
    tzeva_rechev: string,
    zmig_kidmi: string,
    zmig_ahori: string,
    sug_delek_nm: string,
    horaat_rishum: string,
    moed_aliya_lakvish: string,
    kinuy_mishari: string
}

export default function FindCar() {
    const [carNumber, setCarNumber] = useState<Car>();
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&filters={"mispar_rechev":}`)
            .then(res => res.json())
            .then(res => res.setCarNumber(res))
    }, [id])
    
    return (
        <>
            <div>FindCar</div>
            <p>{carNumber?.ramat_gimur}</p>
        </>
    )
}

function useParams(): { id: any; } {
    throw new Error('Function not implemented.');
}

