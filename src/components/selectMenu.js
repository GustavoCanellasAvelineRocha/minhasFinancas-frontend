import React from "react";

function SelectMenu(props){
    const opcao = props.list.map((option,index) => {
        return(
            <option key={index} value={option.value}>{option.label}</option>
        )
    })

    return(
        <select {... props}>
            {opcao}
        </select>
    )
}

export default SelectMenu;