function Search(props) {

  return (

    <div>

      <input

        type="text"

        placeholder="Search destinations..."

        className="
          p-[15px]
          w-[500px]
          text-black
          rounded-xl
          ml-[350px]
        "

        onChange={(e) =>
        {
          props.setSearch(e.target.value)
        }}

      />

    </div>

  );
}

export default Search;