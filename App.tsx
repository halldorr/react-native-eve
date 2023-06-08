import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [characterName, setCharacterName] = useState<string>('');

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter your character name"
        onChangeText={(text) => setCharacterName(text)}
      />
      <Button title="Search" onPress={() => setCharacterName('Jeff!')} ></Button>
      <View><ExampleComponent title={characterName} /></View>
    </View>
  );
}

type ExampleComponentProps = {
  title: string;
};

const ExampleComponent = ({ title }: ExampleComponentProps) => {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 20,
    padding: 10
},
input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
},
});