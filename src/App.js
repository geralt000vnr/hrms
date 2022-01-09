// import { Route, Routes } from "react-router-dom";
// import Auth from "./routes/Auth";
import User from "./routes/User";

function App() {
  // const currentUser = true;
  return (
    <div className="bg-white dark:bg-zinc-800 min-h-screen">
      <User />
      {/* {!currentUser ? (
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="*" element={<Auth />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="*" element={<User />} />
        </Routes>
      )} */}
    </div>
  );
}

export default App;
