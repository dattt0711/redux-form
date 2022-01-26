import logo from './logo.svg';
import './App.css';
import ContactForm from './component/ContactForm';

function App() {
  const handleSubmit = values => {
    console.log(values)
  }
  return (
    <div className="App">
      <ContactForm onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
