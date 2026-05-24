import SearchIcon from '@mui/icons-material/Search';

function Search(props) {

  return (

    <div className="
      ml-[350px]
      flex
      items-center
    ">

      <input

        type="text"

        placeholder="Search destinations..."

        className="
          p-[15px]
          w-[500px]
          text-black
          rounded-xl
        "

        onChange={(e) =>
        {
          props.setSearch(e.target.value)
        }}

      />

      <SearchIcon className="
        ml-[-40px]
        text-gray-500
      "/>

    </div>

  );
}

export default Search;