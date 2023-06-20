import Header from "./components/Header";
import About from "./pages/About.tsx";
import Hero from "./pages/Home.tsx";
import { useState } from "react";
import Loading from "./components/Loading";
import { cn } from "./lib/utils.ts";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <>
      <div
        className={cn("h-full", {
          hidden: isLoading,
        })}
      >
        <Header />
        <main className="mx-auto h-full space-y-32 pt-16">
          <Hero setLoading={setIsLoading} />
          <About />
          <p>hello</p>
        </main>
      </div>
      <Loading isLoading={isLoading} />
    </>
  );
};

export default App;
