import React from 'react';
import { Colors } from './index';

const ThemeContext = React.createContext({});

type ThemeProviderProps = { }

class ThemeProvider extends React.Component<ThemeProviderProps, any> {

  render () {
    return (
      <ThemeContext.Provider value={{theme: Colors}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;

const ThemeConsumer = ThemeContext.Consumer;

export { ThemeContext, ThemeConsumer };