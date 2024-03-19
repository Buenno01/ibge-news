import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SavedNews from './pages/SavedNews';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/saved" element={ <SavedNews /> } />
      </Route>
    </Routes>
  );
}

export default App;
