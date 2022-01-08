import React from "react";
import cmedia from './FormControls.module.css'
export const TextArea = ({input,meta,...props}) => {
    const hasError=meta.touched && meta.error;
    return (
        <div>
            <input className={cmedia.formControl + ' ' + (hasError ? cmedia.error : " ")} {...input} {...props} />
            
            {hasError && <div><span className={cmedia.errorspan}>{meta.error}</span></div>}
        </div>
        
    )
}

export const Input = ({input,meta,...props}) => {
    const hasError=meta.touched && meta.error;
    return (
        <div>
            <input className={cmedia.formControl + ' ' + (hasError ? cmedia.error : " ")} {...input} {...props} />
            
            {hasError && <div><span className={cmedia.errorspan}>{meta.error}</span></div>}
        </div>
        
    )
}