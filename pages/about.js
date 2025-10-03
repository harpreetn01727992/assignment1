import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h1>About Page</h1>
        <p>This page is created to demonstrate navigation and props.</p>
      </main>
    </div>
  );
}
