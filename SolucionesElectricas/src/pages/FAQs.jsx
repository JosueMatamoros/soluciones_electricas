import React from "react";
import { Typography } from "@material-tailwind/react";

const faqs = [
  {
    title: "¿Cómo sé qué tipo de aire acondicionado necesito: inverter o convencional?",
    desc: "La elección entre un aire acondicionado inverter o convencional depende de tus necesidades de eficiencia energética y confort. Los aires inverter son más eficientes en términos de consumo energético y ajustan la velocidad del compresor para mantener una temperatura constante, lo que los hace más silenciosos. Los convencionales, aunque son más económicos al inicio, tienden a consumir más energía a largo plazo y son algo más ruidosos.",
  },
  {
    title: "Mi aire acondicionado no arranca, ¿qué puede estar fallando?",
    desc: "Si tu aire acondicionado no arranca, pueden haber varias causas posibles: problemas con el suministro eléctrico, un termostato defectuoso o un compresor dañado. Revisa primero si el equipo está correctamente conectado y si el disyuntor no se ha disparado. Si todo parece en orden, es recomendable llamar a un técnico para una revisión más a fondo.",
  },
  {
    title: "¿Cuándo sé que mi aire acondicionado necesita mantenimiento?",
    desc: "Algunos signos de que tu aire acondicionado necesita mantenimiento incluyen: menor flujo de aire, ruido inusual, la unidad no enfría adecuadamente o aumenta el consumo eléctrico. En general, se recomienda hacer un mantenimiento preventivo cada seis meses para garantizar un funcionamiento óptimo y evitar averías mayores.",
  },
  {
    title: "¿Qué es un sistema de aire acondicionado de piso techo y cuándo debería considerarlo?",
    desc: "Un sistema de aire acondicionado de piso techo es una solución ideal para espacios amplios como oficinas, salones o locales comerciales. Estos sistemas tienen una mayor capacidad de enfriamiento y suelen ser utilizados en lugares donde los aires acondicionados de pared no son suficientes para mantener la temperatura adecuada.",
  },
  {
    title: "¿Cómo elijo el tamaño adecuado de aire acondicionado para mi habitación?",
    desc: "El tamaño del aire acondicionado depende de la capacidad de enfriamiento (medida en BTU) y el tamaño de la habitación. Una habitación pequeña puede necesitar un aire de 9,000 BTU, mientras que una más grande puede requerir hasta 24,000 BTU. Consulta una tabla de BTU para elegir el modelo adecuado según los metros cuadrados de tu espacio.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container mx-auto">
        <div className="mb-14 text-center ">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 text-4xl !leading-snug lg:text-[40px]"
          >
            Preguntas Frecuentes
          </Typography>
          <Typography
            className="mx-auto font-normal text-[18px] !text-gray-500 lg:max-w-3xl"
          >
            Encuentra aquí las respuestas a las preguntas más comunes sobre la instalación y mantenimiento de aires acondicionados.
          </Typography>
        </div>
        <div className="max-w-3xl mx-auto grid gap-10">
          {faqs.map(({ title, desc }) => (
            <div key={title}>
              <Typography color="blue-gray" className="pb-6 text-[20px] font-bold">
                {title}
              </Typography>
              <div className="border-t border-gray-200 pt-4">
                <Typography className="font-normal !text-gray-500">
                  {desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
