import React, { useState, useEffect } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

const MyDatePicker = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState(false);

  // Utiliser useEffect pour log ou toute action supplémentaire après la mise à jour de la date
  useEffect(() => {
    if (!show) {
      // Si le picker est fermé et que la date est à jour, tu peux utiliser date ici
      console.log("Date mise à jour pour la base de données :", date);
      // Ici tu peux appeler ton API pour sauvegarder la date dans la BD
      // saveDateToDatabase(date); // Exemple de fonction pour sauvegarder
    }
  }, [date, show]);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); 

    // Récupère uniquement la date sans l'heure et met à jour l'état
    const onlyDate = new Date(currentDate.setHours(0, 0, 0, 0));
    setDate(onlyDate); // La mise à jour de la date est assurée ici

    console.log("Nouvelle date choisie :", onlyDate); // Affiche la nouvelle date dans la console
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View>
      <Button onPress={showDatepicker} title="Show Date Picker" />
      {show && (
        <DateTimePicker
          value={date}
          mode="date" 
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default MyDatePicker;
