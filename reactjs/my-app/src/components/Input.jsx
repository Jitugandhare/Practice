import React, { useState } from 'react'

const Input = ({ type = "text", value, onChange, validate }) => {
    const [error, setError] = useState("");


    const handleChange = (e) => {
        const newValue = e.target.value;
        onChange(e)
        if (validate) {
            const errorMsg = validate(newValue)
            setError(errorMsg)
        }

    }


    return (
        <div>
            <input
                type={type}
                value={value}
                onChange={handleChange}
            />

            {error && <span style={{ color: "red", fontSize: "0.8rem" }}>{error}</span>}
        </div>
    )

}

export default Input
