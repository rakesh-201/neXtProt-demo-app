import React from 'react'
import '../Styles/Input.css'

const Input = ({ title, desc, val, onChange }) => {
    const handleChange = (event) => {
        onChange(() => event.target.value)
    }

    return (
        <div className="cont1">
            <div className="cont2">
                <label htmlFor="seq" className="form-label">{title}</label>
                <input type="name" id="seq" className="form-control" placeholder={desc} value={val} onChange={(e) => { handleChange(e) }} />
            </div>
        </div>
    )
}

export default Input
