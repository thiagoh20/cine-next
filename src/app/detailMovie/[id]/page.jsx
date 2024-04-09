
import MovieDetail from "@/components/MovieDetail/MovieDetail.jsx";


export default function detailMovie({ params }) {
  const id = params.id;
 // console.log(id)
  return (
    <>
      <MovieDetail id={id} />
    </>
  );
}


