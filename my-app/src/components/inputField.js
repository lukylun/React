import React from "react";

const InputField = ({
    type,
    value,
    placeholder,
    onChange,
    errorMessage
}) => {
    return (
        // div를 html에 노출시키지 않으려면
        // div 대신 React.Fragment나 <></>를 root로 사용하면 됨.
        //<React.Fragment></React.Fragment>
        <div>
            <input 
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                style={{borderColor: 'red'}}
            />
            <br />
            <div style={{color: 'red'}}>{errorMessage}</div>
        </div>
    )
}

export default InputField; 