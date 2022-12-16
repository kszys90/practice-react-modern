import React from 'react';
import { createRoot } from 'react-dom/client';

import ContactForm from './ContactForm';

const App = function App() {

    const fields = [
        { name: 'name', type: 'text', label: 'Name', defaultValue: '', validation: { isRequired: true } },
        { name: 'email', type: 'email', label: 'E-mail', defaultValue: '', validation: { isRequired: true, regex: /^\S+@\S+\.\S+$/ } },
        { name: 'phone', type: 'text', label: 'Phone', defaultValue: '', validation: { isRequired: true } },
        { name: 'topic', type: 'text', label: 'Topic', defaultValue: '', validation: { isRequired: true } },
        { name: 'message', type: 'textarea', label: 'Message', defaultValue: '', validation: { isRequired: true } }
    ]
    return (
        <ContactForm fields={fields} />
    )
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
