import Movies from "@/components/Movies";
import React from "react";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjY5YTcxNmRhZDhjOWI3ODk3YzQ3MjljZjUwYzk4YiIsIm5iZiI6MTczMjUxNjA1OS4xOTkxMjc0LCJzdWIiOiI2NmM4Yzc2ODk4NWIyMTU0YWViMzA0NWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Dn-fA6729xt8py8mJfC2V4-TzoBs5FWia_Bf1ldFgTc",
  },
};

const page = async (context) => {
  const { searchParams } = context;

  const genre = (await searchParams?.genre) || "top_rated";

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${genre}?language=en-US&page=1`,
    options
  );
  const data = await res.json();

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies data={dt} key={i} />
      ))}
    </div>
  );
};

export default page;
