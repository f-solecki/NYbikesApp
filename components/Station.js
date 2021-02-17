import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;

class Station extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    toMap = () => {
        this.props.fun(this.props.data[0], this.props.data[1], this.props.data[4])
    }

    render() {
        console.ignoredYellowBox = ['Setting a timer'];

        let oneDock = 150 / this.props.data[6]
        return (
            <View style={styles.container}>

                <View style={styles.up}>
                    <View style={styles.left}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{this.props.data[4]}</Text>
                        <Text>lat: {this.props.data[0].toString().slice(0, 10)}</Text>
                        <Text>lng: {this.props.data[1].toString().slice(0, 10)}</Text>
                        <Text>razem stacji: {this.props.data[6]}</Text>
                    </View>
                    <View style={styles.right}>
                        <View style={styles.wykresy}>
                            <View style={styles.gora}>
                                <View style={{
                                    height: 25,
                                    width: (this.props.data[2] * oneDock),
                                    backgroundColor: 'black'
                                }}>
                                    <Text style={{ color: 'white', textAlign: 'center' }}>R</Text>
                                </View>
                                <View style={{
                                    height: 25,
                                    width: (150 - this.props.data[2] * oneDock),
                                    backgroundColor: 'gray',
                                }}>
                                    <Text style={{ color: 'white', textAlign: 'center' }}>S</Text>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: this.props.data[5] == "In Service" ? 'orange' : 'green',
                                width: 150,
                                height: 25,
                            }}>
                                <Text style={{ textAlign: 'center', color: 'white' }}>
                                    {this.props.data[5] == "In Service" ? "W NAPRAWIE" : "DOSTĘPNA"}</Text>
                            </View>
                        </View>
                    </View>
                </View>



                <View style={styles.down}>
                    <TouchableOpacity onPress={this.toMap}>
                        <Text style={{ fontWeight: 'bold' }}>MAPA</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: windowWidth - 100,
        marginBottom: 5,
        backgroundColor: '#DFDFDF',
        borderRadius: 5
    },
    up: {
        width: windowWidth - 100,
        flex: 5,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: "row",
        margin: 5
    },
    down: {
        flex: 1,
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 5
    },


    right: {
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 20,

    },
    wykresy: {
        width: 150,
        height: 50,
        backgroundColor: "gray",
    },
    gora: {
        display: 'flex',
        flexDirection: 'row'
    },

})


export default Station;

