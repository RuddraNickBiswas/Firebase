import React from 'react'
import { useFormikContext } from 'formik'

function SubmitButton() {
  const {handleSubmit} = useFormikContext()
 
    return (
        <button type="submit" onClick= { () => handleSubmit} >Submit</button>
    )
}

export default SubmitButton
