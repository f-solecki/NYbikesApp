import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import firebase from "firebase"



const config = {
    apiKey: "AIzaSyCAL--AvzYJx5755vEoWrhVdmxYbwpCX6I",
    authDomain: "solecki4ib2.firebaseapp.com",
    databaseURL: "https://solecki4ib2.firebaseio.com",
    projectId: "solecki4ib2",
    storageBucket: "solecki4ib2.appspot.com",
    messagingSenderId: "95966881402",
    appId: "1:95966881402:web:fd90ab6b4be91dff45bdc3",
    measurementId: "G-VCQHJK62ZD"
};

firebase.initializeApp(config);

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                this.props.navigation.navigate("User", { mail: this.props.route.params.mail })
            }
            else {
                this.props.navigation.navigate("LogIn")

            }


        })
    }

    render() {
        console.ignoredYellowBox = ['Setting a timer'];

        return (
            <View style={styles.container}>
                <Text>Authenticating</Text>
                <ActivityIndicator size="large" color="#ffa500" />
            </View>

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


export default LogIn;

