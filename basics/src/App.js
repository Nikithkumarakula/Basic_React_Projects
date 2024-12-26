import About from './About'
import Contact from './Contact'
import Greeting from './Greeting';

function App() {

  let name = 'Pooja';
  
  return (
    <div>
      <h1> Hello from ReactJS</h1>
      <Greeting name = {'Akash'} />
      <Greeting name = {'Ayush'} />
       <About name = {name} />
      <Contact />
    </div>
  );
}
export default App;
