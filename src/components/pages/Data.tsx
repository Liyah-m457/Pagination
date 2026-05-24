import { useState } from "react";
import Search from "./Search";
import Page from "./Page";
import PostList from "./Place";

function Data() {

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  return (

    <div className="
      bg-[#0a192f]
    ">

      <h1 className="
        text-white
        text-[50px]
        text-center
      ">

        Explore Beautiful Destinations

      </h1>

      <p className="
        text-gray-200
        mt-[20px]
        text-center
      ">

        Discover amazing places around the world

      </p>

      <div className="mt-[30px]">

        <Search
          setSearch={setSearch} setPage={setPage}
        />

      </div>

      <PostList page={page} search={search} />

      <div className="mt-[40px]">

        <Page
          setPage={setPage}
        />

      </div>

    </div>

  )
}

export default Data;