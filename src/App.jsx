import './App.css';
import Footer from './component/footer';
import RouterContent from './_router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
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
