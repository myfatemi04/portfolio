const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer style={{ position: "absolute", bottom: "1rem", left: 0, right: 0 }}>
      <span className="text-light">Michael Fatemi, {year}</span>
    </footer>
  );
}
