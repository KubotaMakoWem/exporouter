import RouteDisplayPage from '@/components/RouteDisplayPage';
import { taskApi } from '@/expressApi/src/api/TaskApi';
import { SaveTask, Task } from '@/expressApi/src/generated';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Switch, Text, TextInput, View, StyleSheet, Button } from 'react-native';

const PageForTab2 = () => {
    
    const [taskTitle, onChangeTaskTitle] = useState('');
    const [taskLimit, onChangeTaskLimit] = useState('');
    const [taskDone, onChangeTaskDone] = useState(false);

    const initTaskInfo = () => {
        onChangeTaskTitle('');
        onChangeTaskLimit('');
        onChangeTaskDone(false);
    }

    const isFocused = useIsFocused();
    useEffect(() => {
        if (!isFocused) {
            return;
        }
        initTaskInfo();
    }, [isFocused]);

    const saveTask: SaveTask = {
        title: taskTitle,
        limit: taskLimit,
        done: taskDone,
    };
    const onPressTaskCreate = async () => {
        const newTask: Task = await taskApi.taskList.createTask(saveTask);
        initTaskInfo();
    }

    return (
        <View style={styles.container}>
            {/* <RouteDisplayPage componentName='PageForTab2' /> */}
            <Text style={styles.titleText}>Create New Task</Text>

            <View style={styles.inputItems}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTaskTitle}
                    value={taskTitle}
                    placeholder='title'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTaskLimit}
                    value={taskLimit}
                    placeholder='limit'
                />
                <Switch
                    onValueChange={onChangeTaskDone}
                    value={taskDone}
                />
            </View>

            <Button onPress={onPressTaskCreate} title='create' />
        </View>
    );
};
export default PageForTab2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    inputItems: {
        marginVertical: 30,
    },
    input: {
        height: 40,
        minWidth: 300,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
    },
});
