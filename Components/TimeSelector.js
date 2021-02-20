





/* import * as React from 'react'
import { Button } from 'react-native-paper'
import { TimePickerModal } from 'react-native-paper-dates'

export default function TimeSelector() {
  const [visible, setVisible] = React.useState(false)
  const onDismiss = React.useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onConfirm = React.useCallback(
    ({ hours, minutes, am_pm }) => {
      setVisible(false);
      console.log({ hours, minutes, am_pm });
    },
    [setVisible]
  );


  return (
    <>
      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={12} // default: current hours
        minutes={14} // default: current minutes
        am_pm = "pm" // default: 'pm'
        label="Select time" // optional, default 'Select time'
        cancelLabel="Cancel" // optional, default: 'Cancel'
        confirmLabel="Ok" // optional, default: 'Ok'
        animationType="fade" // optional, default is 'none'
        locale={'en'} // optional, default is automically detected by your system
      />
      <Button onPress={()=> setVisible(true)}>
        Enter available time
      </Button>
    </>
  )
}
*/