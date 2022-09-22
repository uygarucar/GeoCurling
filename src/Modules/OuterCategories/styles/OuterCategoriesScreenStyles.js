import React from 'react'
import { StyleSheet } from 'react-native'
import { Metrics, Fonts } from '../../../StylingConstants'

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    container: {
        flex: 1,
        padding: Metrics.marginHorizontal,
        justifyContent: 'center'
    },
    flatList: {
        flexGrow: 0.8,
        

    },
    scrollview:{
        flex: 0.8,
        backgroundColor: 'blue'
    },
    buttonContainer: {
        alignItems: 'center',
        flex: 0.8,
        justifyContent: 'space-evenly',
        
    },
    touchable: {
        backgroundColor: '#7997DE',
        borderRadius: Metrics.width * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
        width: Metrics.width * 0.7,
        height: Metrics.height * 0.06,
    },
    text: {
        fontFamily: Fonts.type.semibold,
        fontSize: Fonts.size(16),
        color: 'white',
        flex: 0.85
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    itemTouchable: {
        marginVertical: Metrics.width * 0.02,
        paddingVertical: Metrics.width * 0.02,
    },
    itemText: {
        fontFamily: Fonts.type.medium,
        fontSize: Fonts.size(16),
    },
})

export default styles