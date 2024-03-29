import gsap from "gsap";
import FotoRetrato from "./assets/images/foto_retrato.png";

import { Button, Link } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";
import { Github, Instagram, Linkedin } from "lucide-react";
import { useEffect } from "react";
import Curriculo from "./assets/curriculo.pdf";
import CardProject from "./components/CardProject";

function App() {
  const downloadCRV = () => {
    fetch(Curriculo).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "curriculo.pdf";
        alink.click();
      });
    });
  };

  useEffect(() => {
    gsap.fromTo(
      "#box-img",
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, duration: 2.5 }
    );
  }, []);

  return (
    <div className="space-y-14">
      <div className="min-h-fit p-4 max-w-5xl m-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-around items-center pt-4 md:pt-20">
          <div className="flex flex-col justify-start items-center md:max-w-xl md:items-start gap-4">
            <TypeAnimation
              className="max-w-md text-center md:text-start md:w-[448px] font-bold text-zinc-400 text-4xl md:3xl min-h-24 md:min-h-16"
              sequence={[
                `Olá, sou João Lucas Barboza. UI/UX Designer & Full-stack Developer.`,
                2000,
              ]}
              wrapper="span"
            />

            <div className="flex flex-col text-center md:text-start">
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
              variant="shadow"
              color="primary"
              onClick={downloadCRV}
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

            <div className="mx-4 flex flex-row justify-around">
              <Link
                href="https://github.com/valladev"
                color="foreground"
                className="text-zinc-500 flex items-center gap-2"
              >
                <Github />
              </Link>

              <Link
                href="https://www.linkedin.com/in/jo%C3%A3o-lucas-barboza-3ba6a9230/"
                className="text-zinc-500 flex items-center gap-2"
              >
                <Linkedin />
              </Link>

              <Link
                href="https://www.instagram.com/joaobarbozaaa/"
                className="text-zinc-500 flex items-center gap-2"
              >
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-100 ">
        <div className="w-full p-4 pt-10 flex text-center lg:text-start flex-col gap-4 max-w-5xl m-auto text-2xl font-semibold">
          <div className="space-y-2">
            <h1>Projetos de estudo</h1>
            <p className="text-base text-foreground-400 font-light">
              Projeos não projetados comercialmente, apenas para estudos.
            </p>
          </div>

          <div
            id="card-projects"
            className="flex flex-wrap md:flex-row h-fit gap-4 w-full justify-center lg:justify-start items-center"
          >
            <CardProject />
            <CardProject />
            <CardProject />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
