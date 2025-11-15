import { Text, View, Image } from "react-native";
import './global.css';
import RotatingImage from "components/RotatingImage";

export default function App() {
  return (
    <>
      <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-center text-pink-500 pt-20 px-5">Welcome Matthew Lillard and ONLY Matthew Lillard!</Text>
      <RotatingImage />
    </View>
    </>
  );
}
