
import './App.css';
import Item from './components/Item';
import Button from "./components/Button";
import QuestionForm from "./components/Adding";

function App() {


    return (
        <div className="App">
            <h1>СОЗДАТЬ НОВУЮ ЗАГАДКУ</h1>
            <QuestionForm/>
            <Item/>
            <br/>
            <Button/>
        </div>
    );
}

export default App;