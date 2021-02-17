import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <TouchableOpacity onPress={this.props.fun} style={{
                marginTop: 5,
                borderRadius: 10,
                height: 30,
                justifyContent: "center",
                alignSelf: "center",
            }}>
                <Text style={{
                    textAlign: "center",
                    fontWeight: 'bold',
                    color: "black",
                    fontSize: 20
                }}>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}
MyButton.propTypes = {
    name: PropTypes.string.isRequired,
    fun: PropTypes.func.isRequired,
};


export default MyButton;