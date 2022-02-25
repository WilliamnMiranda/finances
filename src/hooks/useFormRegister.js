import React from 'react'
const useFormRegister = () => {
    const [value,setValues] = React.useState("");

    function onChangeValue (event){

    }

    return {
        onChangeValue,
        value,
        setValues
    }
       
    
}

export default useFormRegister
