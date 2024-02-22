import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button, Image, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Voice from '@react-native-voice/voice';
// Mock data for tasks
const tasksData = [
  {
    id: '1',
    title: 'Aircraft marshalling',
    // imageUri: 'path_to_marshalling_image',
    completed: false
  },
  {
    id: '2',
    title: 'GPU Connection',
    imageUri: 'path_to_gpu_image',
    completed: false
  },
  // ... more tasks
];

const TaskItem = ({ title, imageUri, completed }) => (
  <View style={styles.taskItem}>
    <Text style={styles.taskTitle}>{title}</Text>
    <TouchableOpacity style={completed ? styles.taskButtonCompleted : styles.taskButton}>
      <Text style={styles.taskButtonText}>{completed ? 'Completed' : 'Validate'}</Text>
    </TouchableOpacity>
  </View>
);

const PlanningScreen = () => {
  let [started, setStarted] = useState(false);
  let [results, setResults] = useState([]);

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  }, []);

  const startSpeechToText = async () => {
    await Voice.start("en-NZ");
    setStarted(true);
  };

  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarted(false);
  };

  const onSpeechResults = (result) => {
    setResults(result.value);
  };

  const onSpeechError = (error) => {
    console.log(error);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#003366" />
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Tâches vol AF7652</Text>
        </View>
      </View>
      <View style={styles.headerCenter2}>
          <Text style={styles.timer}>02:01:48</Text>
      </View>
      <View>
        {!started ? <Button title='Start Speech to Text' onPress={startSpeechToText} /> : undefined}
        {started ? <Button title='Stop Speech to Text' onPress={stopSpeechToText} /> : undefined}
        {results.map((result, index) => <Text key={index}>{result}</Text>)}
      </View>
      <View style={{flexDirection: 'row', width: '100%', marginTop: 30}}>
        <View style={{flexDirection: 'row',  width: '50%', justifyContent: 'center', borderBottomWidth: 2, borderBottomColor: "#003366", paddingBottom: 3}}>
            <Text style={{marginRight: 15, fontWeight: 'bold'}}>Arrivée</Text>
            <Icon name="flight-takeoff" size={24} color="#003366" />
        </View>
        <View style={{flexDirection: 'row', width: '50%', justifyContent: 'center'}}>
            <Text style={{marginRight: 15, fontWeight: 'bold'}}>Départ</Text>
            <Icon name="flight-takeoff" size={24} color="#003366" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  headerCenter: {
    alignItems: 'center',
  },
  headerCenter2: {
    alignItems: 'center',
    backgroundColor: '#003366',
    width: '70%',
    height: 50,
    padding: 10,
    borderRadius: 15,
    marginTop: 25,
    left: "15%"
  },
  headerTitle: {
    marginTop: 0,
    marginLeft: 15,
    color: '#003366',
    fontSize: 18,
    fontWeight: 'bold',
  },
  timer: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  tasksList: {
    backgroundColor: '#e8e8e8',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  taskImage: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 25,
  },
  taskTitle: {
    flex: 1,
    color: '#333',
    fontSize: 16,
  },
  taskButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#0057D9',
    borderRadius: 5,
  },
  taskButtonCompleted: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  taskButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

});

export default PlanningScreen;
