import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import AppRoutes from './Routing/AppRoutes';
import FooterPage from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <FooterPage />

</div>
      )
}

export default App;
