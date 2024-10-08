
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity'
import { Navigation, RootstackParams } from '../../navigation/Navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';


interface Props {
    movie: Movie,
    height?: number,
    width?: number
}



export const MoviePoster = ({ movie, height = 340, width = 240 }: Props) => {

    const navigation = useNavigation<NavigationProp<RootstackParams>>()
    return (

        <Pressable
            onPress={() => navigation.navigate('Details', { movieId: movie.id })}
            style={({pressed}) => ({
                    width,
                    height,
                    paddingHorizontal: 7
                    ,
                    paddingBottom: 20,
                    marginHorizontal: 4,
                    
                    opacity: pressed ? 0.9: 1
                })

            }
        >

            <View style={sytle.imageContainer}>
                <Image
                    style={sytle.image}
                    source={{ uri: movie.poster }}
                />
            </View>

        </Pressable>

    )
}


const sytle = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18
    },

    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9
    }
})