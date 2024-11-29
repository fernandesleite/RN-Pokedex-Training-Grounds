import { View, ActivityIndicator } from "react-native"
import { Colors } from "@/utils/constants/Colors"

export default function LoadingIcon() {
  return (
    <View>
      <ActivityIndicator color={Colors.redpokedex} animating={true} size={"large"} />
    </View>
  )
}