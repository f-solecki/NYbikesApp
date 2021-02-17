import React, { Component } from 'react';
import { View, Button, Image, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import MyButton from './MyButton'
import firebase from "firebase"

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMessage: ""
        };
    }

    changeNavigate = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate("Loading", { mail: this.state.email }))
            .catch(error => this.setState({ errorMessage: error.message }))
    }
    changeNavigateLogIn = () => {
        this.props.navigation.navigate("LogIn")
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
                <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
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
                <TouchableOpacity
                    style={{ marginBottom: 10 }}
                    onPress={this.changeNavigate}
                >
                    <Text style={styles.button}>Zarejestruj się</Text>
                </TouchableOpacity>
                <TouchableOpacity

                    onPress={this.changeNavigateLogIn}
                >
                    <Text style={styles.button}>Masz już konto? Zaloguj się</Text>
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


export default Register;

