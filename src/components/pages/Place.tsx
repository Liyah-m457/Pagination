import { useEffect, useState } from "react";

function PostList(props)
{

  const [places, setPlaces] = useState([]);

  useEffect(() => {

    async function getData()
    {

      const response = await fetch("/buildings.json"); //uses api

      const data = await response.json(); //api response

      setPlaces(data.places);

    }

    getData();

  }, []);

  const itemsPerPage = 4;

  const start = (props.page - 1) * itemsPerPage;

  const end = start + itemsPerPage;

  const filteredPlaces = places.filter((place) =>

    place.title
      .toLowerCase()
      .includes(props.search.toLowerCase())

  );

  const currentPlaces = filteredPlaces.slice(start, end);

  return (

    <div className="
      grid
      grid-cols-2
      gap-[40px]
      mt-[50px]
      justify-items-center
      rounded-md
    ">

      {
        currentPlaces.map((place, number) => (

          <div
            key={number}

            className="
              bg-white
              w-[350px]
              rounded-2xl
            "
          >

            <img

              src={place.image}

              className="
                w-full
h-[220px]
object-cover
rounded-xl
mb-[10px]
              "

            />

            <div className="p-[20px]">

              <h2 className="
                text-[30px]
              ">

                {place.title}

              </h2>

              <p className="mt-[10px]">

                {place.description}

              </p>

            </div>

          </div>

        ))
      }

    </div>

  )
}

export default PostList;