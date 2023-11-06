/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import ImagePicker from 'react-native-image-picker';
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  Modal,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function selectImage() {
  const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.showImagePicker(options, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      // You can use the selected image's URI for display or further processing.
      const selectedImageUri = response.uri;
    }
  });

};
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true); // Por defecto, mostrará el formulario de Sign In
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <Image
        source={require('C:/Users/silve/OneDrive/Documents/Semestre 9/TC2007B.501/WearAware/images/P1.jpg')}
        style={{ width: '100%', height: '20%' }}
      />

      <View style={styles.textContainer}>
        <Text style={styles.sectionTitle}>Closet Virtual</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.roundButton}>
          <Image
          source={require('C:/Users/silve/OneDrive/Documents/Semestre 9/TC2007B.501/WearAware/images/add-button.png')}
          style={{ width: '100%', height: '100%' }}
          />
          <Button title="Add new cloathes" onPress={() => { selectImage() }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  textContainer:{
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    top: 200, // Position at the top
    left: 0, // Position at the left
    padding: 10, // Optional padding for the button
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  roundButton: {
    width: 120,
    height: 120,
    borderRadius: 100,
    justifyContent: '',
  },

});

export default App;
