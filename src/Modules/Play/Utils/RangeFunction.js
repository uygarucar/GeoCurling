import React from 'react'

//0 ile RandomPlace arrayinin uzunluğunun arasındaki bir sayıyı random olarak döner.
const RangeFunction = (RandomPlace) => {
    const number = (RandomPlace.length *Math.random());
    const integerNumber= Math.ceil(number) - 1
    return integerNumber;
}

export default RangeFunction