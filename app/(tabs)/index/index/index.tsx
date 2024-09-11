import RouteDisplayPage from '@/components/RouteDisplayPage';
import { taskApi } from '@/expressApi/src/api/TaskApi';
import { Task } from '@/expressApi/src/generated';
import { useIsFocused } from '@react-navigation/native';
import { Link } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, View, StyleSheet, Button, Text } from 'react-native';

const PageForTab1Stack1 = () => {
    const [taskList, setTaskList] = useState<Task[]>([]);

    // tab1stack1 が表示されたタイミングでtaskListを全件取得
    const isFocused = useIsFocused();
    useEffect(() => {
        if (!isFocused) {
            return;
        }
        console.log('get all task');
        getAllTask();
    }, [isFocused]);

    const getAllTask = async () => {
        const taskList: Task[] = await taskApi.taskList.listupTask();
        setTaskList(taskList);
    }

    // FlatList リスト画面のスクロール
    const list = useRef<FlatList<Task>>(null);

    const pressScrollEnd = () => {
        list.current?.scrollToEnd({ animated: true });
    };

    const pressScrollStart = useCallback(() => {
        if (taskList.length > 0) {
            list.current?.scrollToIndex({ animated: true, index: 0, viewOffset: 60 });
        }
    }, [taskList]);

    // FlatList
    const header = () => {
        return (
            <View>
                {/* <Button onPress={() => getAllTask()} title="Get all task" /> */}
                <Button onPress={() => pressScrollEnd()} title="Go to end" />
            </View>
        );
    };

    const renderItem = ({ item }: { item: Task }) => {
        return (
            <Link
                href={{ pathname: '/stack2', params: { id: item.id }, }}
                style={styles.taskItem} >
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
                <Text>{item.limit}</Text>
                <Text>{item.done ? '完了' : '未完了'}</Text>
            </Link>
        );
    };

    const endComponent = () => {
        return (
            <View>
                <Button onPress={() => pressScrollStart()} title="Go to start" />
            </View>
        );
    };
    
    const separator = () => {
        return (
            <View style={{ borderBottomWidth: 1, height: 7 }} />
        );
    };

    return (
        <>
            <Text style={styles.titleText}>Task List</Text>
            {/* <RouteDisplayPage componentName='PageForTab1Stack1' /> */}
            <View style={styles.taskList}>
                <FlatList
                    ref={list}
                    ListHeaderComponent={header}
                    data={taskList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id + item.title}
                    ItemSeparatorComponent={separator}
                    ListFooterComponent={endComponent} />
            </View>
        </>
    );
};
export default PageForTab1Stack1;

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    taskList: {
        marginVertical: 20,
        marginHorizontal: 15,
        maxHeight: 600,
    },
    taskItem: {
        marginTop: 7,
    },
});
