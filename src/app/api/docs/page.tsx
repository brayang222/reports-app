import { Button } from "@/components/ui/button";
import Link from "next/link";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const page = () => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="flex gap-12 items-center my-16">
        <Link href="/">
          <Button variant="default" className="cursor-pointer">
            Volver al inicio
          </Button>
        </Link>
        <h4 className="text-2xl font-bold">Documentación</h4>
      </div>
      <SwaggerUI url="../swagger.json" />
    </div>
  );
};

export default page;
