import type { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedRef } from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';

type Props = PropsWithChildren<{}>;

export default function ParallaxScrollView({ children }: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const bottom = useBottomTabOverflow();

  return (
      <ThemedView style={styles.container}>
        <Animated.ScrollView
            ref={scrollRef}
            scrollEventThrottle={16}
            scrollIndicatorInsets={{ bottom }}
            contentContainerStyle={{
              paddingBottom: bottom,
              paddingTop: 30, // 원하는 여백 크기 (예: 20)
            }}>
          <ThemedView style={styles.content}>{children}</ThemedView>
        </Animated.ScrollView>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});