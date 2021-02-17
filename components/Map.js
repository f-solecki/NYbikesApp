import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from "./MyButton"
import MapView from 'react-native-maps';


class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    changeNavigate = () => {
        this.props.navigation.navigate("LogIn")
    }

    render() {
        console.ignoredYellowBox = ['Setting a timer'];

        let title = this.props.route.params.station
        return (
            <View style={styles.container}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: this.props.route.params.lat,
                        longitude: this.props.route.params.long,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: this.props.route.params.lat,
                            longitude: this.props.route.params.long,
                        }}
                        title={title}
                    />
                </MapView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        backgroundColor: "orange",
        justifyContent: "center",
        flex: 1,
        alignItems: "center",

    }

})


export default Map;

