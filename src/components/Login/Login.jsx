import React from 'react';
import css from './Login.module.css'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import {connect} from "react-redux";
import {LoginThunk} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";

const initialValues = {
    email: '',
    password: ''
}


const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
})


function Login({LoginThunk,isAuth}) {

    const onSubmit = (values) => {
        console.log('Login data', values)
        LoginThunk(values.email, values.password)

    }
    if(isAuth) {
        return <Redirect to='/profile'/>
    }
    return (

        <Formik onSubmit={onSubmit}
                validationSchema={validationSchema}
                initialValues={initialValues}
        >
            <Form className={css.login}>
                <div className={css.formControl}>
                    <label htmlFor='email'/>
                    <Field type="text" placeholder={`login`} id='email' name='email'/>
                    <ErrorMessage className={css.error} name='email' component='div'/>
                </div>
                <div className={css.formControl}>
                    <label htmlFor='password'/>
                    <Field  type="password" placeholder={`password`} id='password' name='password'/>
                    <ErrorMessage className={css.error} name='password' component='div'/>
                </div>

                <button  type='submit'>LOGIN</button>
            </Form>
        </Formik>
    );
}
const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps, {LoginThunk})(Login)