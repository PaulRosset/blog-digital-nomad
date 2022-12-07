import { useRouter } from "next/router";
import Image from "next/image";

export default function HeaderPost() {
  return (
    <div className="flex">
      <div className="self-center mr-5">
        <Image
          className="rounded-full"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=100"
          alt="Author's profile picture"
          width={46}
          height={46}
        />
      </div>
      <div className="flex flex-col">
        <span className="mb-2">Paul Rosset</span>
        <div className="flex text-sm text-slate-500">
          <span>Aug 21</span>
          <span className="mx-2 "> - </span>
          <span>4 min read</span>
        </div>
      </div>
    </div>
  );
}
