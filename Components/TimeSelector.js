import React, { Component } from 'react';
import { Button } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

class TimeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            hours: null,
            minutes: null,
            visible: false,
        }
        this.now = new Date();
        this.hours = this.now.getHours();
        this.minutes = this.now.getMinutes();
        this.onDismiss = this.onDismiss.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    onDismiss() {
        this.setState({visible: false});
    }

    onConfirm(params) {
        console.dir(params);
        this.setState({hours: params.hours, minutes: params.minutes, visible: false});
        //YYYY-MM-DDTHH:MM:SSZ
        let hours = params.hours;
        let minutes = params.minutes;
        console.log(`hours: ${hours}, minutes: ${minutes}`);
        if (hours < 10) {
            if (minutes < 10) {
                this.props.getTimeCallback(`2021-02-21T0${hours}:0${minutes}:00Z`);
            } else {
                // hours < 10, minutes >= 10
                this.props.getTimeCallback(`2021-02-21T0${hours}:${minutes}:00Z`);
            }
        } else {
            if (minutes < 10) {
                this.props.getTimeCallback(`2021-02-21T${hours}:0${minutes}:00Z`);
            } else {
                this.props.getTimeCallback(`2021-02-21T${hours}:${minutes}:00Z`);
            }
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <TimePickerModal
                    visible={this.state.visible}
                    onDismiss={this.onDismiss}
                    onConfirm={this.onConfirm}
                    hours={this.hours} // default: current hours
                    minutes={this.minutes} // default: current minutes
                    // am_pm = "pm" // default: 'pm'
                    label="Select time" // optional, default 'Select time'
                    cancelLabel="Cancel" // optional, default: 'Cancel'
                    confirmLabel="Ok" // optional, default: 'Ok'
                    animationType="fade" // optional, default is 'none'
                    locale={'en'} // optional, default is automically detected by your system
                />

                <TouchableOpacity style={styles.button} onPress={() => {this.setState({visible: true})}}>
                    <Text style={styles.buttonText}>{this.props.buttonText}</Text>
                </TouchableOpacity>
            </View>
        );
    }


}

TimeSelector.propTypes = {
    getTimeCallback: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: '5%',
        width: '90%',
        height: '20%',

    },

    button: {
        height: '100%',
        width: '90%',
        backgroundColor: 'blue',
        borderRadius: 20,
        justifyContent: 'center',
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    }

});

export default TimeSelector;