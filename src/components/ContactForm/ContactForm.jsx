import { Field, Form, Formik } from "formik";

export default function ContactForm() {
    return (
        <Formik initialValues={{}} onSubmit={()=>{}}>
            <Form>
                <Field type="text" name="NameField"></Field>
                <Field type="text" name="NumberField"></Field>
                <button name="AddContactField"></button>
            </Form>
        </Formik>
    )
}