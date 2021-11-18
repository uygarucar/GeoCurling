import React from 'react'
import { Circle } from 'react-native-maps'
import { TargetPlaces_Unit1 } from './TargetPlacesInfos'
import GiveCoordinates from '../Utils/GiveCoordinates'
import { useSelector } from 'react-redux'
import { targetLatitudeSelector } from '../Redux/TargetLatitudeRedux'
import { targetLongitudeSelector } from '../Redux/TargetLongitudeRedux'

const CurlingShape = () => {

 const latitude= useSelector(targetLatitudeSelector)
 const longitude= useSelector(targetLongitudeSelector)

    
    return (
        <>
            <Circle

                center={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                radius={30000}
                strokeWidth={1}
                strokeColor="rgba(0, 0, 255, 1)"
                fillColor="rgba(0, 0, 255, 1)"
                zIndex={0}
            />

            <Circle
                center={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                radius={18000}
                strokeWidth={1}
                strokeColor="rgba(255, 255, 255, 0.99)"
                fillColor="rgba(255, 255, 255, 0.99)"
                zIndex={1}
            />
            <Circle
                center={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                radius={9300}
                strokeWidth={1}
                strokeColor="rgba(255, 0, 0, 0.99)"
                fillColor="rgba(255, 0, 0, 0.99)"
                zIndex={2}
            />
            <Circle
                center={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                radius={3750}
                strokeWidth={1}
                strokeColor="rgba(255, 255, 255, 0.99)"
                fillColor="rgba(255, 255, 255, 0.99)"
                zIndex={3}
            />
        </>
    )
}

export default CurlingShape