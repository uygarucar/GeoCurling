import React from 'react'
import { useDispatch } from 'react-redux'
import { currentLatitudeCreator } from '../Redux/CurrentLatitudeRedux'
import { currentLongitudeCreator } from '../Redux/CurrentLongitudeRedux'

const useDispatchCurrent = (currentElements) => {
    const dispatch= useDispatch();

    dispatch(currentLatitudeCreator(currentElements.latitude));
    dispatch(currentLongitudeCreator(currentElements.longitude));

}

export default useDispatchCurrent