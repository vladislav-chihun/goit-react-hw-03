
import ContactForm from "./components/ContactForm/ContactForm"
import { useState } from "react"
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox"
import { nanoid } from "nanoid"
import * as yup from 'yup';



function App() {
  const [contacts, setContacts] = useState([
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ])
  const [searchValue, setSearchValue] = useState("")
  const handleSearch = (values) => {
    setSearchValue(values);
  };
  
  

  const handleCreate = (values,actions) => {
    const newContact = {id:nanoid(), name:values.nameField,number:values.numberField}
    setContacts([...contacts, newContact])
    actions.resetForm()
  }
  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id != id))
  }
  const contactSchema = yup.object({
  firstName: yup.string().defined(),
  nickName: yup.string().default('').nullable(),
  email: yup.string().nullable().email(),
  birthDate: yup.date().nullable().min(new Date(1900, 0, 1)),
});
 

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleCreate={handleCreate} />
      <SearchBox handleSearch={handleSearch} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
</div>
  )
}

export default App
