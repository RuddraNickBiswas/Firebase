import React from 'react'
import {useFormikContext} from 'formik'
import './FromInput.style.scss'
import ErrorMessage from './ErrorMessage'
function FromInput({type, name, width ,...otherProps}) {
   const {setFieldTouched , handleChange , errors , touched ,values} =  useFormikContext()
   
    return (
        <div style ={{width}}>
        <input 
        type={type} 
        className={`formInput__input ${touched[name] ? "formInput__input-error" : ""}`} 
       onChange ={handleChange(name)}
       onBlur={() => setFieldTouched(name)}
       value = {values[name]}
        {...otherProps} />

        <ErrorMessage error={errors[name]} visible={touched[name]} />

        {/* <label for={name}
         className="formInput__label">

         </label> */}
    </div>
    )
}

export default FromInput
