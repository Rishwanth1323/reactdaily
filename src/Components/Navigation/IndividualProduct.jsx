import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function IndividualProduct() {
    const [data, setData] = useState({});
    const id = useParams(); // Destructure id from useParams()

    useEffect(() => {
        console.log(id); // Check if id is being captured correctly
        fetchData();
    }, [id]); // Fetch data only when the id changes

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id.productID}`); // Use backticks for string interpolation
            console.log('API Response:', response.data); // Log API response
            if (response.status === 200) {
                setData(response.data); // Update the state with response data
            }
        } catch (err) {
            console.log('Error fetching data:', err); // Log error
        }
    };

    return (
        <div>
            <h1>UNIQUE SPECIFICATION</h1>
            {
                data && data.title ? ( // Check if data is present and title exists
                    <>
                        <h1>{data.title}</h1>
                        <img src={data.image} alt={data.title} height={100} width={100} />
                        <br />
                        <button style={{margin:25}} >{data.price} $$$$$</button>
                    </>
                ) : (
                    <p>Loading product details...</p> // Display a loading message if data is not yet available
                )
            }
        </div>
    );
}
