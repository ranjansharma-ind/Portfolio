import React from 'react';

export const theme = {
    dark:{
        background:'#264248'
    },
    light:{
        background:'#4fa3a5'
    }
}

const ThemeContext = React.createContext(theme.dark);
export default ThemeContext;