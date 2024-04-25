import {useState, useEffect} from 'react';

function App() {
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(contacts => setContacts(contacts.results));
  }, []);
  
  return (
    <h1>Creating!</h1>
  );
}

export default App;
