// JSX=JS+HTML
// if function returns HTML, it becomes user defined tag
// User Defined tag
// - First letter uppercase <App></App>
// predefined tag convention
// - lower case <h1></h1>
function App() {            // returns HTML so first letter capital
 return <h1>Hello World</h1>
}

export default App;

function sum(){ // doesnt return HTML so all small
  return 100;
}

function Sum(){ // returns HTML first letter capital
  return <h1>100</h1>;
}