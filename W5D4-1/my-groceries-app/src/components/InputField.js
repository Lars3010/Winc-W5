import React from 'react';

function InputField(props){
    console.log(props);
    return (
        <form onSubmit={props.onFormSubmit}>
            <input type='text' name='addToList' placeholder='Vul je boodschappen in'/>
            <button>Toevoegen</button>
        </form>
    )
}

export default InputField;