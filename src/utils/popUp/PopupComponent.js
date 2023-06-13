import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Modal,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Portal } from 'react-native-paper';
import { usePopupContext } from './PopupContext';
import { SCREEN_WIDTH } from '../../constants/Constants';
import { Colors } from '../../constants/Colors';


const PopupComponent = ({ children }) => {
  const item = usePopupContext();
  const [modelVisiable, setModelVisiable] = useState(false);

  const animation = useRef(new Animated.Value(0)).current;

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  useEffect(() => {
    if (item.isVisiable) {
      setModelVisiable(true);
      Animated.timing(animation, {
        duration: 250,
        useNativeDriver: true,
        toValue: 1,
        easing: Easing.ease,
      }).start();
    } else {
      Animated.timing(animation, {
        duration: 250,
        useNativeDriver: true,
        toValue: 0,
        easing: Easing.ease,
      }).start(result => {
        if (result) {
          setModelVisiable(false);
        }
      });
    }
  }, [item.isVisiable]);
  return (
    <>
      <Portal>
        <Modal
          onRequestClose={() => {
            // item.hide();
          }}
          animationType="fade"
          transparent
          statusBarTranslucent
          visible={modelVisiable}>
          <TouchableOpacity activeOpacity={1} style={styles.mainContainer}>
            <Animated.View
              style={[styles.container, { transform: [{ scale: scale }] }]}>
              {item.component}
            </Animated.View>
          </TouchableOpacity>
        </Modal>
      </Portal>
      {children}
    </>
  );
};

export default PopupComponent;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: Colors.trans,
  },
  container: {
    width: SCREEN_WIDTH * 0.86,
    backgroundColor: Colors.white,
    borderRadius: 24,
    // minHeight: 120,
    padding: 20,
  },
});
