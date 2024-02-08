import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';

import { darkTheme } from './theme/darkTheme';
import Home from './customer/pages/home/Home';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <Home/>
  </ThemeProvider>
  );
}

export default App;
