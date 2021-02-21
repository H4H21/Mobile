import * as React from 'react'
import { Button } from 'react-native-paper'
import { DatePickerModal } from 'react-native-paper-dates'

export default function DateSelector() {
    // var today = new Date();
    // var hour;
    const date = new Date();
    const [visible, setVisible] = React.useState(false)
    // const [StartPressed, setStartPressed] = React.useState(false)
    // const [EndPressed, setEndPressed] = React.useState(false)

    // if (StartPressed) {
    //     hour = today.getHours();
    // }
    // else if (EndPressed) {
    //     hour = today.getHours() + 1;
    // }

    const onDismiss = React.useCallback(() => {
        setVisible(false)
    }, [setVisible])

    const onConfirm = React.useCallback(
        ({ hours, minutes }) => {
            setVisible(false);
            console.log({ hours, minutes });
        },
        [setVisible]
    );

    return (
        <>
            <DatePickerModal
                mode="single"
                visible={visible}
                onDismiss={onDismiss}
                onConfirm={onConfirm}
                date={date} // default: current hours
                // minutes={today.getMinutes()} // default: current minutes
                // am_pm = "pm" // default: 'pm'
                label="Select time" // optional, default 'Select time'
                saveLabel="Save" // optional
                label="Select date" // optional
                animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
            />
            <Button onPress={() => { setVisible(true) }}>
                Pick date
            </Button>
        </>
    )
}
