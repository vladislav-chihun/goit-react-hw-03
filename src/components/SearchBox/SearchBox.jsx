import { Field, Formik } from "formik";

export default function SearchBox({handleSearch}) {
    return (
        <>
            <p>Find contacts by name</p>
            <Formik initialValues={{ searchField: "" }} onSubmit={handleSearch}>
                <Field type="text" name="searchField"></Field>
            </Formik>
        </>
   )
}