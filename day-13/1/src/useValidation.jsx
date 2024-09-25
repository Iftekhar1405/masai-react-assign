import { useEffect, useState } from "react"

const useValidation = (initialState) => {
    const [values,setValues] = useState(initialState)
    const [errors,setErrors] = useState({})
    const [isSubmitting,setIsSubmitting] = useState(false)

    const handleChange = (event) => {
        const {name,value} = event.target
        setValues(
            {
                ...value,
                [name] : value
            }
        )
    }

    const validate = (values) => {
        let errors = {};

        if(!values.email){
            errors.email = 'email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Email address is invalid.";
        };

        if(!values.password){
            errors.password = 'password is required'
        } else if(values.password.length < 8){
            errors.password = 'password must be 8 characters long'
        }

        return errors
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationError = validate(values)
        setErrors(validationError)
        setIsSubmitting(true)
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            console.log("Form submitted successfully!");
        }
    }, [errors]);

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    };
}

export default useValidation