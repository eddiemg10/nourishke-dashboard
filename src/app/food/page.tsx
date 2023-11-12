import React from 'react'
import FoodRow from './FoodRow';

interface Food {
    _id: any,
    english_name: string,
    code_kfct: string,
}
const FoodPage = async() => {
    const res = await fetch('http://127.0.0.1:8000/api/v1/foods/tag')
    const foods: Food[] = await res.json();
    return (
        <>
        <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold underline">Foods</h1>
        <ul>
            {foods.map(food =>
                <li key={food._id}><FoodRow details={food}/></li>
            )}
            {/* <li><FoodRow /></li> */}
        </ul>
        </div>
        </>
    )
}

export default FoodPage