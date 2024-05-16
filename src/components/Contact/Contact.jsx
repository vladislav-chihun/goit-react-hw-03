export default function Contact({id,name,number}) {
    return (
        <div key={id}>
            <ul>
                <li>{name}</li>
                <li>{number}</li>
            </ul>
            <button>Delete</button>
       </div>
   ) 
}