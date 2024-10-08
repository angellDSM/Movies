import { View } from 'react-native'
import { useMovies } from '../../hooks/useMovies'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizonalCarousel } from '../../components/movies/HorizonalCarousel';
import { FullLScreenLoaders } from '../../components/loaders/FullLScreenLoaders';

export const HomeScreens = () => {
  const { top } = useSafeAreaInsets();

  const { isLoanding, nowPlaying, popular, upcoming, topRated, popularNextPage } = useMovies();

  if (isLoanding) {
    return (<FullLScreenLoaders />)
  }

  return (
    <ScrollView style={{ marginTop: top, paddingBottom: 30 }} >
      <View>


        {/* Principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* populares */}
        <HorizonalCarousel
          movies={popular}
          title='Populares'
          loadNextPage={popularNextPage}
        />

        {/* populares */}
        <HorizonalCarousel movies={topRated} title='Mejor calificada' />

        {/* populares */}
        <HorizonalCarousel movies={upcoming} title='Proximamente' />


      </View>

    </ScrollView>

  )
}