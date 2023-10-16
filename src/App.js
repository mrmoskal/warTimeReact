import './App.css';
import Tickets from './components/Tickets/Tickets';

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
      firstName: 'jenkinz',
      lastName: 'McDonkeldonk'
    },
    {
      id: 3,
      firstName: 'Israel',
      lastName: 'Israeli'
    },
    {
      id: 4,
      firstName: 'Guy',
      lastName: 'Randy'
    }
  ];

  // phase 2 - functions

  // phase 3 - return jsx
  return (
    <div className="App">
      <header className="App-header">
        <Tickets persons={persons}/>
      </header>
    </div>
  );
}

export default App;
