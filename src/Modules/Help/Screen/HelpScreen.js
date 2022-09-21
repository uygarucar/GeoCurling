import React from "react"
import { View, Text } from "react-native"
import { Image } from "react-native"
import MyImage from "../../../Assets/Images/AdjustingDirectionMarker.png"
import { Metrics } from "../../../StylingConstants"
import StoneImage from '../../../Assets/Images/stoneImage.png'
import stylesHelp from '../Styles/styles'
import kalanMesafe from '../../../Assets/Images/kalanMesafe.png'
const HelpScreen = () => {


    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>

            <Text style={{ alignSelf: 'center' }}>
                Kırmızı taşı, oyunun sol üst tarafında
            </Text>
            <Text style={{ alignSelf: 'center' }}>
                tarif edilen hedefe götürmelisin.
            </Text>

            <Image
                style={{ alignSelf: 'center' }}
                source={StoneImage}
            />


            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: stylesHelp.hairlineWidth
                }}
            />
            <Text style={{ alignSelf: 'center' }}>Taşın tam ortasında yer alan </Text>
            <Text style={{ alignSelf: 'center' }}>simgeye basılı tutup</Text>
            <Text style={{ alignSelf: 'center' }}>simgeyi sürüklemelisiniz</Text>

            <View style={{ alignSelf: 'center', marginVertical: Metrics.height * 0.02 }}>
                <Image
                    source={MyImage}
                />
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: stylesHelp.hairlineWidth
                }}
            />
            <Text style={{ alignSelf: 'center' }}>Taşın gideceği yönü belirleyen</Text>
            <Text style={{ alignSelf: 'center' }}>renkli bir çubuk çıkacaktır</Text>


            <Text style={{ alignSelf: 'center', marginTop: Metrics.height * 0.04 }}>Ayarlamanızı yaptıktan sonra</Text>
            <Text style={{ alignSelf: 'center' }}>taşı hareket ettirmek için</Text>
            <Text style={{ alignSelf: 'center' }}>kırmızı renkli taşın üzerine</Text>
            <Text style={{ alignSelf: 'center' }}>bir kez dokunun</Text>

            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: stylesHelp.hairlineWidth
                }}
            />
            <Text style={{ alignSelf: 'center' }}>Tecrübeniz ve</Text>
            <Text style={{ alignSelf: 'center' }}> kalan mesafe bilgisi</Text>
            <Text style={{ alignSelf: 'center' }}>en büyük yardımcınız</Text>

            <Image
            style={{alignSelf: 'center', marginVertical:Metrics.height*0.01}}
            source={kalanMesafe}/>
        </View>
    )
}

export default HelpScreen