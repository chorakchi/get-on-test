import React from 'react'
import FormLayout from './../components/layout/FormLayout'

 const FormPage = ()=> {

    const handlerSendChange= data =>{
        console.log(data)
    }
    return(
        <FormLayout onChangeData = {handlerSendChange}/>
    )
}

export default FormPage
