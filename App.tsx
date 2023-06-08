import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>('Press button to get names');
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.button}>        
          <Button title="Student 1" onPress={() => setName('Jeff')} ></Button>
        </View>
        <View style={styles.button}>        
          <Button title="Student 2" onPress={() => setName('Kshira')} ></Button>
        </View>
        <View style={styles.button}>        
          <Button title="Student 3" onPress={() => setName('JW')} ></Button>
        </View>
      </View>
      <View><ExampleComponent title={name} /></View>
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
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 20,
    padding: 10
},
});