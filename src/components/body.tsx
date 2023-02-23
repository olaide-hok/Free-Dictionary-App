import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Skeleton,
  SkeletonText,
  Text,
  Link,
  VStack,
} from '@chakra-ui/react'
import SearchBar from './searchbar'

import {FiExternalLink} from 'react-icons/fi'
import {useGlobalContext} from '../context'
import Definiton from './definition'
import PlayBtn from './playBtn'

// type WordDetails = {
//   word: string
//   meaning: []
//   phonetic?: string
//   phonetics: []
//   sourceUrls: []
//   license: {}
// }

const Body = () => {
  const {loading, wordMeaning, notFound} = useGlobalContext()
  const {title, message, resolution} = notFound

  return (
    <Box>
      <Skeleton height="12" isLoaded={!loading} mb="8">
        <SearchBar />
      </Skeleton>
      {wordMeaning.length > 0 &&
        wordMeaning.map((wordMeanings: any, index: number) => {
          const {word, phonetic, phonetics, sourceUrls, meanings} = wordMeanings

          let srcUrl: string[] = []
          phonetics.map((audios: {audio: string}) => {
            if (audios.audio !== '') {
              srcUrl.push(audios.audio)
            }
            return srcUrl
          })

          return (
            <Box key={index}>
              <Flex justifyContent="space-between" pb="8">
                <VStack alignItems="flex-start">
                  <SkeletonText
                    isLoaded={!loading}
                    noOfLines={2}
                    spacing="4"
                    skeletonHeight="6">
                    <Heading
                      textTransform="capitalize"
                      fontSize={['2xl', '3xl']}>
                      {word}
                    </Heading>
                    <Text>{phonetic}</Text>
                  </SkeletonText>
                </VStack>

                {srcUrl.length > 1 ? (
                  <HStack spacing="4">
                    <PlayBtn
                      loading={loading}
                      audioLink={srcUrl[0]}
                      country="UK"
                    />
                    <PlayBtn
                      loading={loading}
                      audioLink={srcUrl[1]}
                      country="US"
                    />
                  </HStack>
                ) : (
                  <HStack>
                    <PlayBtn
                      loading={loading}
                      audioLink={srcUrl[0]}
                      country="US"
                    />
                  </HStack>
                )}
              </Flex>

              {/* Meanings */}

              {meanings &&
                meanings.map((meaning: any, index: number) => {
                  const {antonyms, definitions, partOfSpeech, synonyms} =
                    meaning

                  return (
                    <Box key={index}>
                      {partOfSpeech && (
                        <SkeletonText
                          isLoaded={!loading}
                          noOfLines={1}
                          skeletonHeight="4">
                          <Flex gap="4" pb="8">
                            <Text>{partOfSpeech}</Text>
                            <Divider
                              mt="3"
                              bgColor="purple.200"
                              height="0.15rem"
                            />
                          </Flex>
                        </SkeletonText>
                      )}
                      <VStack alignItems="flex-start" pb="8">
                        <SkeletonText
                          isLoaded={!loading}
                          noOfLines={1}
                          skeletonHeight="4">
                          <Text as="h3">Meaning</Text>
                        </SkeletonText>

                        {definitions &&
                          definitions.map(
                            (
                              definitionn: {definition: String},
                              index: number
                            ) => {
                              const {definition} = definitionn

                              return (
                                <Definiton
                                  definition={definition}
                                  loading={loading}
                                  key={index}
                                />
                              )
                            }
                          )}
                      </VStack>

                      {/* Synonyms */}
                      {synonyms.length > 0 && (
                        <SkeletonText
                          isLoaded={!loading}
                          noOfLines={1}
                          skeletonHeight="4">
                          <HStack alignItems="flex-start" pb="8">
                            <Text as="h3">Synonyms</Text>
                            <Text as="h3" color="purple.400">
                              {synonyms[0]}
                            </Text>
                          </HStack>
                        </SkeletonText>
                      )}

                      {/* Antonyms  */}
                      {antonyms.length > 0 && (
                        <SkeletonText
                          isLoaded={!loading}
                          noOfLines={1}
                          skeletonHeight="4">
                          <HStack alignItems="flex-start" pb="8">
                            <Text as="h3">Antonyms</Text>
                            <Text as="h3" color="purple.400">
                              {antonyms[0]}
                            </Text>
                          </HStack>
                        </SkeletonText>
                      )}
                    </Box>
                  )
                })}

              {/* Source */}

              <SkeletonText
                isLoaded={!loading}
                noOfLines={1}
                skeletonHeight="4">
                <Divider bgColor="purple.200" height="0.15rem" />
                <HStack pb={8}>
                  <Text fontSize={['sm', 'md']}>Source:</Text>
                  <Text
                    as={Link}
                    href={sourceUrls}
                    target="_blank"
                    textDecoration="underline"
                    fontSize={['sm', 'md']}>
                    {sourceUrls}
                    <IconButton
                      aria-label="open-in-new-tab"
                      bgColor="transparent"
                      _hover={{
                        bgColor: 'transparent',
                      }}
                      icon={<FiExternalLink />}
                    />
                  </Text>
                </HStack>
              </SkeletonText>
            </Box>
          )
        })}
      {wordMeaning.length === 0 && Object.keys(notFound).length > 0 && (
        <VStack>
          <Heading>{title}</Heading>
          <Text as={'h3'}>{message}</Text>
          <Text as={'h4'}>{resolution}</Text>
        </VStack>
      )}
    </Box>
  )
}

export default Body
