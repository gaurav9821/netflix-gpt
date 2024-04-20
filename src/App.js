import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Main from "./components/Main";
import Login from "./components/Login";
import Browse from "./components/Browse";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <RouterProvider router={appRouter}>
      <div>
        <Body />
      </div>
    </RouterProvider>
  );
}

export default App;
