import * as React from 'react'
import { Button } from 'react-native-paper'
import { TimePickerModal } from 'react-native-paper-dates'

export default function TimeSelector() {
  var today = new Date();
  var hour;
  const [visible, setVisible] = React.useState(false)
  const [StartPressed, setStartPressed] = React.useState(false)
  const [EndPressed, setEndPressed] = React.useState(false)

  if (StartPressed) {
    hour = today.getHours();
  }
  else if (EndPressed) {
    hour = today.getHours() + 1;
  }

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
      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={hour} // default: current hours
        minutes={today.getMinutes()} // default: current minutes
        // am_pm = "pm" // default: 'pm'
        label="Select time" // optional, default 'Select time'
        cancelLabel="Cancel" // optional, default: 'Cancel'
        confirmLabel="Ok" // optional, default: 'Ok'
        animationType="fade" // optional, default is 'none'
        locale={'en'} // optional, default is automically detected by your system
      />
      <Button onPress={() => { setVisible(true), setStartPressed(true), setEndPressed(false)}}>
        Start Time
      </Button>
      <Button onPress={() => { setVisible(true), setEndPressed(true), setStartPressed(false)}}>
        End Time
      </Button>
    </>
  )
}
