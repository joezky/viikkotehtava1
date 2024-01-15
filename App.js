import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState({
    lower: 0,
    upper: 0,
  });

  function calculate() {
    const ageFloat = parseFloat(age.replace(',', '.'));

  if (!isNaN(ageFloat)) {
    const lowerLimit = (220 - ageFloat) * 0.65;
    const upperLimit = (220 - ageFloat) * 0.85;

    setLimits({
      lower: lowerLimit,
      upper: upperLimit,
    });
  } else {
    setLimits({
      lower: 0,
      upper: 0,
    });
  }
}
  return (
    <View style={styles.container}>
    <Text style={styles.field}>Age</Text>
    <TextInput style={styles.field} value={age} onChangeText={(text) => setAge(text)}
    keyboardType='decimal-pad'
    />
    <Text style={styles.field}>Limits</Text>
    <Text style={styles.field}>
      {limits.lower.toFixed(2)} - {limits.upper.toFixed(2)}
    </Text>
    <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  },
});