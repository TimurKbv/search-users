import "./App.css";
import Search from "./components/Search";
import UserModal from "./components/UserModal";
import UsersList from "./components/UsersList";

function App() {
  return (
    <>
      <div className="container w-11/12 m-auto">
        <Search />
        <UsersList />
      </div>
      <UserModal />
    </>
  );
}

export default App;
