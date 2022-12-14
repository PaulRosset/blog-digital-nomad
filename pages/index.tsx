import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";

import Metadata from "../components/Metadata";
import OverviewBlogPost from "../components/OverviewBlogPost";

import styles from "../styles/Home.module.css";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Map />
        <div className="max-w-screen-lg m-auto my-8">
          <div className="w-full flex justify-center">
            <div className="flex w-1/3 px-3 border rounded-md py-5 px-8">
              <Metadata />
            </div>
            {/* <div className="w-2/3 px-3">Hello</div> */}
          </div>
          <div className="w-full my-10">
            <ul className={`mb-10 flex justify-start ${styles["blog-post"]}`}>
              <OverviewBlogPost />
              <OverviewBlogPost />
              <OverviewBlogPost />
            </ul>
            <div className="m-auto w-full text-center">
              <Link
                className="py-5 px-6 text-[#5c5cff] rounded-full border-2 font-bold ease-linear duration-200 hover:border-[#5c5cff]"
                href="/board"
              >
                See more blog posts...
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
