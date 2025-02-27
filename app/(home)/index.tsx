import Topbar from "@/components/Topbar";
import { StyleSheet, Text, View } from "react-native";

const ChatHomeScreen = () => {
    return (
        <View style={style.container}>
            <Topbar></Topbar>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
    }
})

export default ChatHomeScreen;