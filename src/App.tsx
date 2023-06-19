import Header from "./components/Header";
import Hero from "./pages/Home.tsx";

const App = () => {
  return (
    <>
      <Header />
      <main className="mx-auto h-full space-y-32 pt-16">
        <Hero />
        <div className="pt-32">hello</div>
      </main>
    </>
  );
};

export default App;
