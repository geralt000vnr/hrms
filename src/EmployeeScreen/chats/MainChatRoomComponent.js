import moment from "moment";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../api/httpServices";

export default function MainChatRoomComponent({
  messageArr,
  handleSubmit,
  user,
  msgValue,
  setMsgValue,
  selectedUser,
}) {
  const { id } = useParams();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageArr]);
  console.log("consosolle", selectedUser);
  return (
    <div>
      <div style={{ height: "400px" }}>
        <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pl-3 py-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={baseURL + (selectedUser && selectedUser.profilePic)}
            alt="username"
          />
          <span className="block ml-2 font-bold text-base text-gray-600 dark:text-slate-300">
            {selectedUser &&
              selectedUser.firstName + " " + selectedUser.lastName}
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
          style={{ height: "400px" }}
        >
          <ul>
            <li className="clearfix2">
              {messageArr &&
                messageArr.map((item) => {
                  return (
                    <div
                      className={`w-full flex justify-${
                        item.senderId !== user._id ? "start" : "end"
                      }`}
                      key={item._id}
                    >
                      <div
                        className={`bg-gray-100 ${
                          item.senderId !== user._id
                            ? "dark:bg-gray-600"
                            : "dark:bg-blue-800"
                        } rounded px-5 py-2 my-2 text-gray-700 dark:text-slate-300 relative`}
                        style={{ maxWidth: "300px" }}
                      >
                        <span className="block">{item.msgValue}</span>
                        <span className="block text-xs text-right">
                          {moment(item.sendTime).format("YYYY-MM-DD HH:MM")}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </li>
          </ul>
          <div ref={messagesEndRef} />
        </div>

        <form
          className="w-full py-3 px-3 flex items-center justify-between border-t border-gray-300 dark:border-gray-700"
          onSubmit={(e) => handleSubmit(e)}
        >
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
            value={msgValue}
            onChange={(e) => setMsgValue(e.target.value)}
          />

          <button
            className="outline-none focus:outline-none"
            type="submit"
            // onClick={(e) => handleSubmit(e)}
            onSubmit={(e) => handleSubmit(e)}
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
        </form>
      </div>
    </div>
  );
}
