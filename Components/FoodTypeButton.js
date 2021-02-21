import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

class FoodTypeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
        this.select = this.select.bind(this);
    }

    select() {
        this.setState({clicked: !this.state.clicked});
        this.props.changeCallback(this.props.foodType);
    }

    render() {
        if (this.state.clicked) {
            return (
                <View style={styles.wrapper}>
                    <TouchableOpacity style={styles.buttonPressed} onPress={this.select}>
                        <Text style={styles.labelPressed}>{this.props.foodType}</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.buttonUnpressed} onPress={this.select}>
                    <Text style={styles.labelUnpressed}>{this.props.foodType}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

FoodTypeButton.defaultProps = {
    isChecked: false,
}

FoodTypeButton.propTypes = {
    foodType: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    changeCallback: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    wrapper: {
        height: '5%',
        width: '90%',
        color: 'white',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: '5%',

    },

    buttonUnpressed: {
        height: '100%',
        width: '100%',
        color: 'white',
    },

    buttonPressed: {
        height: '100%',
        width: '100%',
        color: '#498B3F',
        borderRadius: 10,
        backgroundColor: '#498B3F',
    },

    labelUnpressed: {
        textAlign: 'center',
        color: '#73DC62',
        fontSize: 20,
        fontWeight: 'bold',
    },

    labelPressed: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default FoodTypeButton;