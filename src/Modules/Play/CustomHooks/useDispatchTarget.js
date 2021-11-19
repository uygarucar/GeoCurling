import React from 'react'
import { useDispatch } from 'react-redux'
import { targetLatitudeCreator } from '../Redux/TargetLatitudeRedux'
import { targetLongitudeCreator } from '../Redux/TargetLongitudeRedux'
import { targetTextCreator } from '../Redux/TargetTextRedux'

const useDispatchTarget = (targetElements) => {
    const dispatch= useDispatch();

    dispatch(targetLatitudeCreator(targetElements.latitude));
    dispatch(targetLongitudeCreator(targetElements.longitude));
    dispatch(targetTextCreator(targetElements.text));
}

export default useDispatchTarget