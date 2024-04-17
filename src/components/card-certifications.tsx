import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import React from "react";

interface types {
  textChip: string;
  title: string;
  date: string;
  codeCredential: string;
  srcImage: any;
  locationCourse: string;
  sizeChips: any;
  colorChips: any;
  childrenLink: any;
  hrefLink: any
}

export function CardCertifications({
  textChip,
  title,
  date,
  childrenLink,
  srcImage,
  locationCourse,
  sizeChips,
  colorChips,
  hrefLink
}: types) {
  return (
    <Card
      className="max-w-80 min-w-[300px]"
      shadow="none"
    >
      <CardHeader className="flex gap-3">
        <div className="flex flex-col gap-2">
          <Image
            className="w-12"
            alt="nextui logo"
            radius="sm"
            src={srcImage}
          />
          <p className="text-xl text-start text-foreground-700">{title}</p>
          <div className="flex items-center gap-2">
            <p className="text-small text-default-500">{locationCourse}</p>
            <Divider orientation="vertical" />
            <Chip
              variant={"flat"}
              size={sizeChips}
              color={colorChips}
            >
              {textChip}
            </Chip>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-sm font-light text-foreground-500">
          Verificação emitida em: {date}
        </p>
        {/* <p className="text-sm font-light text-foreground-500">
          Código credencial: {codeCredential}
        </p> */}
      </CardBody>
      {/* <Divider /> */}
      {/* <CardFooter>
        <Link
          className="cursor-pointer"
          {...childrenLink}
          isExternal
          showAnchorIcon
          href={hrefLink}
        >
          Exibir credencial
        </Link>
      </CardFooter> */}
    </Card>
  );
}
