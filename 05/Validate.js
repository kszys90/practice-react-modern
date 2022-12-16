
const validate = function validate(element, values) {
    const errors = []

    element.forEach(({ name, validation }) => {
        const value = values[name]
        if (validation.isRequired && value === '') {
            errors.push(`Field ${name}: entered data is required`)
        }
        if (validation.regex && validation.regex.test(value)) {
            errors.push(`Field ${name}: entered data is incorrect`)
        }

    })
    return errors
}

export default validate