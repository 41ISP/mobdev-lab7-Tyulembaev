import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MessageScreen from "./screens/MessageScreen";
import ChatScreen from "./screens/ChatScreen";
import ContactsScreen from "./screens/ContactsScreen";
import { StyleSheet, Text } from "react-native";

const TopTabs = createMaterialTopTabNavigator();
const Topbar = () => {
     return (
        <TopTabs.Navigator style={style.topbar}>
            <TopTabs.Screen
                name={"Chats"}
                component={MessageScreen}
                options={{ tabBarLabel: "Chats"}}
            />
            <TopTabs.Screen
                name={"Current"}
                component={ChatScreen}
                options={{ tabBarLabel: "Current"}}
            />
            <TopTabs.Screen
                name={"Contacts"}
                component={ContactsScreen}
                options={{ tabBarLabel: "Contacts"}}
            />
        </TopTabs.Navigator>
    );

}

const style = StyleSheet.create({
    topbar : {
        flex : 1,
        margin : 20
    }
})

export default Topbar;