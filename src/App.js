import "./App.css";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container mx-auto mt-5">
      <form class="flex items-center">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required=""
            onChange={(event) => {
              setSearchTerm(event.target.value);
              console.log(event.target.value);
            }}
          />
        </div>
      </form>
      <div className="container rounded-lg border border-gray-200 text-center  ">
        <div className="flex flex-wrap overflow-hidden xl:-mx-1">
          <div className="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/4">
            <h1 className="text-xl e ">First Name</h1>
          </div>

          <div className="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/4">
            <h1 className="text-xl e ">Last Name</h1>
          </div>

          <div className="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/4">
            <h1 className="text-xl e ">Email</h1>
          </div>

          <div className="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/4">
            <h1 className="text-xl e ">Gender</h1>
          </div>
        </div>
      </div>

      {JSONDATA.filter((value) => {
        if (searchTerm === "") {
          return value;
        } else if (
          value.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return value;
        }
      }).map((value, key) => {
        return (
          <div className="user" key={key}>
            <div className="flex flex-wrap overflow-hidden xl:-mx-1  text-center">
              <div className="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/4">
                {value.first_name}
              </div>

              <div className="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/4">
                {value.last_name}
              </div>

              <div className="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/4">
                {value.email}
              </div>

              <div className="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/4">
                {value.gender}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
