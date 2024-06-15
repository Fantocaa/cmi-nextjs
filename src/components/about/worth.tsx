import React from "react";
import { Cpu } from "lucide-react";
import { Handshake } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import { Workflow } from "lucide-react";

export default function Worth() {
  return (
    <div className="bg-orangecmi">
      <div className="container text-darkcmi py-16">
        <div className="md:flex gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl leading-tight font-bold max-w-[500px]">
              Become a Company that is trustworthy and reliable in answering the
              needs of stage lighting and LED Display
            </h1>
          </div>
          <div className="w-full md:w-1/2 pt-12 md:pt-0">
            <ul className="flex flex-col gap-8">
              <li>
                <div className="flex gap-8 items-center">
                  <Cpu size={64} />
                  <div>
                    <h1 className="text-2xl font-semibold">
                      Innovative Technology
                    </h1>
                    <h1 className="text-lg max-w-xl">
                      Actualize Themeselves Through the development of stage
                      lighting technology and multimedia.
                    </h1>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-8 items-center">
                  <Handshake size={64} />
                  <div>
                    <h1 className="text-2xl font-semibold">
                      Integrity and Honor
                    </h1>
                    <h1 className="text-lg max-w-xl">
                      Build integrity, honesty and honor in every aspect of the
                      company’s life as a person and the company itself.
                    </h1>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-8 items-center">
                  <CircleCheckBig size={64} />
                  <div>
                    <h1 className="text-2xl font-semibold">
                      Customer Solution
                    </h1>
                    <h1 className="text-lg max-w-xl">
                      Build customer care that is timely, and provide solution
                      to customer needs.
                    </h1>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-8 items-center">
                  <Workflow size={64} />
                  <div>
                    <h1 className="text-2xl font-semibold">
                      System Integration
                    </h1>
                    <h1 className="text-lg max-w-xl">
                      Build networking and system integration with audio, video,
                      lighting partner.
                    </h1>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
