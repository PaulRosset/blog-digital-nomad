import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import OverviewBlogPost from "../components/OverviewBlogPost";

import styles from "../styles/Home.module.css";

export enum CountryFilter {
  SA = "South America",
  EU = "Europe",
  AS = "Asia",
  NA = "North America",
  AF = "Africa",
}

export default function Board() {
  const { query } = useRouter();
  const [filter, setFilter] = useState<CountryFilter | null>(null);
  useEffect(() => {
    let filterFromURL =
      typeof query.filter === "string" ? query.filter.toUpperCase() : null;
    if (
      filterFromURL === null ||
      !Object.keys(CountryFilter).includes(filterFromURL)
    ) {
      return;
    }
    setFilter(CountryFilter[filterFromURL as keyof typeof CountryFilter]);
  }, [query.filter]);

  return (
    <div className="max-w-screen-lg m-auto my-8">
      <Filters filter={filter} setFilter={setFilter} />
      <ul
        className={`mb-10 flex justify-start ${styles["blog-post"]} ${styles["bigger-gap"]}`}
      >
        <OverviewBlogPost />
        <OverviewBlogPost />
        <OverviewBlogPost />
        <OverviewBlogPost />
        <OverviewBlogPost />
        <OverviewBlogPost />
        <OverviewBlogPost />
      </ul>
    </div>
  );
}
