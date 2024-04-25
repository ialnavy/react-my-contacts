import {useState, useEffect} from 'react';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import Searcher from './components/Searcher';

function App() {
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(contacts => setContacts(contacts.results));
  }, []);

  const [searchField, setSearchField] = useState('');
  
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };
  
  const searchedContacts = contacts.filter(contact => {
    return (contact.name['first'] + ' ' + contact.name['last'])
      .toLowerCase().includes(searchField.toLowerCase());
  });
  
  return (
    <div className='tc '>
      <header>
        <h1 className='f1'>My contacts</h1>
      </header>
      {contacts.length === 0
        ? <h2 className='f2'>Loading...</h2>
        : (<ErrorBoundary FallbackComponent={ErrorFallback}>
          <Searcher searchChange={onSearchChange}/>
          <Scroll>
            <CardList contacts={searchedContacts}/>
          </Scroll>
        </ErrorBoundary>) }
      <footer>
        <hr/>
        <p>Desarrollo de Software para Dispositivos Moviles.
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
