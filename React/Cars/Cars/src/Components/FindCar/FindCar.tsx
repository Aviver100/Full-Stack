
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

// interface Car {
//     _id: number,
//     mispar_rechev: number,
//     tozeret_cd: number,
//     sug_degem: string,
//     tozeret_nm: string,
//     degem_cd: number,
//     degem_nm: string,
//     ramat_gimur: string,
//     ramat_eivzur_betihuty: string,
//     kvutzat_zihum: string,
//     shnat_yitzur: number,
//     degem_manoa: string,
//     mivchan_acharon_dt: string,
//     tokef_dt: string,
//     baalut: string,
//     misgeret: string,
//     tzeva_cd: number,
//     tzeva_rechev: string,
//     zmig_kidmi: string,
//     zmig_ahori: string,
//     sug_delek_nm: string,
//     horaat_rishum: string,
//     moed_aliya_lakvish: string,
//     kinuy_mishari: string
// }

// export default function FindCar() {
//     const [car, setCar] = useState<Car>();
//     const { id } = useParams();

//     useEffect(() => {
//         fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&filters={"mispar_rechev":"${id}"}`)
//             .then(res => res.json())
//             .then(res => res.setCar(res))
//             console.log(car);
//     }, [id])

//     return (

//         <>
//             <div>FindCar</div>
//             <p>{car?.ramat_gimur}</p>
//         </>
//     )
// }


import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Car {
    _id: number;
    mispar_rechev: number;
    tozeret_cd: number;
    sug_degem: string;
    tozeret_nm: string;
    degem_cd: number;
    degem_nm: string;
    ramat_gimur: string;
    ramat_eivzur_betihuty: string;
    kvutzat_zihum: string;
    shnat_yitzur: number;
    degem_manoa: string;
    mivchan_acharon_dt: string;
    tokef_dt: string;
    baalut: string;
    misgeret: string;
    tzeva_cd: number;
    tzeva_rechev: string;
    zmig_kidmi: string;
    zmig_ahori: string;
    sug_delek_nm: string;
    horaat_rishum: string;
    moed_aliya_lakvish: string;
    kinuy_mishari: string;
}

export default function FindCar() {
    const [car, setCar] = useState<Car | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const res = await fetch(
                    `https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&filters={"mispar_rechev":"${id}"}`
                );
                if (!res.ok) {
                    throw new Error('Failed to fetch car data');
                }
                const data = await res.json();
                const foundCar = data.result.records[0]; // Assuming you're interested in the first record
                setCar(foundCar);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCar();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!car) {
        return <div>No car found for the given ID</div>;
    }

    return (
        <>
            <h1>Car Details</h1>
            <p>Vehicle ID: {car.mispar_rechev}</p>
            <p>Model: {car.degem_nm}</p>
            <p>Finish Level: {car.ramat_gimur}</p>
            {/* Add other car details as needed */}
        </>
    );
}
