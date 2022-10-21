import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { CustomNavigator } from "./src/navigation/CustomNavigator";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CustomNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
