import React from 'react'

function ErrorMessage({error , visible}) {
   
   if(!visible || !error) return null
    return (
        <h3 style={{color:"red"}}>{error}</h3>
    )
}

export default ErrorMessage
