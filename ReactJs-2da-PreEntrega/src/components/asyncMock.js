import imagenes from "./imagenes"
const productos = [
  {
    id: 1,
    img: imagenes.img1,
    title: "Fichero doble mixto negro y caoba",
    text: (
      <>
        FICHERO DOBLE REFORZADO CON LLAVE,<br />
        LARGO X ANCHO X PROFUNDIDAD 66cm x 47cm x 50cm, <br />
        PESO MAXIMO SOPORTADO POR CAJON: 100KG,<br />
      </>
    ),
    precio: 46990,
    categoria: "ARMARIOS"
  },
  {
    id: 2,
    img: imagenes.img2,
    title: "Armario alto de 2 puertas",
    text: (
      <>
        ARMARIO METALICO REFORZADO CON LLAVE, <br />
        LARGO X ANCHO X PROFUNDIDAD 185cm x 85cm x 40cm<br />
        PUERTAS METALICAS,<br />
        REPISAS MODULARES,<br />
      </>
    ),
    precio: 138600,
    categoria: "ARMARIOS"
  },
  {
    id: 3,
    img: imagenes.img3,
    title: "Armario doble de madera",
    text: (
      <>
        ARMARIO DOBLE DE MADERA CAOBA, <br />
        LARGO X ANCHO X PROFUNDIDAD 185cm x 85cm x 40cm,<br />
        REPISAS MODULARES,<br />
        IDEAL OFICINA,<br />
      </>
    ),
    precio: 110400,
    categoria: "ARMARIOS"
  },
  {
    id: 4,
    img: imagenes.img4,
    title: "Cajonera alta con ruedas",
    text: (
      <>
        CAJONERA METALICA CON RUEDAS, <br />
        LARGO X ANCHO X PROFUNDIDAD 145cm x 75cm x 40cm,<br />
        CAJONES EXTRA REFORZADOS,<br />
        OPCIONAL CON LLAVE,<br />
      </>
    ),
    precio: 90800,
    categoria: "CAJONERAS"
  },
  {
    id: 5,
    img: imagenes.img5,
    title: "Cajonera mixta con llave",
    text: (
      <>
        CAJONERA MADERA COLORES MIXTO CON LLAVE, <br />
        LARGO X ANCHO X PROFUNDIDAD 66cm x 47cm x 50cm,<br />
        CAJONES SUPER AMPLIOS,<br />
      </>
    ),
    precio: 80670,
    categoria: "CAJONERAS"
  },
  {
    id: 6,
    img: imagenes.img6,
    title: "Cajonera mixta con repisas",
    text: (
      <>
        CAJONERA DOBLE MIXTA DE MADERA CON REPISAS, <br />
        LARGO X ANCHO X PROFUNDIDAD 145cm x 75cm x 40cm,<br />
        PUERTAS CON VIDRIO,<br />
      </>
    ),
    precio: 140900,
    categoria: "CAJONERAS"
  },{
    id: 7,
    img: imagenes.img7,
    title: "Escritorio en L",
    text: (
      <>
        ESCRITORIO DOBLE EN L SUPERPUESTOS, <br />
        CAJONERAS CON LLAVE<br />
        COLORES MIXTOS,<br />
        LARGO X ANCHO X PROFUNDIDAD 139cm x 75cm x 60cm,<br />
      </>
    ),
    precio: 84500,
    categoria: "ESCRITORIOS"
  },
  {
    id: 8,
    img: imagenes.img8,
    title: "Escritorio simple",
    text: (
      <>
        ESCRITORIO COLORES MIXTO SIMPLE, <br />
        CAJONES CON LLAVE<br />
        LARGO X ANCHO X PROFUNDIDAD 139cm x 75cm x 60cm,<br />
        
      </>
    ),
    precio: 70460,
    categoria: "ESCRITORIOS"
  },
  {
    id: 9,
    img: imagenes.img9,
    title: "Escritorio en U",
    text: (
      <>
        ESCRITORIO FORMATO U, <br />
        LARGO X ANCHO X PROFUNDIDAD 145cm x 85cm x 80cm,<br />
        COLORES MIXTOS,<br />
        CAJONES CON LLAVE,<br />
      </>
    ),
    precio: 120800,
    categoria: "ESCRITORIOS"
  },
  {
    id: 10,
    img: imagenes.img10,
    title: "Silla escritorio simple",
    text: (
      <>
        SILLA ERGONOMICA CON APOYA BRAZOS, <br />
        RUEDAS PLASTICAS,<br />
        REGULABLE EN ALTURA,<br />
      </>
    ),
    precio: 45560,
    categoria: "SILLAS"
  },
  {
    id: 11  ,
    img: imagenes.img11,
    title: "Silla respaldo con ventilacion",
    text: (
      <>
        SILLA ERGONOMICA CON APOYA BRAZOS, <br />
        VENTILACION EN ZONA DE ESPALDA<br />
        REGULABLE EN ALTURA Y PROFUNDIDAD,<br />
      </>
    ),
    precio: 60900,
    categoria: "SILLAS"
  },
  {
    id: 12,
    img: imagenes.img12,
    title: "Sillon imperial ",
    text: (
      <>
        SILLON IMPERIAL ALCOCHADO CON APOYA BRAZOS Y CABEZAS, <br />
        RUEDAS METALICAS REFORZADAS,<br />
        REGULABLE EN ALTURA Y PROFUNDIDAD,<br />
      </>
    ),
    precio: 110200,
    categoria: "SILLAS"
  },
  

];

function fetchProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
}

export default fetchProductos;
