// utils/responsive.js
import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// Scale based on iPhone 12 dimensions (adjust as needed)
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

export const scale = size => (width / guidelineBaseWidth) * size;
export const verticalScale = size => (height / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

// Example usage:
// scale(16) => scales fontSize or padding based on screen width
