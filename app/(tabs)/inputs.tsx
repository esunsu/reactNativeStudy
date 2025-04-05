import { TextInput, StyleSheet, Platform } from 'react-native';
import { useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [longText, setLongText] = useState('');
  const [number, setNumber] = useState('');

  return (
    <ParallaxScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">INPUT BOX TEST</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">text</ThemedText>

        // 1. 기본 한 줄 입력
        <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="기본 입력창"
        />

      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">password</ThemedText>

        // 2. 비밀번호 입력
        <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="비밀번호"
            secureTextEntry={true}
        />

      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">longText</ThemedText>

        // 3. 여러 줄 입력
        <TextInput
            style={[styles.input, styles.multiline]}
            value={longText}
            onChangeText={setLongText}
            placeholder="여러 줄 입력"
            multiline={true}
            numberOfLines={4}
        />

      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">number</ThemedText>

        // 4. 숫자만 입력
        <TextInput
            style={styles.input}
            value={number}
            onChangeText={setNumber}
            placeholder="숫자만 입력"
            keyboardType="numeric"
        />

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: 'white',
    fontSize: 16,
    marginBottom: 10, // 여러 입력창이 있을 때 간격
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top', // Android에서 텍스트가 상단에서 시작하도록
  },

});
