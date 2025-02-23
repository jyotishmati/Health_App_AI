// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';

// interface WelcomeTemplateProps {
//   imageSource: any;
//   title: string;
//   subtitle: string;
//   backgroundColor: string;
//   buttonColor: string;
//   titleColor: string;
//   skipColor: string;
//   onNext: () => void;
// }

// export default function WelcomeTemplate({
//   imageSource,
//   title,
//   subtitle,
//   backgroundColor,
//   buttonColor,
//   titleColor,
//   skipColor,
//   onNext,
// }: WelcomeTemplateProps) {
//   return (
//     <View style={{ flex: 1, backgroundColor, alignItems: 'center', justifyContent: 'center' }}>
//       <View style={{ width: '100%', height: '65%', marginTop: -75, paddingRight: 30 }}>
//         <Image
//           source={imageSource}
//           style={{ width: '100%', height: '100%', borderBottomRightRadius: 75 }}
//           resizeMode="cover"
//         />
//       </View>
//       <View style={{ alignItems: 'center', marginTop: 40 }}>
//         <Text style={{ fontSize: 25, fontWeight: 'bold', color: titleColor, marginBottom: 6 }}>
//           {title}
//         </Text>
//         <Text style={{ color: titleColor, textAlign: 'center', marginBottom: 24 }}>
//           {subtitle}
//         </Text>
//         <TouchableOpacity
//           style={{ backgroundColor: buttonColor, borderRadius: 9999, marginTop: 24, paddingHorizontal: 32, paddingVertical: 12, width: 150 }}
//           onPress={onNext}
//         >
//           <Text style={{ color: backgroundColor, textAlign: 'center' }}>Next</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={{ marginTop: 16 }}>
//           <Text style={{ color: skipColor, textAlign: 'center' }}>Skip</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{ position: 'absolute', bottom: 0, width: '100%', height: 60, backgroundColor, alignItems: 'center', justifyContent: 'center' }}>
//         <View style={{ width: 200, height: 5, backgroundColor: '#9CA3AF', borderRadius: 10}} />
//       </View>
//     </View>
//   );
// }

import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
const marginRightValue = width > 400 ? width * 0.05 : width * 0.03; 
const titleFontSize = width > 400 ? 26 : 22; 
const subtitleFontSize = width > 400 ? 18 : 16;
const buttonWidth = width > 400 ? width * 0.5 : width * 0.6;
const buttonPadding = width > 400 ? 14 : 12;
const barWidth = width > 400 ? width * 0.4 : width * 0.35;


interface WelcomeTemplateProps {
  imageSource: any;
  title: string;
  subtitle: string;
  backgroundColor: string;
  buttonColor: string;
  titleColor: string;
  skipColor: string;
  onNext: () => void;
}

export default function WelcomeTemplate({
  imageSource,
  title,
  subtitle,
  backgroundColor,
  buttonColor,
  titleColor,
  skipColor,
  onNext,
}: WelcomeTemplateProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

{/* Image Container */}
<View style={{ width: width * 0.9, height: height * 0.57, overflow: 'hidden', borderBottomRightRadius: width * 0.15, marginRight: width * 0.1 }}>
  <Image
    source={imageSource}
    style={{ width: '100%', height: '100%' }}
    resizeMode="cover"
  />
</View>

{/* Text & Button Section with Dynamic Styles */}
<View style={{ alignItems: 'center', marginTop: height * 0.05, paddingHorizontal: width * 0.1, marginRight: marginRightValue }}>
  <Text style={{ fontSize: titleFontSize, fontWeight: 'bold', color: titleColor, textAlign: 'center' }}>
    {title}
  </Text>
  <Text style={{ fontSize: subtitleFontSize, color: titleColor, textAlign: 'center', marginTop: 8 }}>
    {subtitle}
  </Text>

  {/* Next Button */}
  <TouchableOpacity
    style={{
      backgroundColor: buttonColor,
      borderRadius: 30,
      marginTop: 24,
      width: buttonWidth,
      paddingVertical: buttonPadding,
    }}
    onPress={onNext}
  >
    <Text style={{ color: backgroundColor, textAlign: 'center', fontWeight: 'bold' }}>Next</Text>
  </TouchableOpacity>

  {/* Skip Button */}
  <TouchableOpacity style={{ marginTop: 16 }}>
    <Text style={{ color: skipColor, textAlign: 'center' }}>Skip</Text>
  </TouchableOpacity>
</View>

{/* Bottom Indicator */}
<View style={{ width: '100%', alignItems: 'center', marginTop: 'auto', paddingBottom: height * 0.02 }}>
  <View style={{ width: barWidth, height: 5, backgroundColor: '#9CA3AF', borderRadius: 10 }} />
</View>

</View>

    </SafeAreaView>
  );
}
