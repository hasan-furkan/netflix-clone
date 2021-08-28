import { Jumbotron } from "./components/jumbotron";
import jumboData from './fixtures/jumbo';

function App() {
  return (
    <div className="App">
      <Jumbotron.Container>
      {jumboData.map((item)=>(
        <Jumbotron key={item.id} direction={item.direction}>
          <p>Hello</p>
        </Jumbotron>
      ))}
      </Jumbotron.Container>
    </div>
  );
}

export default App;
