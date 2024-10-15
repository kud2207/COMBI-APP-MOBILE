import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";
type ModalLoginUPProps ={
    name:string
    secondName: string,
    phoneNumber: string,
    password :string,
    visibleModal :boolean
}

const ModalLoginUP = ({
  name,
  secondName,
  phoneNumber,
  password,
  visibleModal
}:ModalLoginUPProps) => {
  const [visible, setVisible] = React.useState(visibleModal);

  const hideDialog = () => setVisible(false);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Icon icon="account-check" size={50} />
        <Dialog.Title style={styles.title}>
          Do you want to save this data?
        </Dialog.Title>
        <Dialog.Content>
          <View style={styles.contenaireData}>
            <Text variant="bodyMedium" style={styles.labelText}>Name:</Text>
            <Text style={styles.dataText}>{name}</Text>
          </View>
          <View style={styles.contenaireData}>
            <Text variant="bodyMedium" style={styles.labelText}>Second Name:</Text>
            <Text style={styles.dataText}>{secondName}</Text>
          </View>
          <View style={styles.contenaireData}>
            <Text variant="bodyMedium" style={styles.labelText}>Phone Number:</Text>
            <Text style={styles.dataText}>{phoneNumber}</Text>
          </View>
          <View style={styles.contenaireData}>
            <Text variant="bodyMedium" style={styles.labelText}>Password:</Text>
            <Text style={styles.dataText}>{password}</Text>
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => console.log("Cancel")}>Cancel</Button>
          <Button onPress={() => console.log("Ok")}>Yes</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 18, 
  },
  contenaireData: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5, 
  },
  labelText: {
    fontSize: 16, 
    
  },
  dataText: {
    fontSize: 16, 
    fontWeight: 'bold', 
  },
});

export default ModalLoginUP;
