function Page(props)
{

  return (

    <div className="
      flex
      justify-center
      gap-[10px]
    ">

      <button
        onClick={() => props.setPage(1)}
        className="
          bg-purple-700
          text-white
          px-5
          py-2
        "
      >
        1
      </button>

      <button
        onClick={() => props.setPage(2)}
        className="
          bg-purple-700
          text-white
          px-5
          py-2
        "
      >
        2
      </button>

      <button
        onClick={() => props.setPage(3)}
        className="
          bg-purple-700
          text-white
          px-5
          py-2
        "
      >
        3
      </button>

      <button
        onClick={() => props.setPage(4)}
        className="
          bg-purple-700
          text-white
          px-5
          py-2
        "
      >
        4
      </button>

      <button
        onClick={() => props.setPage(5)}
        className="
          bg-purple-700
          text-white
          px-5
          py-2
        "
      >
        5
      </button>

    </div>

  )
}

export default Page;