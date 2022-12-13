// ./src/components/App.js
import React from 'react';
import Box from './Box';
import Div from './Div';
import { ColorContext, TextContext } from '../context';

// eslint-disable-next-line react/function-component-definition
const App = () => (


    <ColorContext.Provider value={ColorContext}>
        <section>
            <Box />
            {            // eslint-disable-next-line react/jsx-no-constructed-context-values
            }            <TextContext.Provider value={{ text: 'sibling' }}>

                <Div />
            </TextContext.Provider>
        </section>
    </ColorContext.Provider>
)

export default App;
