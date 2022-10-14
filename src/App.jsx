import './App.css';
import Footer from './component/footer';
import RouterContent from './_router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <RouterContent />
      <Footer />
    </div>
  );
}

export default App;
