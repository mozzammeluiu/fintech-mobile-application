import { AppRegistry } from 'react-native';
import App from './app/App';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#f2f2f2',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
  },
};
export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}
AppRegistry.registerComponent('Brio', () => Main);
