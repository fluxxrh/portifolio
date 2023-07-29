import React from "react";
import "./aboutme.css";
import Typed from "typed.js";
import ContactMe from "../../contactMe/contactMe";

export default function AboutMe() {
  const typing = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(typing.current, {
      strings: [
        "> Desenvolvedor Full-Stack ^1000 `<p>> npm install</p>` ^1000 `<p>> installing components...</p>` ^1000 `<p>> Fetching from source...</p>` ^1000 `> Added 2 packages, found 0 vulnerabilities...` ",
        "> Desenvolvedor Web^1000 `<p>> npm install</p>` ^1000 `<p>> installing components...</p>` ^1000 `<p>> Fetching from source...</p>` ^1000 `> Added 2 packages, found 0 vulnerabilities...`",
      ],
      typeSpeed: 50,
      backSpeed: 5,
      showCursor: false,
      smartBackspace: false,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row h-auto min-h-[500px] justify-evenly max-w-[1360px]"
      id="aboutme"
    >
      <div className="flex flex-col px-4 items-start md:justify-start m-auto w-full md:w-[45%] min-h-[20rem] py-4">
        <p className="text-[1.6rem] md:text-[2rem] text-[#ff3232]">Arthur Dev <span className="text-[0.75rem] font-[300] text-[#ff323290]">(dudu)</span></p>
        <div className="flex">
          <span className="flex flex-col text-[1.25rem] md:text-[1.5rem] font-[300]" ref={typing}></span>
        </div>
      </div>
      <div className="flex flex-col justify-center m-auto md:m-auto w-full px-4 md:w-[50%] min-h-[20rem] md:text-center rounded">
        <p className="text-[1.3rem] font-[300]">
        Olá! Meu nome é Arthur e sou um jovem desenvolvedor Full-Stack
        apaixonado por tecnologia e programação. Com apenas 16 anos, tenho
        uma grande paixão por aprender e aprimorar minhas habilidades em desenvolvimento
        de software, com um foco especial na linguagem de programação Lua.
        </p>
        <div>
            <ContactMe />
        </div>
      </div>
    </div>
  );
}
