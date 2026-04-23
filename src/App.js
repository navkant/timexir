import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import ReactDOM from "react-dom/client";

// const AppLayout = () => {
//   const [userName, setUserName] = useState("Anonymous");
//   return (
//     <Provider>
//       <div className="app">
//         <Header />
//         <Outlet />
//       </div>
//     </Provider>
//   );
// };

// const appRouter = BrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {" "}
    <Routes>
      {" "}
      <Route path="/" element={<Body />} />
    </Routes>{" "}
  </BrowserRouter>,
);
