import React from "react";
import "./contactMe.css";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitch } from "react-icons/bs";

export default function ContactMe() {
  const redes = [
    {
      link: "https://github.com/",
      icon: <BsGithub className="github icon-contato" />,
      redeName: "GitHub",
      color: 'text-[#e8eaea]',
    },
  ];
  return (
      <div className="flex flex-wrap w-full justify-center xl:justify-between items-center h-max p-8">
        {redes.map((rede) => (
          <div className="flex flex-col items-center h-full justify-evenly relative">
            <a
              className={`flex flex-col gap-1 items-center justify-center w-[9rem] h-24 px-4 rounded-lg ${rede.color} hover:scale-110 transition-all drop-shadow-[0_0_35px_rgba(255,0,0,0.7)]`}
              href={rede.link}
              target="_blank"
              key={rede.redeName}
            >
              {rede.icon}
              <p className='text-[1.25rem]'>{rede.redeName}</p>
            </a>
          </div>
        ))}
      </div>
  );
}
