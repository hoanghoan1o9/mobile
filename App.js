/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

const App = () => {

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) { setSubmitted(!submitted); }
    else {
      // Alert.alert('warning', 'the name must be longer than 3 characters', [
      //   { text: 'Do not show again', onPress: () => console.warn('Do not show again Pressed!') },
      //   { text: 'Cancel', onPress: () => console.warn('Cancel Pressed!') },
      //   { text: 'OK', onPress: () => console.warn('OK Pressed!') },
      // ], { cancelable: true, onDismiss: () => console.warn('Alert dismissed') })
      ToastAndroid.show('the name must be longer than 3 characters',
      ToastAndroid.LONG
      );
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='e.g Hoan'
        onChangeText={(value) => setName(value)}
      />
      {/* <Button
        title={submitted ? 'clear' : 'Submit'}
        onPress={onPressHandler}
        color='#00f'
      /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.2}
      >
        <Text style={styles.text}> {submitted ? 'clear' : 'Submit'}</Text>
      </TouchableOpacity>
      {submitted ?
        <Text style={styles.text}>
          You are registered as: {name}
        </Text>
        : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#00ff00',
    alignItems: 'center',
  },
});

export default App;
