'use client'
import React, { useState } from 'react'


const FoodRow = (props: any) => {
    const [disabled, setDisabled] = useState(false);
    const [GI, setGI] = useState("");
    const [tag, setTag] = useState("");
    async function buttonAction(){
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/foods/tag/${props.details._id}`, {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                GI: parseInt(GI, 10), // Convert to integer if needed
                tag: tag
              }),
            });
      
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
      
            // Handle success
            console.log('PUT request successful');
            setDisabled(true);
        
        // You can handle the response data if needed
        const responseData = await response.json();
        console.log(responseData);
        } catch (error) {
        console.error('Error during PUT request:', error);
        // Handle error as needed
        }
        
    }
    if (disabled) {
        return null;
    }

    return (
        <div className="w-full py-5 px-10">
            <p>English Name: {props.details.english_name}</p>
            <p>KFCT Code: {props.details.code_kfct}</p>
            <p>Glycemic Index = {GI}</p>
            <input className="text-black mr-5" value={GI} pattern="[0-9]*"  onChange={(e) => setGI(e.target.value)} type="text" />
            <button className="bg-green-200 text-black py-1 px-5 rounded-lg" onClick={buttonAction}>Update</button>

            <p>Tag = {tag}</p>
            <input className="text-black mr-5" value={tag}  onChange={(e) => setTag(e.target.value)} type="text" />
            {/* <button className="bg-green-200 text-black py-1 px-5 rounded-lg" onClick={buttonAction}>Add Tag</button> */}
        </div>
    )
}

export default FoodRow