import Header from "./components/Header";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <>
      <Header />
      <main className="mx-auto h-full space-y-32 pt-16">
        <Hero />
      </main>
    </>
  );
};

export default App;
