import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import HomeScreen from '../Screens/HomeScreen';
import AccountScreen from '../Screens/AccountScreen';
import StatScreen from '../Screens/StatScreen';

const HomeRoute = () => <HomeScreen />
const AccountRoute = () => <AccountScreen />
const StatRoute = () => <StatScreen />

const AppBarBottom = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Accueil', icon: 'home'},
        { key: 'account', title: 'Compte', icon: 'currency-eur' },
        { key: 'stat', title: 'Statistiques', icon: 'chart-bar'}
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        account: AccountRoute,
        stat: StatRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={{backgroundColor:'blue'}}
        />
    );
};

export default AppBarBottom