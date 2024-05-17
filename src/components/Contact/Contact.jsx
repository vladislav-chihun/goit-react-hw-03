import css from "./Contact.module.css"
export default function Contact({id, name, number}) {
    return (
        <div key={id} className={css.contactBox}>
            <ul className={css.contactList}>
                <li>{name}</li>
                <li>{number}</li>
            </ul>
            <button className={css.contactBtn}>Delete</button>
       </div>
   ) 
}