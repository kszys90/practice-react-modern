import React from 'react';
import { createRoot } from 'react-dom/client';
import SpeedTest from './SpeedTest';

// eslint-disable-next-line react/function-component-definition
const App = () => (
    <SpeedTest />
);

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
