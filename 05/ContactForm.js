import React from 'react';
import PropTypes from 'prop-types';
import validate from './Validate';


const ContactForm = function ContactForm(props) {
    const { fields } = props
    const init = {}

    fields.forEach((field) => {
        init[field.name] = field.defaultValue
    })

    function reducer(state, action) {
        switch (action.type) { case 'change': { return { ...state, [action.key]: action.value } } default: return state }
    }

    const [state, dispatch] = React.useReducer(reducer, init)
    const [errors, setErrors] = React.useState([])


    function renderFields() {
        return fields.map((field) => {
            let tag
            if (field.type === 'textarea') {
                tag = <textarea
                    onChange={e => dispatch({ type: 'change', key: field.name, value: e.target.value })}
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={state[field.name]}
                />
            }
            else {
                tag =
                    <input
                        onChange={e => dispatch({ type: 'change', key: field.name, value: e.target.value })}
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={state[field.name]}
                    />
            }
            return (
                <div key={field.name}>
                    <label htmlFor={field.name}>{field.label}</label> {tag}
                </div>
            )
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setErrors(validate(fields, state))
        return errors
    }

    function renderErrors() {
        // eslint-disable-next-line react/no-array-index-key
        return errors.length > 0 ? <ul>{errors.map((error, index) => <li key={index}>{error}</li>)}</ul> : null
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {renderFields()}
                <input type='submit' />
            </form>
            <div>
                {renderErrors()}
            </div>
        </>
    )

};

ContactForm.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            type: PropTypes.string,
            label: PropTypes.string,
            defaultValue: PropTypes.string
        })
    ).isRequired
}

export default ContactForm;
