import React, { useState } from 'react'
import { SafeAreaView, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';


const HomeScreen = ({navigation}) => {
    
    const [tasks, setTasks] = useState(
        [
        'Do laundry',
        'Go to gym',
        'Walk dog'
        ]
      );
    
      const addTask = (task) => {
        setTasks([...tasks, task]);
      };
    
      const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
      };

    return (
      <MainLayout>
        <SafeAreaView>
        <ToDoList tasks = {tasks} deleteTask = {deleteTask}/>
        <ToDoForm addTask={addTask}/>
        </SafeAreaView>
        <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
      </MainLayout>
    );
    
}


export default HomeScreen
