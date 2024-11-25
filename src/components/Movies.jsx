"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Movies = ({ data }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movie/${data?.id}`)}
      //onClick={() => console.log("film id :", data?.id)}
      className="min-w-[470px] img-container relative"
    >
      <Image
        style={{ objectFit: "cover" }}
        src={`https://image.tmdb.org/t/p/original/${
          data?.backdrop_path || data?.poster_path
        }`}
        alt="movie image"
        width={470}
        height={300}
      />

      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 cursor-pointer transition-opacity">
        <h1 className="text-2xl font-bold">{data?.title}</h1>
        <div>
          {data?.release_date} - {data?.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movies;
