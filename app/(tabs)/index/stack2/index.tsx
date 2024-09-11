import { taskApi } from '@/expressApi/src/api/TaskApi';
import { SaveTask, Task } from '@/expressApi/src/generated';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

const PageForTab1Stack2 = () => {
    const params = useLocalSearchParams();
    const router = useRouter();

    const { id = 0 } = params;
    const [taskTitle, onChangeTaskTitle] = useState('');
    const [taskLimit, onChangeTaskLimit] = useState('');
    const [taskDone, onChangeTaskDone] = useState(false);

    useEffect(() => { getOneTask() }, []);

    const getOneTask = async () => {
        const oneTask: Task = await taskApi.taskList.getTask(+id);
        if (oneTask == undefined) {
            return;
        }
        onChangeTaskTitle(oneTask.title);
        onChangeTaskLimit(oneTask.limit);
        onChangeTaskDone(oneTask.done);
        console.log(oneTask);
    }

    // API：idが一致するtaskを更新
    const saveTask: SaveTask = {
        title: taskTitle,
        limit: taskLimit,
        done: taskDone,
    };
    const onPressTaskUpdate = async () => {
        const updateTask: Task[] = await taskApi.taskList.updateTask(+id, saveTask);
        router.back();
    };

    const onPressTaskDelete = () => {
        Alert.alert('確認！', 'タスクを削除しますか？', [
            {
                text: 'OK',
                onPress: () => deleteTask(),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('delete Cancel'),
            },
        ]);
    }

    // API：idが一致するtaskを削除
    const deleteTask = async () => {
        const deleteTask: Task = await taskApi.taskList.deleteTask(+id);
        router.back();
    }

    return (
        <>
            {/* <RouteDisplayPage componentName='PageForTab1Stack2' /> */}

            <View>
                <Text style={styles.idText}>id: {id}</Text>
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

            <Text onPress={onPressTaskUpdate} style={styles.updateButton}>
                update
            </Text>
            <Text onPress={onPressTaskDelete} style={styles.deleteButton}>
                delete
            </Text>
        </>
    );
};
export default PageForTab1Stack2;

const styles = StyleSheet.create({
    idText: {
        margin: 20
    },
    input: {
        height: 40,
        minWidth: 300,
        margin: 5,
        borderWidth: 1,
        padding: 10,
    },
    updateButton: {
        marginTop: 30,
        marginHorizontal: 60,
        padding: 5,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        backgroundColor: '#0f6afc',
        borderRadius: 20,
    },
    deleteButton: {
        marginTop: 30,
        marginHorizontal: 60,
        padding: 5,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        backgroundColor: '#ed3511',
        borderRadius: 20,
    },
});
