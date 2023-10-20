import MenuButton from "./menubutton/MenuButton";
import DarkModeButton from "./themebutton/DarkModeButton";

export default function Header({}) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="text-xl font-black">Ihda Anwari</div>
        <div className="flex items-center">
          <div className="text-6xl"><DarkModeButton/></div>
          <div className="text-6xl">
            <MenuButton/>
          </div>
        </div>
      </div>
    </>
  );
}
