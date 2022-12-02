import "../styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";

import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiLinktree } from "react-icons/si";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="h-20 p-6 mb-14 flex justify-between flex-row items-center">
        <Image src="" alt="Paze" />
        <nav className="flex">
          <ul className="flex">
            <li className="mr-6 underline">
              <Link href="/">Home</Link>
            </li>
            <li className="mr-6 underline">
              <Link href="/">The Story</Link>
            </li>
            <li className="mr-6 underline">
              <Link href="/">The Tips</Link>
            </li>
            <li className="mr-6 self-center">
              <Link href="https://www.instagram.com/paulrosset/">
                <BsInstagram size="20" />
              </Link>
            </li>
            <li className="mr-6 self-center">
              <Link href="https://www.linkedin.com/in/paul-rosset-ab9891a8/">
                <BsLinkedin size="20" />
              </Link>
            </li>
            <li className="mr-6 self-center">
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
