import React from 'react'
import { getPreciseDistance } from 'geolib'

const distanceFinder = (latitudeSource, longitudeSource, latitudeTarget, longitudeTarget) => {
    const distance= getPreciseDistance({latitude: latitudeSource, longitude: longitudeSource}, 
        {latitude:latitudeTarget, longitude: longitudeTarget})
    
    return distance
} 

export default distanceFinder