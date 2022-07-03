import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/Auth/SIgnUp";
import Auth from "./routes/Auth";
import User from "./routes/User";

function App() {
  const { user } = useSelector((state) => state);
  const currentUser = user?.currentUser;
  // const currentUser = true;
  return (
    <div className="bg-white dark:bg-zinc-800 min-h-screen">
      {!currentUser ? (
        <Routes>
          <Route path={"/"} element={<Auth />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"*"} element={<Auth />} />
        </Routes>
      ) : (
        <User />
      )}
    </div>
  );
}

export default App;

//raise an issue in project report or change in old work
//raise an issue in daily task
//identify leave history
//working hours or punch in punch out time
//average response time in chat or mail by any other employee
//Faq
// Detail of holiday on click
//Sorting leaves by filter of month,3,6month.    total number of leaves taken- EX- in june month taken 3leaves
//employee kpis
