import Navbar from "../components/Navbar";
import Counter from "../components/Counter";
import ToggleMessage from "../components/ToggleMessage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h1>Welcome to Assignment 1</h1>
        <p>This is the home page of our Next.js app.</p>

        <Counter />
        <ToggleMessage />
      </main>
    </div>
  );
}
