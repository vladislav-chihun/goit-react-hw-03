import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css"

export default function ContactForm({ handleCreate,contactSchema }) {
    
    return (
        <Formik initialValues={{nameField:"",numberField:""}} validationSchema={contactSchema} onSubmit={handleCreate}>
            <Form className={css.form}>
                <div className={css.nameContainer}>
                    <label htmlFor="nameField">Name</label>
                    <Field type="text" name="nameField"></Field>
                    <ErrorMessage name="nameField" className={css.errorMessage} />
                </div>
                <div className={css.numberContainer}>
                    <label htmlFor="numberField">Number</label>
                    <Field type="text" name="numberField"></Field>
                    <ErrorMessage name="numberField" className={css.errorMessage} />
                </div>
                 
                <button name="AddContactField" type="submit" className={css.btn}>Add contact</button>
            </Form>
        </Formik>
    )
}