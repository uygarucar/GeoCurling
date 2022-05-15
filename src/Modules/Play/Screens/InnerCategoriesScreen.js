import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler';
import TopicsItem from '../Components/TopicsItem';

const subCategories = {

}


const InnerCategoriesScreen = (props) => {
const navigation = useNavigation();
const itemId= props.route.params?.itemId;
const goToPlayScreen = (props) => {
    navigation.navigate("play-screen", {itemId: itemId}) 
}

    return (
        <View>
            <TouchableOpacity
                onPress={goToPlayScreen}
            >
                <Text>Inner Categories</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InnerCategoriesScreen