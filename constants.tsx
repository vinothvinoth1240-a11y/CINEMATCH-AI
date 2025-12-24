
import { Movie } from './types';

export const MOCK_MOVIES: Movie[] = [
  // Top Recommendations
  {
    id: '1',
    title: 'RRR',
    posterUrl: 'https://picsum.photos/seed/rrr/400/600',
    genre: ['Action', 'Drama', 'Period'],
    language: 'Telugu',
    year: 2022,
    rating: 8.8,
    category: 'Top',
    reason: 'High-octane action and emotional core similar to Baahubali.'
  },
  {
    id: '2',
    title: 'Interstellar',
    posterUrl: 'https://picsum.photos/seed/interstellar/400/600',
    genre: ['Sci-Fi', 'Drama', 'Adventure'],
    language: 'English',
    year: 2014,
    rating: 8.7,
    category: 'Top',
    reason: 'Matches your interest in grand-scale cinematic storytelling.'
  },
  {
    id: '3',
    title: 'Dangal',
    posterUrl: 'https://picsum.photos/seed/dangal/400/600',
    genre: ['Biography', 'Drama', 'Sport'],
    language: 'Hindi',
    year: 2016,
    rating: 8.3,
    category: 'Top',
    reason: 'Powerful performance-driven drama with a strong emotional arc.'
  },

  // Bollywood
  {
    id: '4',
    title: 'Jawan',
    posterUrl: 'https://picsum.photos/seed/jawan/400/600',
    genre: ['Action', 'Thriller'],
    language: 'Hindi',
    year: 2023,
    rating: 7.0,
    category: 'Bollywood'
  },
  {
    id: '5',
    title: 'Andhadhun',
    posterUrl: 'https://picsum.photos/seed/andhadhun/400/600',
    genre: ['Crime', 'Drama', 'Music'],
    language: 'Hindi',
    year: 2018,
    rating: 8.2,
    category: 'Bollywood',
    reason: 'Top-tier suspense thriller that keeps you guessing.'
  },
  {
    id: '6',
    title: 'Zindagi Na Milegi Dobara',
    posterUrl: 'https://picsum.photos/seed/znmd/400/600',
    genre: ['Comedy', 'Drama'],
    language: 'Hindi',
    year: 2011,
    rating: 8.2,
    category: 'Bollywood'
  },

  // South Indian
  {
    id: '7',
    title: 'Vikram',
    posterUrl: 'https://picsum.photos/seed/vikram/400/600',
    genre: ['Action', 'Crime', 'Thriller'],
    language: 'Tamil',
    year: 2022,
    rating: 8.3,
    category: 'SouthIndian',
    reason: 'Because you enjoyed high-stakes thrillers with multi-layered plots.'
  },
  {
    id: '8',
    title: 'Kantara',
    posterUrl: 'https://picsum.photos/seed/kantara/400/600',
    genre: ['Action', 'Adventure', 'Drama'],
    language: 'Kannada',
    year: 2022,
    rating: 8.2,
    category: 'SouthIndian'
  },
  {
    id: '9',
    title: 'Drishyam 2',
    posterUrl: 'https://picsum.photos/seed/drishyam/400/600',
    genre: ['Crime', 'Drama', 'Thriller'],
    language: 'Malayalam',
    year: 2021,
    rating: 8.4,
    category: 'SouthIndian'
  },

  // Trending
  {
    id: '10',
    title: 'Manjummel Boys',
    posterUrl: 'https://picsum.photos/seed/manjummel/400/600',
    genre: ['Adventure', 'Thriller'],
    language: 'Malayalam',
    year: 2024,
    rating: 8.6,
    category: 'Trending'
  },
  {
    id: '11',
    title: 'Dune: Part Two',
    posterUrl: 'https://picsum.photos/seed/dune/400/600',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    language: 'English',
    year: 2024,
    rating: 8.8,
    category: 'Trending'
  },

  // Because you watched
  {
    id: '12',
    title: 'Baahubali 2',
    posterUrl: 'https://picsum.photos/seed/baahubali/400/600',
    genre: ['Action', 'Drama'],
    language: 'Telugu',
    year: 2017,
    rating: 8.2,
    category: 'BecauseWatched',
    reason: 'Because you watched RRR.'
  },
  {
    id: '13',
    title: 'Chhichhore',
    posterUrl: 'https://picsum.photos/seed/chhichhore/400/600',
    genre: ['Comedy', 'Drama'],
    language: 'Hindi',
    year: 2019,
    rating: 8.3,
    category: 'BecauseWatched',
    reason: 'Because you watched 3 Idiots.'
  }
];
