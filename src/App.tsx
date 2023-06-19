import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto h-full max-w-7xl pt-16">
        <Hero />
      </main>
    </>
  );
};

export default App;
