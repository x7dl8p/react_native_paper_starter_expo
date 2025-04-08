import { useTheme } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  const theme = useTheme();

  const strips = [
    { name: 'Tab 1', description: 'Description for Tab 1', route: 'Tab1' },
    { name: 'Tab 2', description: 'Description for Tab 2', route: 'Tab2' },
    { name: 'Tab 3', description: 'Description for Tab 3', route: 'Tab3' },
    { name: 'Tab 4', description: 'Description for Tab 4', route: 'Tab4' },
    { name: 'Tab 5', description: 'Description for Tab 5', route: 'Tab5' },
  ];

  return (
    <View style={[theme.container, { backgroundColor: 'white', padding: 0 }]}>
      {strips.map((strip, index) => (
        <TouchableOpacity
          key={index}
          style={{
            padding: 16,
            marginVertical: 4,
            backgroundColor: theme.colors.surface,
            borderRadius: 8,
            width: '100%',
            // Shadow for iOS
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            // Shadow for Android
            elevation: 3,
          }}
          onPress={() => navigation.navigate(strip.route)}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: theme.colors.onSurface, marginBottom: 4 }}>
            {strip.name}
          </Text>
          <Text style={{ color: theme.colors.onSurfaceVariant }}>{strip.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
