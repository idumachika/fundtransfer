import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps {
  name: string;
  total: number;
  price: number;
  desc: string;
}

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  backgroundColor: string;
  textColor: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  backgroundColor,
  textColor,
  onPress,
  style,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor}, style]}
      onPress={onPress}
      {...rest}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
    elevation: 5,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 50,
  },
  text: {
    fontSize: 16,
  },
});

export default CustomButton;
