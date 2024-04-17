import * as React from "react";

import Post from "../assets/images/post.png";
import { Button, Chip, Divider, Image, ScrollShadow } from "@nextui-org/react";
import { Github, Globe } from "lucide-react";

export function CardProject() {
  return (
    <div className="flex flex-col max-w-[488px] md:flex-row gap-4 ">
      <div className="flex flex-col text-start max-w-fit space-y-3">
        <Image
          className="rounded-none "
          alt="NextUI hero Image"
          src={Post}
        />

        <h3>Blood Bank</h3>
        <p className="text-sm text-foreground-400 font-light">
          UX/UI Design, Front-end e Back-end.
        </p>
        <p className="text-base font-normal max-w-[488px] text-foreground-800 w-full max-h-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi
          deserunt at quas.{" "}
        </p>

        <ScrollShadow
          hideScrollBar
          offset={100}
          orientation="horizontal"
          className="w-[403px] sm:w-full"
        >
          <div className="flex items-center my-4 gap-2 text-small max-w-[488px]">
            <div>Java</div>
            <Divider orientation="vertical" />
            <div>
              <p className="truncate">Spring boot</p>
            </div>
            <Divider orientation="vertical" />
            <div>MySQL</div>
            <Divider orientation="vertical" />
            <div>MySQL</div>
            <Divider orientation="vertical" />
            <div>MySQL</div>
            <Divider orientation="vertical" />
            <div>MySQL</div>
            <Divider orientation="vertical" />
            <div>MySQL</div>
            <Divider orientation="vertical" />
            <div>MySQL</div>
            <Divider orientation="vertical" />
            <div>MySQL</div>
            <Divider orientation="vertical" />
            <div>MySQL</div>
            <Divider orientation="vertical" />
            <div>MySQL</div>
            <Divider orientation="vertical" />
            <div>MySQL</div>
            <Divider orientation="vertical" />
            <div>MySQL</div>
            <Divider orientation="vertical" />
            <div>MySQL</div>
            <Divider orientation="vertical" />
            <div>MySQL</div>
          </div>
        </ScrollShadow>

        <Chip
          variant="dot"
          color="warning"
        >
          Em desenvolvimento
        </Chip>

        <div className="flex justify-start gap-2">
          <Button
            isDisabled
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
