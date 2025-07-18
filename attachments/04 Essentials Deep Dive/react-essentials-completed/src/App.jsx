import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import Button from './components/Button.jsx';
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      <Button className="button" onClick={() => console.log('Clicked!')} />
    </>
  );
}

export default App;
