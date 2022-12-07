import Filters from "../components/Filters";
import OverviewBlogPost from "../components/OverviewBlogPost";

import styles from "../styles/Home.module.css";

export default function Board() {
  return (
    <div className="max-w-screen-lg m-auto my-8">
      <Filters />
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
