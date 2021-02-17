import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from "./MyButton"

class Main extends Component {
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

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ fontSize: 60, textAlign: "center" }}>NY Bikes App</Text>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>firebase authentication</Text>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>firebase database</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <MyButton name="Start" fun={this.changeNavigate} />
                </View>
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


export default Main;

