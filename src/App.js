import { Header } from "./layout/header/Header";
import { Amazing } from "./pages/main_page/amazing/Amazing";
import { Discount } from "./pages/main_page/discount/Discount";

// import { useEffect, useState } from "react";


function App() {
  return (
    <div className="App">
      <Header/>
      <Amazing/>
      <Discount/>
    
    </div>
  );
}

export default App;


// создать кнопку
  // значение стартовое 0
  // при нажатии увеличивать значение на 1
  // useState


// function App() {
  
//     useEffect(() => {
// console.log('I DID MOUNT');
//     })
//     const [value, setValue] = useState(0)
//     return (
//       <div className="App">
//         {value}
//         <button onClick={() => setValue(value + 1)}>click</button>

      
//       </div>
//     );
//   }

// export default App;