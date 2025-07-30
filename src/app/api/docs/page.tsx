import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const page = () => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <h4 className="text-2xl font-bold mt-8">Documentación</h4>
      <SwaggerUI url="../swagger.json" />
    </div>
  );
};

export default page;
