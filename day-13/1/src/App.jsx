import React from "react";
import useValidation from "./useValidation";

const App = () => {
    // Ensure initial state is defined for all form fields (use empty strings)
    const initialState = { email: "", password: "" };
    
    const { handleChange, handleSubmit, values, errors } = useValidation(initialState);

    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={values.email || ""}  
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>

                {/* Password Input */}
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={values.password || ""}  
                        onChange={handleChange}
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </div>

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default App;
