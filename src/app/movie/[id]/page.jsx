import Image from "next/image";

const getMovie = async (id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjY5YTcxNmRhZDhjOWI3ODk3YzQ3MjljZjUwYzk4YiIsIm5iZiI6MTczMjUxNjA1OS4xOTkxMjc0LCJzdWIiOiI2NmM4Yzc2ODk4NWIyMTU0YWViMzA0NWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Dn-fA6729xt8py8mJfC2V4-TzoBs5FWia_Bf1ldFgTc",
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  const data = await res.json();

  return data;
};

const Page = async ({ params }) => {
  const id = params?.id;

  //console.log("🎾🎾🎾🎾🎾🎾🎾🎾🎾", id);

  const movieDetail = await getMovie(id);

  return (
    <div className="relative  w-full h-[600px] p-8">
      <Image
        style={{ objectFit: "cover" }}
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
        alt="movie image"
        fill
      />
      <div className="absolute">
        <h1 className="text-4xl font-bold my-3"> {movieDetail?.title}</h1>
        <p className=" md:w-1/2 my-3 bg-opacity-50 bg-gray-600 p-2 rounded-md ">
          {" "}
          {movieDetail?.overview}
        </p>
        <div className="my-3 border border-gray-400 w-52 p-1 rounded-md bg-gray-500 bg-opacity-70">
          {movieDetail?.release_date} - {movieDetail?.vote_average}
        </div>
        <div className="my-2 border w-28 text-center p-2 rounded-md text-lg bg-gray-500 hover:bg-white hover:text-black transition font-semibold cursor-pointer">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;
