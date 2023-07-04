import React from 'react'
import { useContext } from 'react'
import { FoodContext } from '../context/FoodContext'

function SingleFood() {
  const {deleteFood} = useContext(FoodContext)
  return (
    <div>SingleFood</div>
  )
}

export default SingleFood