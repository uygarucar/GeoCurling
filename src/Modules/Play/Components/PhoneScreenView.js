import React from 'react'
import {View, Text} from 'react-native'
import { currentLatitudeSelector } from '../Redux/CurrentLatitudeRedux';
import { currentLongitudeSelector } from '../Redux/CurrentLongitudeRedux';
import { useSelector } from 'react-redux';
import MapConfig from './MapConfig';
import styles from '../styles/StageScreenStyles';
import Target_Prompt from './PromptTargetInfo';
import DistanceToTarget_Prompt from './DistanceToTargetInfo';
import { arrowVisibilitySelector } from '../Redux/ArrowVisibilityRedux';


const PhoneScreenView = (props) => {
    console.log("PhoneScreenView:1")
    const initialLatitude = props.initialLatitude;
    const initialLongitude= props.initialLongitude;

    const currentLatitude= useSelector(currentLatitudeSelector)
    const currentLongitude= useSelector(currentLongitudeSelector)
    const arrowVisibility= useSelector(arrowVisibilitySelector)
    console.log("PhoneScreenView:2")
    
    
    return(
        <View style={{flex:1}}>
            <View style={{ flex: 0.05 }} />
            <MapConfig
                style={styles.mapView}
                stoneLatitude={currentLatitude}
                stoneLongitude={currentLongitude}
                initialLatitude={initialLatitude}
                initialLongitude={initialLongitude}
                arrowVisibility={arrowVisibility}
            />
            <Target_Prompt/>
            <DistanceToTarget_Prompt
                stoneLatitude={currentLatitude}
                stoneLongitude={currentLongitude}
            />
        </View>
    )
}

export default PhoneScreenView