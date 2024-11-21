import { Text, View} from "react-native";
import PokedexLayoutWrapper from "@/components/PokedexLayoutWrapper";

const TopBar = () => {
  return (
    <View>
      <Text>Testing TopBar</Text>
    </View>
  )
}

const Content = () => {
  return (
    <View>
      <Text>Testing Content</Text>
    </View>
  )
}
export default function Index() {
  return (
    <PokedexLayoutWrapper Topbar={TopBar}>
        <Content/>
    </PokedexLayoutWrapper>
  );
}
