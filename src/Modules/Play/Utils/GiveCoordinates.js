import React from 'react'
import RangeFunction from './RangeFunction'

const GiveCoordinates = (CoordinateArray) => {
    const randomNumber = RangeFunction(CoordinateArray)
    const {id, text, latitude, longitude} = CoordinateArray[randomNumber]

    return {id, text, latitude, longitude}
}

export default GiveCoordinates