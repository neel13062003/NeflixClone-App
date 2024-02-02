import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Video } from 'expo-av';

import videoUri from '../uploads/2.mp4';
import thumbnailUri from '../uploads/1231.jpeg';

const Home1Screen = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const onLoad = () => {
    console.log('Video loaded successfully');
    setIsVideoReady(true);
  };
  const onError = (error) => {
    console.error('Video loading error:', error);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isVideoReady ? (
        <Video
          source={{ uri: videoUri }}
          style={{ width: 300, height: 200 }}
          resizeMode="contain"
          useNativeControls={true}
          shouldPlay
          isLooping
          posterSource={{ uri: thumbnailUri }}
          onReadyForDisplay={onLoad}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};

export default Home1Screen;
