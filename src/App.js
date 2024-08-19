import logo from "./logo.svg";
import "./App.css";
import Evento from "./components/Evento";
function App() {
  return (
    <div className="ui feed">
      {objeto.map((x) => {
        return <Evento nome={x.nome} likes={x.likes} />;
      })}
    </div>
  );
}
const objeto = [
  { nome: "gustin", likes: 20 },
  { nome: "zezin", likes: 20 },
  { nome: "pedrin", likes: 20 },
  { nome: "joãozin", likes: 20 },
  { nome: "silvin", likes: 20 },
  { nome: "felipin", likes: 20 },
  { nome: "neyzin", likes: 20 },
];

export default App;
