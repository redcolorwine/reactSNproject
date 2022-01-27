import React from "react";
import { Field, reduxForm } from 'redux-form';
import { TextArea,Input } from '../../common/formControls/FormControls';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validator';
const ProfileDataForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button onClick={props.onSubmit}>save</button>
            </div>
            {props.error && <div >
                {props.error}
            </div>}
            <p>Full name</p>: { <Field component={Input} validate={[requiredField,maxLength]} name="fullName"  />}
            <p>About Me</p>:{ <Field component={Input} validate={[requiredField,maxLength]} name="aboutMe"  />}
            <p>lookingForAJobDescription</p>: { <Field component={TextArea} validate={[requiredField,maxLength]} name="lookingForAJobDescription"  />}
            <div>
                Контакты:
                {Object.keys(props.profile.contacts).map(key => {
                    return (<div>
                        <b> {key} :</b>{<Field component={Input} validate={[requiredField,maxLength]} name={'contacts.'+ key}  />}
                         </div>)
                })}
            </div>
        </form>
    )
}

let maxLength=maxLengthCreator(30);
const ProfileDataReduxForm = reduxForm({form:'editProfile'})(ProfileDataForm);

export default ProfileDataReduxForm;
