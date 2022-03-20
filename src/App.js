
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ClientPage from 'containers/ClientPage';
import HomePage from 'containers/HomePage';
import PropertyPage from 'containers/PropertyPage';

function App() {

  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<ClientPage />}>
          <Route  index element={<HomePage />}/>
          <Route path='home' element={<HomePage />}/>
          <Route path='property' element={<PropertyPage />}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
