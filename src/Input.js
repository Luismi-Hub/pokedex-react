import React from 'react'
import { useState } from 'react'
export const Input = ({setsearch}) => {


    const [value, setvalue] = useState("")

    const handleForm = (e) =>{

        e.preventDefault();
        setsearch(value)
        setvalue("")
        console.log(value)


    }

    const handleInput = (e) => {

        setvalue(e.target.value)

    }




    return (
        <div>
            
<form onSubmit={handleForm}>

        <input onChange={handleInput} value={value} placeholder="Type pokemon or a number"></input>

</form>

        </div>
    )
}
