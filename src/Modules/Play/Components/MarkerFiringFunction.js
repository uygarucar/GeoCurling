const _onPress_markerFiringFunction = (nextCoordinates, myMarker, mapRef, changeActMarkerCoordinate, time) => {
    console.log("FireMarker:1")
    
    let newCoordinate = {
        latitude: nextCoordinates.latitude,
        longitude: nextCoordinates.longitude,
        latitudeDelta: 0.022,
        longitudeDelta: 0.022,
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
        myMarker.animateMarkerToCoordinate(newCoordinate, time)
        mapRef.current.animateCamera(newCamera, {duration: time})
    }
    console.log("FireMarker:2")
    changeActMarkerCoordinate()
}

export default _onPress_markerFiringFunction