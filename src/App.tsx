import Navbar from './components/Navbar';
import List from './components/List';

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-md mx-auto px-4">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <List />
      </div>
    </>
  );
}

export default App;