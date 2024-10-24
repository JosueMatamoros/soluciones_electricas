import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
  
  export function CompanyTimeline() {
    return (
      <div className="w-full max-w-3xl mx-auto mb-12">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                2018: Fundación de Grupo SEN
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gray" className="font-normal text-gray-600">
                La empresa se funda en 2018, enfocada inicialmente en soluciones eléctricas 
                para hogares y pequeñas empresas.
              </Typography>
            </TimelineBody>
          </TimelineItem>
  
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                2019: Ampliación de servicios
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gray" className="font-normal text-gray-600">
                En 2019, la empresa amplía sus servicios para incluir sistemas de bombas 
                de agua y soluciones para piscinas, adaptándose a las demandas del mercado.
              </Typography>
            </TimelineBody>
          </TimelineItem>
  
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                2020: Especialización en aires acondicionados
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gray" className="font-normal text-gray-600">
                En 2020, Grupo SEN se especializa en la instalación y mantenimiento de 
                sistemas de aires acondicionados, agregando servicios clave para industrias y hogares.
              </Typography>
            </TimelineBody>
          </TimelineItem>
  
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                2022: Expansión a portones eléctricos
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gray" className="font-normal text-gray-600">
                En 2022, la empresa diversifica su portafolio, ofreciendo instalación 
                y mantenimiento de portones eléctricos, afianzándose en soluciones 
                de automatización para el hogar.
              </Typography>
            </TimelineBody>
          </TimelineItem>
  
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                2023: Consolidación como líderes del mercado
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography variant="small" color="gray" className="font-normal text-gray-600">
                En 2023, Grupo SEN se posiciona como líder en soluciones eléctricas y tecnológicas, 
                cubriendo un amplio espectro de servicios, desde electricidad hasta portones y aires acondicionados.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
  