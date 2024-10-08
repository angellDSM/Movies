import { StackScreenProps } from '@react-navigation/stack'
import { Text, View, ScrollView } from 'react-native'
import { RootstackParams } from '../../navigation/Navigation'
import { useMovie } from '../../hooks/useMovie'
import { MovieHeader } from '../../components/movie/MovieHeader'
import { MovieDetails } from '../../components/movie/MovieDetails'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FullLScreenLoaders } from '../../components/loaders/FullLScreenLoaders'

interface Props extends StackScreenProps<RootstackParams, 'Details'>{};

export const DetailsScreen = ({route}:Props) => {
    
    const insets = useSafeAreaInsets()
    const {movieId}= route.params
    // console.log(movieId)
    const {isLoading, movie, cast= []} = useMovie(movieId)
    if (isLoading) {
        return (<FullLScreenLoaders />)
      }
    return (
        

        <ScrollView style={{marginTop: insets.top}}> 
            {/* Header */}
            <MovieHeader 
            originalTitle={movie!.originalTitle}
            title={movie!.title}
            poster={movie!.poster}
            />


            {/* details */}
            <MovieDetails movie={movie!} cast={cast}/>

        </ScrollView>

    )
}
