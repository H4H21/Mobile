import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, AsyncStorage} from 'react-native';

import { connect } from 'react-redux';
import {setUserName, setUserAddress} from "../actions";

class RegistrationScreen extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
        }
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.addressChangeHandler = this.addressChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    nameChangeHandler(name) {
        this.setState({name: name});
    }

    addressChangeHandler(address) {
        if (typeof address === "string") {
            this.setState({address: address});
        }
    }

    submitHandler() {
        if (this.state.name && this.state.address) {
            this.props.navigation.navigate("Home"); // Switch to home screen.
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <TextInput
                    key={0}
                    editable
                    maxLength={40}
                    placeholder="Insert name here"
                    placeholderTextColor="#73DC62"
                    onChangeText={this.nameChangeHandler}
                    style={styles.textInput}
                    onSubmitEditing={() => {
                        this.props.dispatch(setUserName(this.state.name));
                    }}
                />

                <TextInput
                    key={1}
                    editable
                    maxLength={40}
                    placeholder="Insert address here"
                    placeholderTextColor="#73DC62"
                    onChangeText={this.addressChangeHandler}
                    style={styles.textInput}
                    onSubmitEditing={() => {
                        this.props.dispatch(setUserAddress(this.state.address));
                    }}
                />

                <TouchableOpacity style={styles.continueButton} onPress={this.submitHandler}>
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>

            </View>
        );
    }

    componentWillUnmount() {
        AsyncStorage.setItem("name", this.state.name);
        AsyncStorage.setItem("address", this.state.address);
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        alignItems: 'center', // Center horizontally
        backgroundColor: '#73DC62',
        justifyContent: 'center', // Center vertically
    },
    textInput: {
        marginTop: '5%',
        backgroundColor: 'white',
        height: '10%',
        width: '90%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },

    continueButton: {
        marginTop: '10%',
        color: 'blue',
        backgroundColor: 'blue',
        height: '10%',
        width: '90%',
        justifyContent: 'center',

    },

    continueText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',

    }
})

export default connect()(RegistrationScreen);