import React from "react";
// Components
import ComparisonTable from "../../components/servicesInfo/AcInstalation/ComparisonTable";
import BTUTable from "../../components/servicesInfo/AcInstalation/BTUTable";
import AirePisoCieloCard from "../../components/servicesInfo/AcInstalation/AirePisoCieloCard";
// 
import { AirConditionerCard } from "../../components/servicesInfo/AcInstalation/AirConditionerCard";
// Icons
import { WiThermometer, WiStrongWind, WiSnow } from "react-icons/wi";
// Assets 
import acConvencional from "../../assets/services/acInstallation/acConvencional.jpg";

const AcInstallationPage = () => {
  return (
    <div className="container mx-auto p-4 mt-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        Instalación de Aires Acondicionados
      </h1>
      <p className="text-lg text-center mb-8">
        Ofrecemos instalación de aires acondicionados de pared, convencionales e
        inverter. Conozca las diferencias y elija el equipo que mejor se adapte
        a sus necesidades.
      </p>

      <div className="flex justify-center space-x-8 mb-8">
        {/* Aire Convencional */}
        <AirConditionerCard
          name="Aire Convencional"
          imageSrc={acConvencional}
          rating={5.0}
          features={[
            {
              tooltip: "Eficiencia baja",
              icon: <WiThermometer className="h-5 w-5" />,
            },
            {
              tooltip: "Ruido moderado",
              icon: <WiStrongWind className="h-5 w-5" />,
            },
          ]}
        />

        {/* Aire Inverter */}
        <AirConditionerCard
          name="Aire Inverter"
          imageSrc={acConvencional}
          rating={5.0}
          features={[
            {
              tooltip: "Alta eficiencia energética",
              icon: <WiSnow className="h-5 w-5" />,
            },
            {
              tooltip: "Ruido bajo",
              icon: <WiStrongWind className="h-5 w-5" />,
            },
          ]}
        />
      </div>

      <h1 className="text-3xl font-bold text-center mb-4">
        ¿Qué aire acondicionado elegir?
      </h1>
      <p className="text-lg text-center mb-8">
        Ofrecemos instalación de aires acondicionados de pared, convencionales e
        inverter. Conozca las diferencias y elija el equipo que mejor se adapte
        a sus necesidades.
      </p>

      {/* Tabla comparativa */}
      <ComparisonTable />

      {/* Nuevo título antes de la tabla de BTU */}
    <h2 className="text-2xl font-semibold text-center my-6">
      ¿Cómo elegir el modelo según los BTU?
    </h2>
    <p className="text-lg text-center mb-4">
      Elige el tamaño de tu aire acondicionado basándote en el tamaño de la habitación
      y las condiciones recomendadas. A continuación te mostramos la tabla de referencia.
    </p>

      {/* Tabla de BTU */}
      <BTUTable />

        {/* Nuevo componente de aire industrial */}
        <h2 className="text-2xl font-semibold text-center mt-12 mb-2">
        ¿Necesitas algo mas grande? 
      </h2>
      <AirePisoCieloCard />

    </div>
  );
};

export default AcInstallationPage;
