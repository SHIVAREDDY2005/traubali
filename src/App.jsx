import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import useLenis from "./hooks/useLenis";

// Initializes smooth scrolling and mounts the landing page inside the shared layout.
function App() {
  useLenis();

  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}

export default App;
