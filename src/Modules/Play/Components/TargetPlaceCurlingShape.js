import React from 'react'
import { Circle } from 'react-native-maps'

import GiveCoordinates from '../Utils/GiveCoordinates'
import { useSelector } from 'react-redux'


const CurlingPitchShape = (props) => {

 const latitude= props.latitude 
 const longitude= props.longitude
    
    return (
        <>
            <Circle

                center={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                radius={30000}
                strokeWidth={1}
                strokeColor="rgba(0, 0, 255, 0.6)"
                fillColor="rgba(0, 0, 255, 0.4)"
                zIndex={0}
            />

            <Circle
                center={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                radius={18000}
                strokeWidth={1}
                strokeColor="rgba(255, 255, 255, 0.6)"
                fillColor="rgba(255, 255, 255, 0.4)"
                zIndex={1}
            />
            <Circle
                center={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                radius={9300}
                strokeWidth={1}
                strokeColor="rgba(255, 0, 0, 0.4)"
                fillColor="rgba(255, 0, 0, 0.4)"
                zIndex={2}
            />
            <Circle
                center={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                radius={3750}
                strokeWidth={1}
                strokeColor="rgba(255, 255, 255, 0.4)"
                fillColor="rgba(255, 255, 255, 0.4)"
                zIndex={3}
            />
        </>
    )
}

export default CurlingPitchShape