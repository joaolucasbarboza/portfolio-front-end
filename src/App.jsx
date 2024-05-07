import gsap from "gsap";
import FotoRetrato from "./assets/images/foto_retrato.png";
import logoGoogle from "./assets/images/google.svg";
import LogoAws from "./assets/images/aws.svg";
import LogoAlura from "./assets/images/alura.png";
import LogoUdemy from "./assets/images/udemy.png";
import LogoRocketseat from "./assets/images/rocketseat.png";

import { Link, ScrollShadow } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";
import { Github, Instagram, Linkedin } from "lucide-react";
import { useEffect } from "react";

// import { CardProject } from "./components/card-project-blood-bank";
// import { CardProjectApiPortfolio } from "./components/card-project-api-potfolio";
import { DownloadCV } from "./components/download-cv";
import { CardCertifications } from "./components/card-certifications";

function App() {
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

            <DownloadCV />
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
                href="https://github.com/joaolucasbarboza"
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

      <div className="bg-zinc-100 pb-10">
        <div className="w-full p-4 pt-10 flex text-center md:text-start flex-col gap-8 max-w-5xl m-auto text-2xl font-semibold">
          <div>
            <p>Certificações</p>
          </div>

          <ScrollShadow
            orientation="horizontal"
            className="flex sm:gap-8 py-2 gap-4 max-h-fit"
          >
            <CardCertifications
              srcImage={logoGoogle}
              title="Certificado Profissional Google UX Design"
              locationCourse="Coursera"
              textChip="Em andamento"
              sizeChips={"sm"}
              colorChips="warning"
              date="Ainda não emitido."
              childrenLink={"isDisable"}
            />

            <CardCertifications
              srcImage={LogoAws}
              title="Amazon AWS Cloud Practitioner CLF-C02"
              locationCourse="Udemy"
              textChip="Em andamento"
              sizeChips={"sm"}
              colorChips="warning"
              date="Ainda não emitido."
            />

            <CardCertifications
              srcImage={LogoAlura}
              title="Spring Boot 3: Desenvolva uma API Rest em Java"
              locationCourse="Alura"
              textChip="Concluído"
              sizeChips={"sm"}
              colorChips="success"
              date="Fevereiro de 2024"
            />

            <CardCertifications
              srcImage={LogoAlura}
              title="Sring Boot 3: Boas práticas e proteja uma API Rest"
              locationCourse="Alura"
              textChip="Concluído"
              sizeChips={"sm"}
              colorChips="success"
              date="Março de 2024."
            />

            <CardCertifications
              srcImage={LogoUdemy}
              title="NextJs e React"
              locationCourse="Udemy"
              textChip="Concluído"
              sizeChips={"sm"}
              colorChips="success"
              date="Fevereiro de 2024."
            />

            <CardCertifications
              srcImage={LogoRocketseat}
              title="NLW Unite - ReactJs"
              locationCourse="Rocketseat"
              textChip="Concluído"
              sizeChips={"sm"}
              colorChips="success"
              date="Abril de 2024."
            />

            <CardCertifications
              srcImage={LogoRocketseat}
              title="NLW IA"
              locationCourse="Rocketseat"
              textChip="Concluído"
              sizeChips={"sm"}
              colorChips="success"
              date="Setembro de 2023."
            />

            <CardCertifications
              srcImage={LogoRocketseat}
              title="Conectar"
              locationCourse="Rocketseat"
              textChip="Concluído"
              sizeChips={"sm"}
              colorChips="success"
              date="Junho de 2022."
            />
          </ScrollShadow>
        </div>
      </div>
    </div>
  );
}

export default App;
