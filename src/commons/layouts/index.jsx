import Header from "./header/Header";
import "./layout.css";
import Menu from "./menu/Menu";

export default function Layouts({ children }) {
  return (
    <>
      <Menu />
      <div className="flex flex-col px-12 py-14 lg:px-24 lg:py-16">
        <header className="z-20">
          <Header />
        </header>
        <main>{children}</main>
      </div>
      <div className="noise"></div>
    </>
  );
}
