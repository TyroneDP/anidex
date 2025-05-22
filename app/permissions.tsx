import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import * as ExpoMediaLibrary from "expo-media-library";
import * as React from 'react';
import { StyleSheet } from "react-native";
import { CameraPermissionStatus } from "react-native-vision-camera";

export default function PermissionScreen() {
  const [cameraPermissionsStatus, setCameraPermissionStatus] =
    React.useState<CameraPermissionStatus>("not-determined");
  const [microphonePermission, setMicrophonePermissionStatus] =
    React.useState<CameraPermissionStatus>("not-determined");

  const [mediaLibraryPermission, requesMediaLibraryPermissions] = 
    ExpoMediaLibrary.usePermissions();

  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle" style={styles.subtitle}>
          Anidex needs access to a few permission in order to work properly.
        </ThemedText>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    textAlign: "center",
  },
});