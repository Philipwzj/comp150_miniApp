import { StackNavigator } from 'react-navigation';
import Intro from './intro';
import Memes from './memes'

const Navigator = StackNavigator({
    Intro: {screen: Intro},
    Memes: {screen: Memes}
}, {
    initialRouteName: 'Intro',
});


export default Navigator;