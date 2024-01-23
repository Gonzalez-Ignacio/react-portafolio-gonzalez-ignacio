import nnSolucionWeb from "../assets/project/NN-Solucion-Web.png";
import colormeMakeup from "../assets/project/mockup-colorme-makeup.png"
import libreAndo from "./../assets/project/mockup-equipo-libreando.png";
import restauranteChino from "../assets/project/Restaurante-Chino.png";
import todoList from "../assets/project/todoList.png";
import restauranteGorgory from "../assets/project/Restaurante-Gorgory.png";

export const links = [
	{
		name: "Inicio",
		hash: "inicio",
	},
	{
		name: "Perfil",
		hash: "perfil",
	},	
	{
		name: "Proyectos",
		hash: "proyectos",
	},
	{
		name: "Habilidades",
		hash: "skills",
	},
	{
		name: "Contacto",
		hash: "contacto",
	},
];


export const softSkillsData = [
	"Trabajo en equipo",
	"Adaptabilidad",
	"Pensamiento Critico",
];

export const projectsData = [
	{
		title: "NN Solución Web",
		description:
			"Esta es mi propia página en donde junto a mi colega realizamos en React una web en la que la usaremos para que nuestros clientes puedan pedirnos realizar una web. Aquí, ellos podrán ver en una seccion de plantillas donde estan todas las paginas de nuestros clientes y otros plantillas/modelos de paginas. ",
		tags: ["Html", "Css", "Bootstrap", "JavaScript"],
		imageUrl: nnSolucionWeb,
		link:'https://colormemakeup.art/'
	},
	{
		title: "Colorme-Makeup",
		description:
			"Un portfolio profesional. En este trabajo se muestra material artístico, sin perder la oportunidad de interactuar con la persona directamente por los medios de comunicación brindados. ",
		tags: ["Html", "Css", "Bootstrap", "JavaScript"],
		imageUrl: colormeMakeup,
		link:'https://colormemakeup.art/'
	},
	{
		title: "Equipo LibreAndo",
		description:
			"Esta página web fué la segunda página para mi cliente. Usando React creamos junto a mi colega una web donde muestra el basto conocimiento de los profesionales y su calidad de atención. ",
		tags: ["React", "Css", "Bootstrap", "React-Router-DOM"],
		imageUrl: libreAndo,
		link:'https://libreando.ar/'
	},
	{
		title: "Restaurante Chino UTN-BA-Multiplícate-2.0",
		description:
			"Este proyecto forma parte del curso de UTN-BA-Multiplícate-2.0. En este curso profundice mis conocimientos y realice mi primer carrito de compras",
		tags: ["Html", "Css", "Bootstrap", "JavaScript"],
		imageUrl: restauranteChino,
		link:'https://grupo8-argentina-programa.vercel.app/'
	},
	{
		title: "Todo-List UTN-AP-4.0",
		description:
			"Esta es la continuación de Argentina Programa 4.0-UTN. Utilizamos React para realizar un Todo-List utilizando conceptos básicos como: Mapeo, Estados(state, useEffect) y creaciones de componentes.",
		tags: ["React", "Css", "Tailwind", "JavaScript"],
		imageUrl: todoList,
		link:'https://grupo8-argentina-programa.vercel.app/'
	},
	{
		title: "Restaurante Gorgory UTN-AP-4.0",
		description:
			"Esta página web fué mi comienzo en el mundo de la programación. Mi primer proyecto y trabajo en equipo en el curso de Argentina Programa 4.0-UTN.  ",
		tags: ["Html", "Css", "Bootstrap", "JavaScript"],
		imageUrl: restauranteGorgory,
		link:'https://libreando.ar/'
	},
];
