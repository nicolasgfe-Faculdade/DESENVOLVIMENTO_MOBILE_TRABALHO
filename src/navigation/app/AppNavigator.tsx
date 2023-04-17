import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screen/home/Home";
import { List } from "../../screen/list/List";
import { Detail } from "../../screen/details/Detail";

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categorias">
            <Stack.Screen name="Categorias" component={Home} />
            <Stack.Screen name="Receitas" component={List}/>
            <Stack.Screen name="Detalhes da receita" component={Detail}/>
        </Stack.Navigator>
    )
}

export default AppNavigator