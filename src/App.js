// import logo from './logo.svg';
import './App.css';
import {a,b} from './components/Products/products';
import Products from './components/Products/products';
// import Title from "/home/syeda/Desktop/React/classes/src/Title.js";
// import Nav from "./components/Nav/Nav.js";
// import Typing from "/home/syeda/Desktop/React/classes/src/components/Type/TypeWriter.js";
function App() {
  console.log(a,b)
  return (
    <div className="App">
      {/* <Nav />
      <Typing
        text={[
          "Hello This is typing",
          "Enjoy this effect",
          "Try this",
        ]} 
        typingSpeed = {100}
        deletingSpeed = {50}
      />
       <Title
       header={"Class is going on"}
       subHeader={"Everyone is making a tile"}
       img={"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"} 
       text={"Approved "}/> */}
       <Products/>
    </div>
  );
}

export default App;
