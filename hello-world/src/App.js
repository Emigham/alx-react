import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Greet name="Jack" heroName="Warrio">
        <p>This is children props</p>
        </Greet>
      <Greet name="Marck" heroName="Actor">
        <button>Action</button>
        </Greet>
      <Greet name="Pharez" heroName="Breakthrough"/>
       <Welcome name="Jack" heroName="Warrio" />
       <Welcome  name="Marck" heroName="Actor"/>
       <Welcome  name="Pharez" heroName="Breakthrough"/> */}
      {/*<Hello /> */}

    </div>
  )
}

export default App;
