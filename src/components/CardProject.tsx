import * as React from "react";

import Post from "../assets/images/post.png";
import { Button, Image } from "@nextui-org/react";
import { Github, Globe } from "lucide-react";

export default function CardProject() {
  return (
    <div className="flex flex-col max-w-[488px] md:flex-row gap-4 ">
      <div className="flex flex-col text-start max-w-xl space-y-3">
        <Image
          className="rounded-none "
          alt="NextUI hero Image"
          src={Post}
        />
        <h3>Blood Bank</h3>
        <p className="text-sm text-foreground-400 font-light">
          UX/UI Design, Front-end e Back-end.
        </p>
        <p className="text-base font-normal text-foreground-800 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi
          deserunt at quas.{" "}
        </p>

        <div className="flex justify-start gap-2">
          <Button
            variant="solid"
            className="w-full lg:w-fit"
            color="primary"
          >
            <Globe size={18} />
            Visitar
          </Button>

          <Button
            variant="solid"
            className="w-full lg:w-fit bg-black"
            color="primary"
          >
            <Github size={18} />
            Repositório
          </Button>
        </div>
      </div>
    </div>
  );
}
