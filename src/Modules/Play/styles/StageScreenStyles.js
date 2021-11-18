import React from 'react'
import { StyleSheet } from 'react-native'
import { Metrics, Fonts } from '../../../StylingConstants'

const styles = StyleSheet.create({
    mapView: {
        flex: 0.95,
        backgroundColor: 'gray'
    },
    promptTargetArea: {
        position: 'absolute',
        top: Metrics.height * 0.05,
        left: Metrics.width * 0.07,
        right: Metrics.width * 0.2,
        backgroundColor: 'rgba(84,65,65,1)',
        paddingBottom: Metrics.height * 0.04,
        paddingLeft: Metrics.width * 0.01,
        borderRadius: 10

    },
    textColor:{
        color: 'white'
     },
     distanceToTarget:{
        position: 'absolute',
        bottom: Metrics.height * 0.05,
        left: Metrics.width * 0.3,
        right: Metrics.width * 0.1,
        backgroundColor: 'rgba(84,65,65,0.8)',
        paddingBottom: Metrics.height * 0.04,
        paddingLeft: Metrics.width * 0.01,
        borderRadius: 10
     }
})

export default styles