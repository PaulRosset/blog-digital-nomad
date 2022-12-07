import { ReactElement } from "react";

interface IButton {
  children: JSX.Element | JSX.Element[] | String | string[];
  isSelected?: boolean;
}

function Button({ children, isSelected = false }: IButton) {
  return (
    <button
      className={`px-5 py-3 border-2 rounded-lg bg-slate-50 hover:underline ${
        isSelected ? "font-bold border-[#5c5cff] text-[#5c5cff]" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default function Filters() {
  return (
    <div className="flex place-content-evenly	mb-10">
      <Button>South America</Button>
      <Button isSelected={true}>Europe</Button>
      <Button>Asia</Button>
      <Button>North America</Button>
      <Button>Africa</Button>
    </div>
  );
}
