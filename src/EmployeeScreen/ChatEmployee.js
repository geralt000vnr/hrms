/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import io from "socket.io-client";
import { chatMsg, getChatsList, getMessage, searchUser } from "../api";
import { baseURL } from "../api/httpServices";
import MainChatRoomComponent from "./chats/MainChatRoomComponent";

// const socket = io.connect("http://localhost:4000"); // uncomment this when want to use socket
let socket;

function ChatEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [msgValue, setMsgValue] = useState("");
  const [messageArr, setMessageArr] = useState([]);
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [search, setSearch] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);

  let user = JSON.parse(localStorage.getItem("UserDetails"));

  useEffect(() => {
    getChatsList(user._id)
      .then((res) => {
        let tempVal = res.data.map((item) => {
          if (item.senderId._id === user._id) {
            return { ...item, userDetails: item.recieverId };
          }
          return { ...item, userDetails: item.senderId };
        });
        // let chatList = res.data.filter((item) => item._id !== user._id);
        setUserList(tempVal);
      })
      .catch((err) => console.error("error :", err));
    // chatMsg()
    //   .then((res) => setMessageArr(res.data))
    //   .catch((err) => console.error("error :", err));
    socket.on("connect", () => {
      console.log("connect run in front");
    });

    socket.on("disconnect", () => {
      console.log("disconnect run in front");
    });
  }, []);

  socket.on("chat message recieve", function (msg) {
    let tempValue = [];
    tempValue = messageArr;
    if (!tempValue.find((item) => item.id === msg.id)) {
      console.log(
        "consosomsg",
        msg,
        msg.senderId === user._id || msg.recieverId === user._id,
      );
      if (msg.senderId === user._id || msg.recieverId === user._id) {
        tempValue.push(msg);
        setMessageArr((oldValue) => [...oldValue, msg]);
      }
      console.log("consosomsguuuuuuuuuuuu", messageArr, tempValue);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit running");
    setMessageArr((prevVal) => [
      ...prevVal,
      {
        msgValue,
        senderId: user._id,
        sendTime: new Date(),
        recieverId: selectedUser._id,
        chatId: id,
      },
    ]);
    socket.emit("chat message send", {
      msgValue,
      senderId: user._id,
      sendTime: new Date(),
      recieverId: selectedUser._id,
      chatId: id,
    });
    setMsgValue("");
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchUser(e.target.value)
      .then((res) => {
        setSearchedUsers(res.data);
      })
      .catch((err) => console.error("error :", err));
  };

  const selectChat = (item) => {
    navigate("/chatemployee/" + item.chatId);
    getMessage(item.chatId)
      .then((res) => setMessageArr(res.data))
      .catch((err) => console.error("error :", err));
    socket.emit("joinRoom", item.chatId);
    setSelectedUser(item.userDetails);
  };
  return (
    <div className="min-table-height">
      <div
        className="mt-10 lg:-mt-80 ml-5 lg:ml-16 mr-5 lg:mr-64 bg-gray-200 dark:bg-gray-800 w-auto rounded-lg mb-10"
        style={{ height: "400px" }}
      >
        <div className="bg-white dark:bg-gray-900 dark:text-white px-10 py-5 rounded-t-lg text-3xl font-semibold text-gray-900">
          Chat Page
        </div>

        <div className="w-auto">
          <div className="grid lg:grid-cols-3 grid-cols-1 min-w-full border dark:border-gray-700 rounded min-h-0 lg:min-h-[70vh]">
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
                    value={search}
                    onChange={handleSearch}
                  />
                </div>
              </div>
              {search ? (
                <ul>
                  {searchedUsers &&
                    searchedUsers.map((item) => {
                      console.log("searched item", item);
                      return (
                        <li>
                          <a
                            href="javascript:void(0);"
                            onClick={() => navigate("/chatemployee/AmanTiwari")}
                            className="hover:bg-gray-100 dark:hover:bg-gray-900 border-b border-gray-300 dark:border-gray-700 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out"
                          >
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={baseURL + (item && item.profilePic)}
                              alt={item.firstName + " " + item.lastName}
                            />
                            <div className="w-full pb-2">
                              <div className="flex justify-between">
                                <span className="block ml-2 font-semibold text-base text-gray-600 dark:text-gray-400">
                                  {item.firstName + " " + item.lastName}
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
                        </li>
                      );
                    })}
                </ul>
              ) : (
                <ul className="overflow-auto">
                  <h2 className="ml-2 mb-2 text-gray-600 text-lg my-2">
                    Chats
                  </h2>
                  {userList &&
                    userList.map((item) => {
                      return (
                        <li key={item._id}>
                          <a
                            href="javascript:void(0);"
                            onClick={() => selectChat(item)}
                            className={`hover:bg-gray-100 dark:hover:bg-gray-900 border-b border-gray-300 dark:border-gray-700 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out 
                              ${
                                id === item.chatId
                                  ? "bg-gray-100 dark:bg-gray-700"
                                  : ""
                              }
                          `}
                          >
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={
                                baseURL +
                                (item &&
                                  item.userDetails &&
                                  item.userDetails.profilePic)
                              }
                              alt={
                                (item &&
                                  item.userDetails &&
                                  item.userDetails.firstName) +
                                " " +
                                (item &&
                                  item.userDetails &&
                                  item.userDetails.lastName)
                              }
                            />
                            <div className="w-full pb-2">
                              <div className="flex justify-between">
                                <span className="block ml-2 font-semibold text-base text-gray-600 dark:text-gray-400">
                                  {(item &&
                                    item.userDetails &&
                                    item.userDetails.firstName) +
                                    " " +
                                    (item &&
                                      item.userDetails &&
                                      item.userDetails.lastName)}
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
                        </li>
                      );
                    })}
                </ul>
              )}
            </div>
            <div className="col-span-2 bg-white dark:bg-gray-800">
              {id !== "table" ? (
                <MainChatRoomComponent
                  messageArr={messageArr}
                  handleSubmit={handleSubmit}
                  user={user}
                  msgValue={msgValue}
                  setMsgValue={setMsgValue}
                  selectedUser={selectedUser}
                />
              ) : (
                <div className="h-full text-white flex justify-center items-center text-2xl">
                  Welcome To Chat, Please Select Any Chat
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatEmployee;
