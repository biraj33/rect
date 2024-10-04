import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Address from './Address';
import Detail from './Detail';
import Info1 from './Info1';
import Detail3 from './Detail3';
import Teacher from './Teacher';
import Practice from './Practice';
import Ternary_Operator from './Ternary_Operator';
import LearnUseStateHook from './component/LearnUseStateHook';
import LearnUseStateHook2 from './component/LearnUseStateHook2';
import LearnUseStateHook3 from './component/LearnUseStateHook3';
import LearnUseStateHook4 from './component/LearnUseStateHook4';
import Form1 from './component/form/Form1';
import Form2 from './component/form/Form2';
import Myroute from './component/Myroute';
import Mylinks from './component/Mylinks';

function App() {
  console.log("hi")
  return (
    <div>
      <Mylinks></Mylinks>
      {/* <Info1></Info1> */}
      {/* <Detail3 name = "Biraj" address = "Bhaktapur"></Detail3>
      <Teacher name = "Biraj" age = "12"></Teacher> */}
      {/* <Practice></Practice> */}
      {/* <Ternary_Operator></Ternary_Operator> */}
      {/* <LearnUseStateHook2></LearnUseStateHook2> */}
      {/* <LearnUseStateHook3></LearnUseStateHook3> */}
      {/* <LearnUseStateHook4></LearnUseStateHook4> */}

      {/* <img src='./images.jpeg'/> */}
      {/* <Form1></Form1> */}
      {/* <Form2></Form2> */}
      <Myroute></Myroute>
 
    </div>
  );
}

export default App;
