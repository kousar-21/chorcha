import { RouterProvider } from "react-router";
import { router } from "./router/router";
import { ThemeProvider } from "./Shared/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App
