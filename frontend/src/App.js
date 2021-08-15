import React from 'react';
import styling from "./App.scss";
import AddTaskForm from "./components/AddTaskForm";
import {Center, Text} from '@chakra-ui/react';


const  App = () => {
  return (
      <div>
          <Center id='app-div' fontWeight='bold' bg="red" color='white' >
              <Text fontSize="6xl">Task Manager</Text>
          </Center>
          < AddTaskForm />
      </div>
  );
}
export default App;
