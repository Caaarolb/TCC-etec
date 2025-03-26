import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Equipe() {
  const membros = [
    { nome: "Letícia Gouvêa da Silva", foto: "https://i.ibb.co/Q7Jd60Z3/1718312244281.jpg", github: "https://github.com/LeticiaG29/MauiAppMinhasCompras.git", linkedin: "https://www.linkedin.com/in/leticia-gouv%C3%AAa-4b9974227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { nome: "Jeisa Boaventura", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/WhatsApp%20Image%202025-02-27%20at%2015.30.16.jpeg?updatedAt=1740681564502", github: "https://github.com/Caaarolb", linkedin: "https://www.linkedin.com/in/-caroline-boaventura/" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center py-10 pt-20">
      <h1 className="text-red-300 dark:text-lime-300 text-4xl lg:text-5xl font-bold mb-10">
        Nossa Equipe
      </h1>
      <p className="text-gray-500 text-sm mb-10 text-center max-w-2xl tracking-wide leading-5">
        Somos técnicas e desenvolvedoras apaixonadas por tecnologia, inovação e qualidade. Juntas, transformamos desafios em soluções eficientes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {membros.map((membro, index) => (
          <div
            key={index}
            className="bg-red-200 dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300 transform group"
          >
            <img
              src={membro.foto}
              alt={membro.nome}
              className="w-32 h-32 rounded-full mb-4 object-cover transition-transform duration-300 ease-in-out group-hover:scale-115"
            />
            <h2 className="text-lg font-bold text-black dark:text-white">{membro.nome}</h2>
            <h2 className="text-lg font-semibold text-black dark:text-gray-300">Dev</h2>
            <div className="flex space-x-4 mt-2">
              <a
                href={membro.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8daf66] dark:bg-lime-100 p-2 rounded-full hover:scale-110 hover:bg-verde dark:hover:bg-lime-500 transition-all duration-200"
              >
                <GithubLogo size={26} weight="thin" className="text-black dark:text-white" />
              </a>
              <a
                href={membro.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8daf66] dark:bg-lime-100 p-2 rounded-full hover:scale-110 hover:bg-verde dark:hover:bg-lime-500 transition-all duration-200"
              >
                <LinkedinLogo size={26} weight="thin" className="text-black dark:text-white" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Equipe;
