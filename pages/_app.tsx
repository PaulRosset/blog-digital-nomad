import "../styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";

import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiLinktree } from "react-icons/si";
import { useRouter } from "next/router";

interface IProps {
  children: JSX.Element | JSX.Element[];
  isSelected?: boolean;
}

function Linking({ children, isSelected = false }: IProps) {
  return (
    <li
      className={`ease-linear duration-200 mr-6 text-[#5c5cff] ${
        isSelected ? "opacity-100" : "opacity-70"
      } hover:underline hover:opacity-100`}
    >
      {children}
    </li>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <>
      <header className="h-20 p-6 mb-14 flex justify-between flex-row items-center">
        <Image src="" alt="Paze" />
        <nav className="flex font-bold">
          <ul className="flex">
            <Linking isSelected={asPath === "/"}>
              <Link href="/">Home</Link>
            </Linking>
            <Linking isSelected={asPath === "/board"}>
              <Link href="/board">Posts</Link>
            </Linking>
            <Linking isSelected={asPath === "/story"}>
              <Link href="/story">The Story</Link>
            </Linking>
            <Linking isSelected={asPath === "/tips"}>
              <Link href="/tips">The Tips</Link>
            </Linking>
            <li className="mr-6 self-center ease-linear duration-200 opacity-70 hover:opacity-100">
              <Link href="https://www.instagram.com/paulrosset/">
                <BsInstagram size="20" />
              </Link>
            </li>
            <li className="mr-6 self-center ease-linear duration-200 opacity-70 hover:opacity-100">
              <Link href="https://www.linkedin.com/in/paul-rosset-ab9891a8/">
                <BsLinkedin size="20" />
              </Link>
            </li>
            <li className="mr-6 self-center ease-linear duration-200 opacity-70 hover:opacity-100">
              <Link href="https://me.paulrossethings.com/">
                <SiLinktree size="20" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
}
