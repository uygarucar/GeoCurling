import React from 'react'
import RangeFunction from './RangeFunction'

const GiveCoordinates = (CoordinateArray) => {
    const randomNumber = RangeFunction(CoordinateArray)
    const {id, text, latitude, longitude, solution} = CoordinateArray[randomNumber]

    return {id, text, latitude, longitude, solution}
}

export default GiveCoordinates