import React from 'react'
import { Circle } from 'react-native-maps'
import { TargetPlaces_Unit1 } from './TargetPlacesInfos'
import GiveCoordinates from '../Utils/GiveCoordinates'

const CurlingShape = () => {

 const elements = GiveCoordinates(TargetPlaces_Unit1)
    
    return (
        <>
            <Circle

                center={{
                    latitude: elements.latitude,
                    longitude: elements.longitude,
                }}
                radius={30000}
                strokeWidth={1}
                strokeColor="rgba(0, 0, 255, 1)"
                fillColor="rgba(0, 0, 255, 1)"
                zIndex={0}
            />

            <Circle
                center={{
                    latitude: elements.latitude,
                    longitude: elements.longitude,
                }}
                radius={18000}
                strokeWidth={1}
                strokeColor="rgba(255, 255, 255, 0.99)"
                fillColor="rgba(255, 255, 255, 0.99)"
                zIndex={1}
            />
            <Circle
                center={{
                    latitude: elements.latitude,
                    longitude: elements.longitude,
                }}
                radius={9300}
                strokeWidth={1}
                strokeColor="rgba(255, 0, 0, 0.99)"
                fillColor="rgba(255, 0, 0, 0.99)"
                zIndex={2}
            />
            <Circle
                center={{
                    latitude: elements.latitude,
                    longitude: elements.longitude,
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