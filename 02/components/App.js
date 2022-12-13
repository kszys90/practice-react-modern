/* eslint-disable react/jsx-no-constructed-context-values */
// ./src/components/App.js
import React from 'react';
import Box from './Box';
import TextContext from '../contex';

// eslint-disable-next-line react/function-component-definition
const App = () => {
    const state = {
        text: 'React HelloWorld Modern!'
    };

    return (
        <TextContext.Provider value={state}>
            <Box />
        </TextContext.Provider >
    )
}


export default App;
