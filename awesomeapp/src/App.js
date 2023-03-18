import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Netflix from './components/Netflix';
import './index.css';
import Sdata from './components/Sdata';
import Slot from './components/Slot';
import Counter from './components/Counter';
import Form from './components/Form';

console.log(Sdata)

function App() {
  
  
  return (
    <div className="App">
      <Form/>
      <Counter />
      <Slot />
      
      {/* {Sdata.map(function ncard(ele,index){
        console.log(index);
           return(
            <Netflix imgsrc={ele.imgsrc}
            title={ele.title}
            sname={ele.sname}
            link={ele.link}/>
           )
      })} */}
      {Sdata.map((ele,index)=>{
        console.log(index);
           return(
            <Netflix imgsrc={ele.imgsrc}
            title={ele.title}
            sname={ele.sname}
            link={ele.link}/>
           )
      })}
      <Calculator />
      <Header />
    </div>
  );
}

export default App;
