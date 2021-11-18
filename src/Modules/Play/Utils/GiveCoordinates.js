import React from 'react'
import RangeFunction from './RangeFunction'

const GiveCoordinates = (CoordinateArray) => {
    const randomNumber = RangeFunction(CoordinateArray)
    const {id, latitude, longitude} = CoordinateArray[randomNumber]

    return {id, latitude, longitude}
}

export default GiveCoordinates