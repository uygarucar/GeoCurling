import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { addItem, deleteItem, subscribeToItemData, updateItem } from '../API/Firebase';
import { PlayScreen } from '../../Play/Screens/PlayScreen';

import styles from '../Styles/HomeScreenStyles';
import { useDispatch } from 'react-redux';
import { signOutRequest } from '../../Auth';


const dummy = [
    {
        id: 1,
        title: "Elma",
        isBought: false,
    },
    {
        id: 2,
        title: "Armut",
        isBought: true,
    },
]

const HomeScreen = props => {

    const dispatch = useDispatch();
    
    const _onPress_SignOut = () => {
        dispatch(signOutRequest());
    }
    const [itemList, setItemList] = useState(null);
    const [isDeleteModeOn, setIsDeleteModeOn] = useState(false);

    useEffect(() => {
        const off = subscribeToItemData(itemList => {
            setItemList(itemList)
        });

        return () => off();
    }, [])

    // Silme modu kapalıyken ekleme sayfasına götürsün
    // Silme modu açıkken de silme modunu kapatsın.
    const _onPress_GoToOuterCategories = () => {
        
            props.navigation.navigate('outer-categories-screen');
       
    }

    // Silme modu açıkken basılınca silinsin
    // Kapalıyken, edit sayfasına gitsin
    const _onPress_Edit = item => {
        if (isDeleteModeOn) {
            deleteItem(item.key)
        }
        else {
            // AddEditScreen'e item'in id'sini gönderiyoruz
            props.navigation.navigate('play-screen', {
                itemKey: item.key
            })
        }
    }

    // Alındı durumu tersine çevrilsin
    const _onLongPress_Item = item => {
        updateItem({
            ...item,
            isBought: !item.isBought,
        });
    }

    // Yeni ekle butonuna uzun basılınca silme modu açılsın
    const _onLongPress_Add = () => {
        setIsDeleteModeOn(true);
    }

    const _renderItem = ({ item }) => {
        // item'e basıldığında id'sini gönderiyoruz
        return (
            <TouchableOpacity
                style={styles.itemTouchable}
                onPress={() => _onPress_Edit(item)}
                onLongPress={() => _onLongPress_Item(item)}>
                <Text style={[styles.itemText, { color: item.isBought ? 'rgba(0,0,0,0.4)' : 'black' }]}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    const _ItemSeparator = () => {
        return <View style={styles.separator} />
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <FlatList
                    style={styles.flatList}
                    data={itemList}
                    renderItem={_renderItem}
                    keyExtractor={item => item.key}
                    ItemSeparatorComponent={_ItemSeparator}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.touchable}
                        onPress={_onPress_GoToOuterCategories}>
                        <Text style={styles.text}>
                            Oyna
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.touchable}
                        onPress={_onPress_SignOut}
                        >
                        <Text style={styles.text}>
                            Çıkış Yap
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
