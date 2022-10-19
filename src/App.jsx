import './App.css';
import Footer from './component/Footer';
import RouterContent from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <Container style={{ minHeight: "75vh" }}>
        <RouterContent />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
