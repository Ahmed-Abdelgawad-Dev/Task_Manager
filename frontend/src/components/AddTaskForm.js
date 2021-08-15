import React, {useState} from 'react';
import {
  FormControl, FormLabel, Input, Button, Container, Center
}
from "@chakra-ui/react";

const AddTaskForm = () => {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('handle submit', value);
    };
    return (
        <Container>
            <FormControl onSubmit={handleSubmit} >
                    <FormLabel fontWeight="bold" color="blue">Enter a task: </FormLabel>
                <Input
                    type="text"
                    placeholder="Enter a task"
                    value={value}
                    onChange={(e) =>
                        setValue(e.target.value)}
                />
                <Button type="submit" colorScheme="blue">Add</Button>
                </FormControl>
        </Container>
    )
};

export default AddTaskForm;