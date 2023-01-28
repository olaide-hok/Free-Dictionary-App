import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'
import {BiPlay} from 'react-icons/bi'
import SearchBar from './searchbar'
// import ExternalLinkIcon from '@chakra-ui/icons'

import {FiExternalLink} from 'react-icons/fi'

const Body = () => {
  return (
    <Box>
      <SearchBar />
      <Box>
        <Flex justifyContent="space-between" pb="8">
          <VStack alignItems="flex-start">
            <Heading>Keyboard</Heading>
            <Text>transcript</Text>
          </VStack>

          <IconButton
            aria-label="play-button"
            border="rounded"
            bgColor="purple.100"
            color="purple.500"
            fontSize="36px"
            isRound
            icon={<BiPlay />}
          />
        </Flex>
        <Flex gap="4" pb="8">
          <Text>noun</Text>
          <Divider mt="4" />
        </Flex>
        <VStack alignItems="flex-start" pb="8">
          <Text as="h3">Meaning</Text>
          <UnorderedList pl="8">
            <ListItem>
              (etc). A set of keys usedd to operate a typewriter, computer etc
            </ListItem>
            <ListItem>
              A component of many instruments including the piano, organ, and
              harpischord consiting of usually black and white keys that cause
              different tones to be produced when struck.
            </ListItem>
            <ListItem>
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </ListItem>
          </UnorderedList>
        </VStack>
        <HStack alignItems="flex-start" pb="8">
          <Text as="h3">Synonyms</Text>
          <Text as="h3">electronic keyboard</Text>
        </HStack>
        <Flex gap="4" pb="8">
          <Text>verb</Text>
          <Divider mt="4" />
        </Flex>
        <VStack alignItems="flex-start" pb="8">
          <Text as="h3">Meaning</Text>
          <UnorderedList pl="8">
            <ListItem>To type on a computer keyboard.</ListItem>
          </UnorderedList>
        </VStack>
        <Divider />
        <HStack>
          <Text>Source</Text>
          <Text textDecoration="underline">
            https://en.wikitionary.org/wiki/keyboard
          </Text>
          <IconButton
            aria-label="open-in-new-tab"
            bgColor="transparent"
            icon={<FiExternalLink />}
          />
        </HStack>
      </Box>
    </Box>
  )
}

export default Body
