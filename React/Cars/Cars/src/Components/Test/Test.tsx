import React, { useEffect, useState } from 'react';

// Define the structure of a car record
interface CarRecord {
    mispar_rechev: string; // Vehicle registration number (ensure it's always a string)
    [key: string]: any; // Other potential fields
}

// Component that fetches and displays vehicles whose numbers end in "70034"
const CarFinder: React.FC = () => {
    const [records, setRecords] = useState<CarRecord[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const endpoint =
        'https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=1000';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoint);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data. Status code: ${response.status}`);
                }

                const data = await response.json();
                const fetchedRecords = data.result.records as CarRecord[];

                // Filter only those whose 'mispar_rechev' ends with '70034'
                const filteredRecords = fetchedRecords.filter(
                    (record) =>
                        typeof record.mispar_rechev === 'string' && // Ensure it's a string
                        record.mispar_rechev.endsWith('70034') // Ends with "70034"
                );

                setRecords(filteredRecords); // Store filtered results
                setLoading(false);
            } catch (err) {
                setError((err as Error).message);
                setLoading(false);
            }
        };

        fetchData(); // Fetch data when the component mounts
    }, []); // This effect runs only once on component mount

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {records.map((record) => (
                        <li key={record.mispar_rechev}>{record.mispar_rechev}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CarFinder; // Export the component for use in your application
