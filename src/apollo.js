import { ApolloClient, InMemoryCache } from '@apollo/client';
// typename 에서 "_" 두개 인데 하나로 해서 identify 작동 안됨...

const client = new ApolloClient({ 
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
    resolvers: {
        Movie: {
            isLiked: () => false
        },
        Mutation: {
            toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
                const myMovie = {
                    __typename: 'Movie',
                    id: `${id}`,
                    isLiked: `${isLiked}`,
                };

                cache.modify({
                    id: cache.identify(myMovie),
                    fields: {
                        isLiked(cachedName) {
                            return !isLiked;
                        }
                    },
                    });
                },
            }
        },
});

export default client;
