import { Stack } from 'expo-router/stack';

const LayoutForTab3 = () => {
    console.log(Date.now(), 'LayoutForTab3');
    return (
        <Stack initialRouteName='index/index'>
            <Stack.Screen
                name='index/index'
                options={{
                    title: 'Tab3Stack1',
                    headerShown: true
                }} />
            <Stack.Screen
                name='stack2/index'
                options={{
                    title: 'Tab3Stack2',
                    headerShown: true,
                    // presentation: 'card' // デフォルト、タブの【中】で横からスライドしてきて、戻るボタンあり、スワイプで戻る
                    // presentation: 'containedModal' // タブの【中】で全面モーダルが下から上まで迫り上がり、戻るボタン・クローズジェスチャーなし
                    // presentation: 'fullScreenModal' // タブの【外】で全面モーダルが下から上まで迫り上がり、戻るボタン・クローズジェスチャーなし
                    presentation: 'modal' // タブの【外】でモーダルが下から途中まで迫り上がり、戻るボタンなし、クローズジェスチャーあり
                    // presentation: 'formSheet' // modalと同じ？
                    // presentation: 'containedTransparentModal' // その名の通り、containedModalの背景が透明バージョン
                    // presentation: 'transparentModal' // その名の通り、modalの背景が透明バージョン
                }} />
        </Stack>
    );
};
export default LayoutForTab3;
