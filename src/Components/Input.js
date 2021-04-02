import React from 'react'

const Input = ({ title, desc, string, onChange }) => {
    const handleChange = (event) => {
        onChange(() => event.target.value)
    }

    return (
        <div>
            <label htmlFor="seq" className="form-label">{title}</label>
            <input type="name" id="seq" className="form-control" placeholder={desc} value={string} onChange={(e) => { handleChange(e) }} />
        </div>
    )
}

export default Input
