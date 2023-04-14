import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'

import FeaturedMovie from '@/components/featured-movie'
import Categories from '@/components/categories'
import MoviesSection from '@/components/movies-section'

const HomeContainer = ({ popularMovies = [], topRatedMovies = [], categories = [], selectedCategory }) => {

    return (
        <div>
            <FeaturedMovie movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]} />
            <Categories categories={categories.slice(0, 5)} />
            {!!selectedCategory.movies.length && (
                <MoviesSection
                    title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
                    movies={selectedCategory.movies.slice(1, 7)}
                />
            )}
            <MoviesSection
                title={"Populer Films"}
                movies={popularMovies.slice(0, 6)}
            />

            <MoviesSection
                title={"Top Rated Films"}
                movies={topRatedMovies.slice(0, 6)}
            />

            <MoviesSection
                title={"Your Favorites"}
                movies={Movies.results.slice(6, 12)}
            />
        </div>
    );
}

export default HomeContainer;