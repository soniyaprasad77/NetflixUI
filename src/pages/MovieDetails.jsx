import { ArrowLeft, Star } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import VideoBackground from "../components/VideoBackground";
import useMovieDetails from "../hooks/useMovieDetails";
import { CDN_IMG_URL } from "../utils/constants";

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const movieDetails = useMovieDetails(movieId);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const {
    poster_path,
    title,
    overview,
    release_date,
    vote_average,
    genres,
    runtime,
    budget,
    revenue,
    production_companies,
    homepage,
    spoken_languages,
  } = movieDetails;

  return (
    <div className='pt-24 px-4 md:px-8 bg-black min-h-screen text-white'>
      {/* Back Button */}
      <button
        className='bg-white text-black p-2 m-4 rounded-lg w-fit'
        onClick={() => navigate("/")}
      >
        <ArrowLeft />
      </button>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row p-4'>
        {/* Poster Image */}
        <div className='w-full md:w-1/3 mb-6 md:mb-0'>
          <img
            className='w-full rounded-lg shadow-lg'
            src={`${CDN_IMG_URL}${poster_path}`}
            alt={title}
          />
        </div>

        {/* Movie Details */}
        <div className='w-full md:w-2/3 flex flex-col justify-center md:pl-6'>
          <h1 className='text-4xl font-bold mb-4'>{title}</h1>
          <p className='text-lg mb-4 italic'>{overview}</p>

          {/* Release Date, Rating, and Runtime */}
          <div className='flex flex-col mb-4'>
            <p className='text-md mb-2'>
              <strong className='text-base'>Release Date</strong> {release_date}
            </p>
            <p className='text-md mb-2 flex items-center'>
              <strong className='text-base'>Rating</strong>
              <Star className='text-yellow-400 ml-2 mr-1' size={18} />
              {vote_average} / 10
            </p>
            <p className='text-md mb-2'>
              <strong className='text-base'>Runtime</strong> {runtime} mins
            </p>
          </div>

          {/* Genres */}
          <div className='mb-4'>
            <strong className='text-base'>Genres </strong>
            {genres.map((genre) => (
              <span
                key={genre.id}
                className='bg-gray-700 px-2 py-1 rounded-lg text-sm mr-2'
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Budget and Revenue */}
          <div className='mb-4'>
            <p className='text-md'>
              <strong className='text-base'>Budget</strong> $
              {budget.toLocaleString()}
            </p>
            <p className='text-md'>
              <strong className='text-base'>Revenue</strong> $
              {revenue.toLocaleString()}
            </p>
          </div>

          {/* Spoken Languages */}
          <div className='mb-4'>
            <strong className='text-base'>Languages </strong>
            {spoken_languages.map((lang) => (
              <span key={lang.iso_639_1} className='mr-2'>
                {lang.english_name}
              </span>
            ))}
          </div>

          {/* Production Companies */}
          <div className='mb-4'>
            <strong className='text-base'>Production Companies </strong>
            <ul className='mt-2'>
              {production_companies.map((company) => (
                <li
                  key={company.id}
                  className='flex items-center mb-2 space-x-2'
                >
                  <span>{company.name}</span>
                  {company.logo_path && (
                    <img
                      src={`${CDN_IMG_URL}${company.logo_path}`}
                      alt={company.name}
                      className='h-6'
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Homepage Link */}
          {homepage && (
            <a
              href={homepage}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 underline'
            >
              View Official Website
            </a>
          )}
        </div>
      </div>

      {/* Trailer Section */}
      <div className='w-full mt-6'>
        <h2 className='text-2xl font-bold text-white p-4'>Trailer</h2>
        <VideoBackground movieId={movieId} />
      </div>
    </div>
  );
};

export default MovieDetails;
