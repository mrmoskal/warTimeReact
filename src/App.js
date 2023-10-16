import './App.css';
import Ticket from './components/Ticket/Ticket';

function App() {
  // phase 1 - states
  const persons = [
    {
      id: 0,
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith'
    },
    {
      id: 2,
      firstName: 'Israel',
      lastName: 'Israeli'
    },
    {
      id: 3,
      firstName: 'Guy',
      lastName: 'Randy'
    }
  ];

  const personList = persons.map(person => {
    return <Ticket  ticket={person}/>
  });

  // phase 2 - functions

  // phase 3 - return jsx
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main-header">Welcome</h1>
        <div className="ticket-list">{personList}</div>
      </header>
    </div>
  );
}

export default App;
