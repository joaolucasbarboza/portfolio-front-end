import * as React from "react";

import Post from "../assets/images/post.png";
import {
  Button,
  Chip,
  Code,
  Divider,
  Image,
  ScrollShadow,
} from "@nextui-org/react";
import { Github, Globe } from "lucide-react";

export function CardProjectApiPortfolio() {
  return (
    <div className="flex flex-col max-w-[488px] border md:flex-row gap-4 ">
      <div className="flex flex-col text-start max-w-xl space-y-3">
        <Image
          className="rounded-none "
          alt="NextUI hero Image"
          src={Post}
        />

        <div className="max-w-md border">
          <div className="space-y-1">
            <h4 className="text-2xl font-semibold">NextUI Components</h4>
            <p className="text-small text-default-400 font-light">
              Beautiful, fast and modern React UI library.
            </p>
          </div>

          <Divider className="my-4 w-full" />

          
        </div>

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
