import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Main from "./components/Main";
import Login from "./components/Login";
import Browse from "./components/Browse";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";

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
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </Provider>
  );
}

export default App;
