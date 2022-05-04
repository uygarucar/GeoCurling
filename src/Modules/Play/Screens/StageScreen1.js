import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Platform} from 'react-native';
import MapView, {ProviderPropType, Marker, AnimatedRegion} from 'react-native-maps';



class StageScreen extends React.Component {
    constructor(props) {
        super(props);
        this.marker = null;

        this.state = {
            coordinate: new AnimatedRegion({
                latitude: 32.5983,
                longitude: 44.0175,
                latitudeDelta: 0.012,
                longitudeDelta:0.012,
            }),
        };
    }

    animateMarker() {

        var newCoordinate = {
            latitude: 32.601,
            longitude: 44.0172,
            latitudeDelta: 0.012,
            longitudeDelta: 0.012,
        };

        if (Platform.OS === 'android') {
            if (this.marker) {
                this.marker.animateMarkerToCoordinate(newCoordinate,4000);//  number of duration between points
            }
        } else {
            this.state.coordinate.timing(newCoordinate).start();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={this.props.provider}
                    style={styles.map}
                    initialRegion={{
                        latitude: 32.5983,
                        longitude: 44.0175,
                        latitudeDelta: 0.012,
                        longitudeDelta: 0.012,
                    }}
                >
                    <Marker.Animated
                        ref={marker => {
                            this.marker = marker;
                        }}
                        coordinate={this.state.coordinate}
                    />
                </MapView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => this.animateMarker()}
                        style={[styles.bubble, styles.button]}
                    >
                        <Text>Animate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
StageScreen.propTypes = {provider: ProviderPropType,};


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});

export default StageScreen;