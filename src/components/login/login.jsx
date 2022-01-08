import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form"
import { maxLengthCreator, requiredField } from "../../utils/validators/validator"
import { Input } from "../common/formControls/FormControls"
import cmedia from "../common/formControls/FormControls.module.css"
import { login } from "../../redux/authReducer"
import { Navigate } from "react-router-dom";
let maxLoginlegth10 = maxLengthCreator(40);
let maxPassLength20 = maxLengthCreator(20);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberme);
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"email"} component={Input} validate={[requiredField, maxLoginlegth10]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type="password" component={Input} validate={[requiredField, maxPassLength20]} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberme"} component={"input"} /> remember me
            </div>
            {props.error && <div className={cmedia.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, { login })(Login);