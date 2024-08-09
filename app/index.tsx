import { View, Text, StyleSheet,Pressable } from "react-native";
import { useRouter } from "expo-router";
const Home = () => {
  const router = useRouter();
  return (
    <View style={styles.main}>
      <Pressable onPress={()=>router.push("/auth")}>
      <Text>Abhi</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
});

export default Home;
