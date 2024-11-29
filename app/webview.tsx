import { View } from "react-native";
import { WebView } from "react-native-webview";

export default function WebViewScreen() {
  return (
    <View
      style={{ flex: 1 }}
    >
      <WebView
        style={{ flex: 1 }}
        source={{ uri: 'https://www.whatismybrowser.com/detect/is-javascript-enabled' }}
      />
    </View>
  );
}
