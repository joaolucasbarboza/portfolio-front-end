import { Button, Link } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";
import FotoRetrato from "./assets/images/foto_retrato.png";
import { useEffect } from "react";
import gsap from "gsap";
import { Github, Linkedin } from "lucide-react";

function App() {
  useEffect(() => {
    gsap.fromTo(
      "#box-img",
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, duration: 2.5 }
    );
  }, []);

  return (
    <div className="min-h-screen  p-4 max-w-5xl m-auto">
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-around items-center pt-4 md:pt-20">
        <div className="flex flex-col justify-start items-center md:max-w-xl md:items-start gap-4">
          <TypeAnimation
            className="max-w-md text-center md:text-start md:w-[448px] font-bold text-zinc-400 text-4xl md:3xl min-h-24 md:min-h-16"
            sequence={[
              `Olá, sou João Lucas Barboza. UI/UX Designer & Full-stack Developer.`,
              6000,
            ]}
            wrapper="span"
          />

          <div>
            <p>
              UX/UI Designer & Front-end no{" "}
              <Link
                isExternal
                showAnchorIcon
                href="https://hub.fema.edu.br/"
                color="primary"
              >
                Hub Inova
              </Link>
            </p>
            <p>
              Graduação em andamento pela{" "}
              <Link
                isExternal
                showAnchorIcon
                href="https://fema.edu.br/"
                color="primary"
              >
                Fema
              </Link>
            </p>
          </div>

          <Button
            className="w-fit"
            variant={"shadow"}
            color="primary"
          >
            Baixar CRV
          </Button>
        </div>

        <div
          id="box-img"
          className="flex flex-col gap-4"
        >
          <img
            className="w-60 h-60"
            src={FotoRetrato}
            alt=""
          />

          <div className="mx-4 flex flex-row justify-between">
            <Link
              href="https://github.com/valladev"
              color="foreground"
              className="text-zinc-500 flex items-center gap-2"
            >
              <Github />
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/jo%C3%A3o-lucas-barboza-3ba6a9230/"
              className="text-zinc-500 flex items-center gap-2"
            >
              <Linkedin />
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
