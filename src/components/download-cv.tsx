import { Button } from "@nextui-org/react";
import Curriculo from "../assets/curriculo.pdf";
import React from "react";

export function DownloadCV() {
  const downloadCRV = () => {
    fetch(Curriculo).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "curriculo_barboza.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <Button
        variant="shadow"
        color="primary"
        onClick={downloadCRV}
      >
        Baixar currículo
      </Button>
    </>
  );
}
