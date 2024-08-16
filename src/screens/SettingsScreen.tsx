import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const SettingsScreen: React.FC = () => {
  const [textInputValue, setTextInputValue] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('Option 1');

  const handleTextInputChange = (text: string) => setTextInputValue(text);

  const handleOptionChange = (option: string) => setSelectedOption(option);

  const saveSettings = () => {
    Alert.alert(
      'Settings Saved',
      `Text: ${textInputValue}\nOption: ${selectedOption}`,
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Enter Text:</Text>
        <TextInput
          style={styles.textInput}
          value={textInputValue}
          onChangeText={handleTextInputChange}
          placeholder="Type here..."
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Select Option:</Text>
        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === 'Option 1' && styles.selectedOption,
            ]}
            onPress={() => handleOptionChange('Option 1')}>
            <Text style={styles.optionText}>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === 'Option 2' && styles.selectedOption,
            ]}
            onPress={() => handleOptionChange('Option 2')}>
            <Text style={styles.optionText}>Option 2</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={saveSettings}>
        <Text style={styles.saveButtonText}>Save Settings</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.status}>Text Input: {textInputValue}</Text>
        <Text style={styles.status}>Selected Option: {selectedOption}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginVertical: 10,
    width: '100%',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optionButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    width: '40%',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#81b0ff',
    borderColor: '#81b0ff',
  },
  optionText: {
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#81b0ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginVertical: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  status: {
    fontSize: 18,
    color: '#333',
    marginVertical: 5,
  },
});

export default SettingsScreen;
