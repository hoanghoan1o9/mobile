/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {


  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <View style={styles.text1}>
          <Text>1</Text>
        </View>
        <View style={styles.text2}>
          <Text>2</Text>
        </View>
        <View style={styles.text3}>
          <Text>3</Text>
        </View>
      </View>
      <View style={styles.view2}>
        <View style={styles.text4}>
          <Text>4</Text>
        </View>
        <View style={styles.text5}>
          <Text>5</Text>
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.text6}>
          <Text>6</Text>
        </View>
        <View style={styles.text7}>
          <Text>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  view1: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view2: {
    flex:2,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  view3: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  text1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#03ffff',
  },
  text2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#ff00ff',
  },
  text3: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#ffff02',
  },
  text4: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: 'red',
  },
  text5: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: 'green',
  },
  text6: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: 'white',
  },
  text7: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: 'blue',
  },
});

export default App;
