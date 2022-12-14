// ./src/components/App.js
import React from 'react';
import Box from './Box';
import Div from './Div';
// eslint-disable-next-line no-unused-vars
import { ColorContext, TextContext } from '../context';

// eslint-disable-next-line react/function-component-definition
const App = () => {
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const customText = {
        text: 'sibling'
    }
    return (
        <section>
            <TextContext.Provider value={customText}>
                <Box />
            </TextContext.Provider>
            <Div />
        </section>
    )
}

export default App;
