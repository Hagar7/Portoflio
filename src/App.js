import { createHashRouter, RouterProvider } from "react-router-dom";
import MasterLayout from "./Components/MasterLayout/MasterLayout";
import Notfound from "./Components/Notfound/Notfound";
import Home from "./Pages/Home";
import Works from "./Pages/Works";


function App() {
  let routes = createHashRouter([
    {path:"/",element:<MasterLayout/>,errorElement:<Notfound/>,children:[
      {index:true,element:<Home/>},
      {path:"projects",element:<Works/>}
    ]}
  ])
  return (
 <>
<RouterProvider router={routes}/>
 </>
  );
}

export default App;
