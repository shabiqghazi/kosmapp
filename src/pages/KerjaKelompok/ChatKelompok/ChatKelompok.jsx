import React, { useEffect, useRef, useState } from "react";
import { ChatKelompokHeader } from "../components/ChatKelompokHeader";
import "primeicons/primeicons.css";
import { ChatOutItem } from "./components/ChatOutItem";
import { ChatInItem } from "./components/ChatInItem";

export const ChatKelompok = () => {
  const kelompok = {
    id: 1,
    matkul: "Pengembangan Aplikasi Web",
    kelompok: "Kel.5 Pengembangan Aplikasi Web",
  };
  const chatContainer = useRef();

  useEffect(() => {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, []);
  return (
    <div className="flex flex-col bg-light h-screen w-screen">
      <ChatKelompokHeader className="shrink-0">
        {kelompok.kelompok}
      </ChatKelompokHeader>
      <div
        className="grow overflow-y-auto flex-col-reverse"
        ref={chatContainer}
        id="chatContainer"
      >
        <ChatOutItem />
        <ChatInItem />
        <ChatOutItem />
        <ChatInItem />
        <ChatOutItem />
        <ChatInItem />
        <ChatOutItem />
        <ChatInItem />
        <ChatOutItem />
        <ChatInItem />
        <ChatOutItem />
        <ChatInItem />
        <ChatOutItem />
        <ChatOutItem />
        <ChatOutItem />
        <ChatInItem />
        <ChatOutItem />
        <ChatOutItem />
        <ChatInItem />
        <ChatOutItem />
        <ChatInItem />
        <ChatOutItem />
        <ChatInItem />
        <ChatOutItem />
        <ChatOutItem />
      </div>
      <div className="flex">
        <div className="h-20 bg-white self-end w-full border-t shadow flex items-center px-3 gap-2">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#17252A"
              height={`28px`}
            >
              <path d="M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
            </svg>
          </div>
          <div className="p-2 grow flex items-center">
            <textarea
              rows="1"
              className="w-full border border-secondary rounded-full py-3 px-3 outline-none"
            ></textarea>
          </div>
          <div>
            <i className="pi pi-paperclip text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
