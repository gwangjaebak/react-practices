import React from 'react'
<<<<<<< HEAD
import FoodListItem from './FoodListItem';
=======
import FoodListItem from './FoodListItem'
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb

const FoodList = ({foods}) => {
  return (
    <ul>
        {foods.map((food) => <FoodListItem
                                key={food.no}
                                name={food.name}
                                quantity={food.quantity} />)}
    </ul>   
  )
}

export default FoodList