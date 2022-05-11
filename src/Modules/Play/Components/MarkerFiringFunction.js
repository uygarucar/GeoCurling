const _onPress_markerFiringFunction = (nextCoordinates, myMarker, mapRef, changeActMarkerCoordinate) => {
    console.log("FireMarker:1")
    
    let newCoordinate = {
        latitude: nextCoordinates.latitude,
        longitude: nextCoordinates.longitude,
        latitudeDelta: 0.012,
        longitudeDelta: 0.012,
    }
    const newCamera= {
        center: {
            latitude: nextCoordinates.latitude,
            longitude: nextCoordinates.longitude,
        },
        pitch: 0,
        heading: 0,
        //zoom: 17  --Use it when required
    }
    if(myMarker){
        myMarker.animateMarkerToCoordinate(newCoordinate, 2000)
        mapRef.current.animateCamera(newCamera, {duration: 2000})
    }
    console.log("FireMarker:2")
    changeActMarkerCoordinate()
}

export default _onPress_markerFiringFunction