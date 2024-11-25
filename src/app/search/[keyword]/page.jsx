import { options } from "@/app/page";
import Movies from "@/components/Movies";

const page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&language=en-US`,
    options
  );
  const data = await res.json();

  return (
    <div>
      {!data?.results ? (
        <div>Aranılan film bulunamadı!!</div>
      ) : (
        <div className="flex items-center flex-wrap gap-3 max-h-[400px]">
          {data?.results?.map((dt, i) => (
            <Movies key={i} data={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
