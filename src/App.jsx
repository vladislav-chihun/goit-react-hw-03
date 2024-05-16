
import ContactForm from "./components/ContactForm/ContactForm"
import Contact from "./components/Contact/Contact"
import { useState } from "react"
import ContactList from "./components/ContactList/ContactList"



function App() {
  const [contacts, setContacts] = useState([
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
])


  
  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm />
  {/* <SearchBox /> */}
      {/* <ContactList /> */}
      {contacts.map((contact)=> (<Contact key={contact.id} name={contact.name} number={contact.number}/>)) }
</div>
  )
}

export default App
