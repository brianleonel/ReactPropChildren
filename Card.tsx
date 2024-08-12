import { ReactNode } from "react";

interface Props{/*se declara la estructura de la propiedad */
  children: ReactNode;//ReactNode es un tipo de dato
}
//children me permite q props sea cualquier tipo de dato
function Card(props: Props){/*argumentos q recibe la funcion, NombrePropiedad: tipoPropiedad */
  const { children }= props;//desestructuracion:se extraen las propiedades de props y se asignan a children
  return (
  <>
    <div>{children}</div>
  </>);
}
//mediante a la propiedad children CardBody se pasa al componente Card
interface CardBodyProps{
  title: string
  text: string
}
export function CardBody(props: CardBodyProps){//exportacion nombrada
  const {title,text}=props;
  return (<>
  <h5>{title}</h5>
  <p>{text}</p>
  </>);
}
export default Card;//exportacion por defecto
/*la propiedad children me permite pasar componentes entre 
componentes, se reutilizan componentes */