import { useCallback, useRef, useState } from "react";
import { Button, View } from "react-native";
import { WebView } from "react-native-webview";

export default function IndexScreen() {
  const webView = useRef<WebView>(null);

  const injectJavascript = useCallback(() => {
    webView.current?.injectJavaScript("setTimeout(() => alert('Test Webview'), 1000)");
  }, []);

  return (
    <View
      style={{ flex: 1 }}
    >
      <WebView
        ref={webView}
        style={{ flex: 1 }}
        source={{ html: '<html><head></head><body></body></html>' }}
      />
      <View style={{ padding: 20 }}>
        <Button title="Inject javascript" onPress={injectJavascript} />
      </View>
    </View>
  );
}
