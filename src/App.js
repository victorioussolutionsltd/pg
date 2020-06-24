import React, {useState} from 'react';
import Transactions from './components/Transactions';
import './App.css';
import axios from 'axios';
function App() {
  const [value, setValue] = useState(0);
  const [transactions, setTransactions] = useState([
    // {value: '1000', interest: 10},
    // {value: '1000', interest: 1000},
  ]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const calculateInterest = (event) => {
    axios
      .get('http://localhost:8080/interest?={value}')
      .then(function (response) {
        setTransactions(response.data);
      })
      .catch(function (error) {
        // handle error
        alert('Error ' + error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Calculate the interest</p>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <form onSubmit={calculateInterest}>
            <label>
              Amount:
              <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="Save" />
          </form>
        </div>
        <p></p>
        <Transactions value={transactions}></Transactions>
      </header>
    </div>
  );
}

export default App;
