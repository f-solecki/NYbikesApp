import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import MyButton from './MyButton'
import firebase from 'firebase'

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMessage: ""
        };
    }

    changeNavigateExisting = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate("Loading", { mail: this.state.email }))
            .catch(error => this.setState({ errorMessage: error.message }))

    }
    changeNavigateNotExisting = () => {
        this.props.navigation.navigate("Register")
    }

    onChangeEmailText = (text) => {
        this.setState({
            email: text
        })
    }

    onChangePasswordText = (text) => {
        this.setState({
            password: text
        })
    }

    render() {
        console.ignoredYellowBox = ['Setting a timer'];

        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                    source={require('./../img/bikes.jpg')}
                />
                <Text style={{ textAlign: 'center', color: 'red' }}>{this.state.errorMessage}</Text>
                <TextInput
                    style={{ height: 40, width: 250, borderColor: 'gray', borderBottomWidth: 1 }}
                    onChangeText={text => this.onChangeEmailText(text)}
                    placeholder="Email"
                    value={this.state.email}
                />
                <TextInput
                    style={{ height: 40, width: 250, borderColor: 'gray', borderBottomWidth: 1, marginBottom: 20, marginTop: 10 }}
                    onChangeText={text => this.onChangePasswordText(text)}
                    secureTextEntry={true}
                    placeholder="Hasło"
                    value={this.state.password}
                />
                <TouchableOpacity style={{ marginBottom: 10 }}
                    onPress={this.changeNavigateExisting} >
                    <Text style={styles.button}>Zaloguj się</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.changeNavigateNotExisting} >
                    <Text style={styles.button}>Nie masz konta? Zarejestruj się</Text>
                </TouchableOpacity>
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
    button: {
        fontWeight: 'bold',
        fontSize: 20
    }
})


export default LogIn;

