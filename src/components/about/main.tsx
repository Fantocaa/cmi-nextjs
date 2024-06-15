import React from "react";
import { CornerRightDown } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="py-32">
        <div className="container text-white">
          <div className="md:flex gap-4 items-end">
            <div className="w-full md:w-1/2">
              <div className="flex gap-4 items-start">
                <h1 className="text-6xl font-bold mb-4">About Us</h1>
              </div>
              <h1 className="text-lg">
                Our Journey start from a Rental Company. we done a lot of stage
                lighting event and LED Display, including the installation in
                Indonesia.
              </h1>
            </div>
            <h1 className="w-full md:w-1/2 text-lg pt-8 md:pt-0">
              Based From this experience, we made a decission to start new
              company in 2023 named{" "}
              <span className="font-semibold text-orangecmi">
                PT. Cahaya Mercusuar Indonesia (CMI)
              </span>
              . So we can more focus and maximize to serve what customer needed.
              PT. Cahaya Mercusuar Indonesia (CMI) focus as a{" "}
              <span className="font-semibold text-orangecmi">
                Contractor and Distributor Company in Stage Lighting and LED
                Display Division.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
