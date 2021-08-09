/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setCount((prevState) => { return prevState + 1; });
    setCount((prevState) => { return prevState + 1; });

  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>you click {count} times</Text>
      <Button title="click" onPress={onClickHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },

});

export default App;
