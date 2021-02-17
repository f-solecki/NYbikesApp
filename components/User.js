import React, { Component } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text, Alert } from 'react-native';
import firebase from "firebase"
import Station from './Station'
import { TouchableOpacity } from 'react-native-gesture-handler';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            dane: []
        };
        this.stations = this.getFirebase().child("stations_big") // "stations" to nazwa tablicy w obiekcie jsona
    }
    getFirebase() {
        return firebase.database().ref()
    }

    componentDidMount = () => {
        this.stations.on("value", (elements) => {
            let temp = []
            elements.forEach((item) => {
                let val = item.val()
                let tab = [val.latitude, val.longitude, val.availableBikes, val.availableDocks, val.stationName, val.statusValue, val.totalDocks]
                temp.push(tab)
            })
            this.setState({
                dane: temp,
                loaded: true
            })

        })
    }

    toMap = (lat, long, station) => {
        this.props.navigation.navigate("Map", { lat: lat, long: long, station: station })
    }
    logOut = () => {
        firebase.auth()
            .signOut()
            .then(() => Alert.alert("LogOut", "You succesfully logged out."))
            .catch((error) => alert(error))
    }
    toMain = () => {
        this.props.navigation.navigate("Main")
    }

    render() {
        console.ignoredYellowBox = ['Setting a timer'];

        return (
            this.state.loaded ?
                <View style={styles.container}>
                    <Text style={{ color: 'orange', marginBottom: 5 }}>Witaj {this.props.route.params.mail}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ margin: 5 }} onPress={this.toMain}>
                            <Text style={{ fontWeight: 'bold' }}>MAIN PAGE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 5 }} onPress={this.logOut}>
                            <Text style={{ fontWeight: 'bold' }}>LOGOUT</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={this.state.dane}
                        renderItem={({ item }) => <Station fun={this.toMap} data={item} />}
                        keyExtractor={item => item.stationName}
                        key={item => item.longitude + item.latitude}
                    />
                </View>
                : <ActivityIndicator size='large' color='orange' />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

})


export default User;

