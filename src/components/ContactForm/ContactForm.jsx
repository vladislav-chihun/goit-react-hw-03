import { Field, Form, Formik } from "formik";

export default function ContactForm({ handleCreate }) {
    
    return (
        <Formik initialValues={{nameField:"",numberField:""}} onSubmit={handleCreate}>
            <Form>
                <Field type="text" name="nameField"></Field>
                <Field type="text" name="numberField"></Field>
                <button name="AddContactField" type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}