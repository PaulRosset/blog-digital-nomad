import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";

export default function Metadata() {
  return (
    <ul>
      <li className="mb-2">
        <Image
          className="inline-block"
          src="/map-location.png"
          alt="location-icon"
          width={46}
          height={46}
        />
        <span className="align-bottom">
          <span className="font-semibold">Location:</span> Bali 🇺🇦
        </span>
      </li>
      <li className="text-sm">
        <span className="font-semibold">Lat/Long:</span> 24.021379, 3.056239
      </li>
      <li className="text-sm">
        <span className="font-semibold">Since</span> January 3rd 2021
      </li>
      <li className="text-sm">
        <span className="font-semibold">Last update:</span> 02/12/2022
      </li>
    </ul>
  );
}
