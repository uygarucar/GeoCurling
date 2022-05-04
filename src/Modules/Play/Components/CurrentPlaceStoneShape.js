import React from 'react'
import { Circle, MarkerAnimated, Polygon } from 'react-native-maps'

const StoneShape = (props) => {
const latitude= props.latitude;
const longitude= props.longitude;


    return (
        <>
            <MarkerAnimated
            image={require('../../../Assets/Images/curlingStone.png')}
            coordinate={{latitude: latitude,
            longitude: longitude,
            }}          
            >
            {/*
            <Circle
                center={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                radius={5000}
                strokeWidth={1}
                strokeColor="rgba(123, 123, 123, 1)"
                fillColor="rgba(123, 123, 123, 1)"
                zIndex={0}
            />
            <Circle
                center={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                radius={3000}
                strokeWidth={1}
                strokeColor="rgba(255, 0, 0, 1)"
                fillColor="rgba(255, 0, 0, 1)"
                zIndex={0}
            />
             */}
             </MarkerAnimated>
        </>
    )
}

export default StoneShape