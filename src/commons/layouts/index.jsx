import Header from "./header/Header";
import "./layout.css";

export default function Layouts({ children }) {
  return (
    <>
      <div className="flex flex-col px-12 py-14 lg:px-24 lg:py-16">
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </div>
      <div className="noise"></div>
    </>
  );
}
