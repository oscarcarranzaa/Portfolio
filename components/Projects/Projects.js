import ExpressIcon from "../Icons/Express";
import Mongodb from "../Icons/Mongodb";
import NextjsIcon from "../Icons/Nextjs";
import NodejsIcon from "../Icons/Nodejs";
import ReactIcon from "../Icons/React";
import TailwindcssIcon from "../Icons/Tailwindcss";

const Pro = [
  {
    id: 1,
    name: "Nueva Letra",
    url: "https://nuevaletra.oscarcarranza.cf/",
    repo: "https://github.com/oscarcarranzaa/Nueva-Letra",
    image: "https://i.ibb.co/2kzNhKY/Captura-de-pantalla-76.png",
    technologies: [
      {
        name: "React",
        icon: <ReactIcon fill={"#5CCFEE"} />,
      },
      {
        name: "Nextjs",
        icon: <NextjsIcon />,
      },
      {
        name: "Tailwind",
        icon: <TailwindcssIcon />,
      },
      {
        name: "Nodejs",
        icon: <NodejsIcon fill={"#4F9640"} />,
      },
      {
        name: "Express",
        icon: <ExpressIcon />,
      },
      {
        name: "Mongo DB",
        icon: <Mongodb />,
      },
    ],
  },
];
export default Pro;
