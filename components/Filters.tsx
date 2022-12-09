import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import { CountryFilter } from "../pages/board";

interface IButton {
  children: JSX.Element | JSX.Element[] | String | string[];
  isSelected?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

interface IProps {
  filter: CountryFilter | null;
  setFilter: (countryCode: CountryFilter) => void;
}

function Button({ children, onClick, isSelected = false }: IButton) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 border-2 rounded-lg bg-slate-50 font-bold hover:underline ${
        isSelected ? "border-[#5c5cff] text-[#5c5cff]" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default function Filters({ filter, setFilter }: IProps) {
  const router = useRouter();

  const setFilterCountry =
    (countryName: CountryFilter, countryCode: keyof typeof CountryFilter) =>
    async () => {
      setFilter(countryName);
      await router.replace({
        query: { filter: countryCode },
      });
    };

  return (
    <div className="flex place-content-evenly	mb-10">
      <Button
        onClick={setFilterCountry(CountryFilter.SA, "SA")}
        isSelected={filter === CountryFilter.SA}
      >
        South America
      </Button>
      <Button
        onClick={setFilterCountry(CountryFilter.EU, "EU")}
        isSelected={filter === CountryFilter.EU}
      >
        Europe
      </Button>
      <Button
        onClick={setFilterCountry(CountryFilter.AS, "AS")}
        isSelected={filter === CountryFilter.AS}
      >
        Asia
      </Button>
      <Button
        onClick={setFilterCountry(CountryFilter.NA, "NA")}
        isSelected={filter === CountryFilter.NA}
      >
        North America
      </Button>
      <Button
        onClick={setFilterCountry(CountryFilter.AF, "AF")}
        isSelected={filter === CountryFilter.AF}
      >
        Africa
      </Button>
    </div>
  );
}
