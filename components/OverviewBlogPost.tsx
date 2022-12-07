/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function OverviewBlogPost() {
  return (
    <Link href="/12">
      <li className="border rounded-md ease-linear duration-200 hover:cursor-pointer hover:shadow-md">
        <img
          className="rounded-t-md"
          src="https://images.unsplash.com/photo-1528837516156-0a7225a43641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzkyMXwwfDF8c2VhcmNofDh8fGljZWxhbmR8ZW58MHx8fHwxNjY3NjkyMzIw&ixlib=rb-4.0.3&q=80&w=1200"
          alt="Country Picture illustration"
        />
        <div className="p-3">
          <div className="flex text-sm content-center mb-1">
            <Image
              className="rounded-full"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=100"
              alt="Author's profile picture"
              width={26}
              height={26}
            />
            <div className="ml-2 self-center">
              <span>Paul Rosset</span>
              <span className="text-slate-500"> - January 3rd 2021</span>
            </div>
          </div>
          <div>
            <h3 className="py-1">Title of the blog Post</h3>
          </div>
          <div className="text-sm text-right text-slate-500">3 min read</div>
        </div>
      </li>
    </Link>
  );
}
