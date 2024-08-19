import logo from "./logo.svg";
import "./App.css";

const App = function () {// Faz uma constante do app e passa pela função
  
  const data = new Date(); // instancia a função date
  var mensagem; // atribuii a mensagem
  if (data.getHours() < 12) mensagem = "Bom dia!";
  else if (data.getHours() < 19) mensagem = "Boa tarde!";
  else mensagem = "boa noite!";

  return <div>{mensagem}</div>;// retorna a mensagem na tela
};

export default App;
