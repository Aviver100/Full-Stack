import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Base URL for the product IDs
const baseUrl = "https://www.elal.com/GiftOnFlight/Gift.aspx?productid=";

// Function to introduce a delay to avoid overwhelming the server
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Component to check a range of product IDs for validity
const ProductIdChecker: React.FC = () => {
  const [validProductIds, setValidProductIds] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to check product IDs and find valid ones
  const checkProductIds = async (start: number, end: number): Promise<number[]> => {
    const validIds: number[] = [];

    for (let id = start; id <= end; id++) {
      const url = `${baseUrl}${id}`;

      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          validIds.push(id);
        }
      } catch (error) {
        console.warn(`Error with product ID ${id}:`, error);
        await delay(200); // 200 milliseconds delay to avoid overwhelming the server
      }
    }

    return validIds;
  };

  // Fetch valid product IDs when the component mounts
  useEffect(() => {
    const fetchValidProductIds = async () => {
      try {
        const validIds = await checkProductIds(1950, 2000); // Check product IDs from 1 to 2000
        setValidProductIds(validIds);
      } catch (e) {
        setError("An error occurred while checking product IDs.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchValidProductIds();
  }, []); // Only run once when the component mounts

  // Render the component
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h3>Valid Product IDs</h3>
          <ul>
            {validProductIds.map((id) => (
              <li key={id}>{id}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductIdChecker;
