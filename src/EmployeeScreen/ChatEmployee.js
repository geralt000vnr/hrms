// import React, { useEffect, useState } from "react";
// import io from "socket.io-client";

// const socket = io();

function ChatEmployee() {
  // const [isConnected, setIsConnected] = useState(socket.connected);
  // const [lastPong, setLastPong] = useState(null);

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     setIsConnected(true);
  //   });

  //   socket.on("disconnect", () => {
  //     setIsConnected(false);
  //   });

  //   socket.on("pong", () => {
  //     setLastPong(new Date().toISOString());
  //   });

  //   return () => {
  //     socket.off("connect");
  //     socket.off("disconnect");
  //     socket.off("pong");
  //   };
  // }, []);

  // const sendPing = () => {
  //   socket.emit("ping");
  // };

  // return (
  //   <div>
  //     <p>Connected: {"" + isConnected}</p>
  //     <p>Last pong: {lastPong || "-"}</p>
  //     <button onClick={sendPing}>Send ping</button>
  //   </div>
  // );
  return (
    <div className="min-table-height">
      <div className="mt-10 lg:-mt-80 ml-5 lg:ml-16 mr-5 lg:mr-96 h-auto bg-gray-200 dark:bg-gray-800 w-auto rounded-lg">
        <div className="bg-white dark:bg-gray-900 dark:text-white px-10 py-5 rounded-t-lg text-3xl font-semibold text-gray-900">
          Chat Page
        </div>

        <div className="w-auto">
          <div className="grid lg:grid-cols-3 grid-cols-1 min-w-full border dark:border-gray-700 rounded min-h-0 lg:min-h-[80vh]">
            <div className="col-span-1 bg-white dark:bg-slate-800 border-r border-gray-300 dark:border-gray-700">
              <div className="my-3 mx-3 ">
                <div className="relative text-gray-600 dark:border-gray-100 focus-within:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </span>
                  <input
                    aria-placeholder="Search Chat"
                    placeholder="Search Chat"
                    className="py-2 pl-10 block w-full rounded bg-gray-100 dark:bg-gray-900 outline-none focus:text-gray-700 dark:focus:text-gray-400"
                    type="search"
                    name="search"
                    required
                    autoComplete="search"
                  />
                </div>
              </div>

              <ul className="overflow-auto">
                <h2 className="ml-2 mb-2 text-gray-600 text-lg my-2">Chats</h2>
                <li>
                  <a
                    href="/"
                    className="hover:bg-gray-100 dark:hover:bg-gray-900 border-b border-gray-300 dark:border-gray-700 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out"
                  >
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                      alt="username"
                    />
                    <div className="w-full pb-2">
                      <div className="flex justify-between">
                        <span className="block ml-2 font-semibold text-base text-gray-600 dark:text-gray-400">
                          Aman Tiwari
                        </span>
                        <span className="block ml-2 text-sm text-gray-600 dark:text-gray-400">
                          5 minutes
                        </span>
                      </div>
                      <span className="block ml-2 text-sm text-gray-600 dark:text-gray-400">
                        Hello world!!
                      </span>
                    </div>
                  </a>
                  <a
                    href="/"
                    className="bg-gray-100 dark:bg-gray-700 border-b dark:hover:bg-gray-900 border-gray-300 dark:border-gray-700 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out"
                  >
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                      alt="username"
                    />
                    <div className="w-full pb-2">
                      <div className="flex justify-between">
                        <span className="block ml-2 font-semibold text-base text-gray-600 dark:text-gray-400">
                          Susu
                        </span>
                        <span className="block ml-2 text-sm text-gray-600 dark:text-gray-400">
                          15 minutes
                        </span>
                      </div>
                      <span className="block ml-2 text-sm text-gray-600 dark:text-gray-400">
                        here we go again
                      </span>
                    </div>
                  </a>
                  <a
                    href="/"
                    className="hover:bg-gray-100 dark:hover:bg-gray-900 border-b border-gray-300 dark:border-gray-700 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out"
                  >
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src="https://images.pexels.com/photos/6238133/pexels-photo-6238133.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                      alt="username"
                    />
                    <div className="w-full pb-2">
                      <div className="flex justify-between">
                        <span className="block ml-2 font-semibold text-base text-gray-600 dark:text-gray-400">
                          Prime Minister
                        </span>
                        <span className="block ml-2 text-sm text-gray-600 dark:text-gray-400">
                          1 hour
                        </span>
                      </div>
                      <span className="block ml-2 text-sm text-gray-600 dark:text-gray-400">
                        Last message
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 bg-white dark:bg-gray-800">
              <div className="w-full">
                <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pl-3 py-3">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt="username"
                  />
                  <span className="block ml-2 font-bold text-base text-gray-600 dark:text-slate-300">
                    Susu
                  </span>
                  <span className="connected text-green-500 ml-2">
                    <svg width="6" height="6">
                      <circle cx="3" cy="3" r="3" fill="currentColor"></circle>
                    </svg>
                  </span>
                </div>
                <div
                  id="chat"
                  className="w-full overflow-y-auto p-10 relative"
                  style={{ height: "700px" }}
                >
                  <ul>
                    <li className="clearfix2">
                      <div className="w-full flex justify-start">
                        <div
                          className="bg-gray-100 dark:bg-gray-600 rounded px-5 py-2 my-2 text-gray-700 dark:text-slate-300 relative"
                          style={{ maxWidth: "300px" }}
                        >
                          <span className="block">Hello bro</span>
                          <span className="block text-xs text-right">
                            10:30pm
                          </span>
                        </div>
                      </div>
                      <div className="w-full flex justify-end">
                        <div
                          className="bg-gray-100 dark:bg-blue-800 rounded px-5 py-2 my-2 text-gray-700 dark:text-slate-300 relative"
                          style={{ maxWidth: "300px" }}
                        >
                          <span className="block">Hello</span>
                          <span className="block text-xs text-left">
                            10:32pm
                          </span>
                        </div>
                      </div>
                      <div className="w-full flex justify-end">
                        <div
                          className="bg-gray-100 dark:bg-blue-800 rounded px-5 py-2 my-2 text-gray-700 dark:text-slate-300 relative"
                          style={{ maxWidth: "300px" }}
                        >
                          <span className="block">how are you?</span>
                          <span className="block text-xs text-left">
                            10:32pm
                          </span>
                        </div>
                      </div>
                      <div className="w-full flex justify-start">
                        <div
                          className="bg-gray-100 dark:bg-gray-600 rounded px-5 py-2 my-2 text-gray-700 dark:text-slate-300 relative"
                          style={{ maxWidth: "300px" }}
                        >
                          <span className="block">I am fine</span>
                          <span className="block text-xs text-right">
                            10:42pm
                          </span>
                        </div>
                      </div>
                      <div className="w-full flex justify-end">
                        <div
                          className="bg-gray-100 dark:bg-blue-800 rounded px-5 py-2 my-2 text-gray-700 dark:text-slate-300 relative"
                          style={{ maxWidth: "300px" }}
                        >
                          <span className="block">here we go again</span>
                          <span className="block text-xs text-left">
                            10:52pm
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="w-full py-3 px-3 flex items-center justify-between border-t border-gray-300 dark:border-gray-700">
                  <button className="outline-none focus:outline-none">
                    <svg
                      className="text-gray-400 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                  <button className="outline-none focus:outline-none ml-1">
                    <svg
                      className="text-gray-400 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      />
                    </svg>
                  </button>

                  <input
                    aria-placeholder="Escribe un mensaje aquí"
                    placeholder="Type Your Message..."
                    className="py-2 mx-3 pl-5 block w-full rounded-full bg-gray-100 dark:bg-zinc-900 outline-none focus:text-gray-700 dark:focus:text-zinc-300 dark:placeholder-slate-400 dark:text-zinc-400"
                    type="text"
                    name="message"
                    required
                  />

                  <button
                    className="outline-none focus:outline-none"
                    type="submit"
                  >
                    <svg
                      className="text-gray-400 h-7 w-7 origin-center transform rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatEmployee;
