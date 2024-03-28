import * as React from "react";

import Post from "../assets/images/post.png";
import { Button, Image } from "@nextui-org/react";

export default function CardProject() {
  return (
    <div className="flex flex-col  max-w-[488px] md:flex-row gap-4 ">
      <div className="flex flex-col max-w-xl space-y-3">
        <Image
          className="rounded-none w-[488px] "
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

        <Button
          variant="solid"
          className="w-full md:w-fit"
          color="primary"
        >
          Visitar
        </Button>
      </div>
    </div>
  );
}
