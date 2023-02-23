import {Box, IconButton, SkeletonCircle, Text} from '@chakra-ui/react'
import {BiPlay} from 'react-icons/bi'

interface PlayBtnProps {
  loading: Boolean
  audioLink: string
  country: string
}

const playFn = (src: string) => {
  new Audio(src).play()
}

const PlayBtn = ({loading, audioLink, country}: PlayBtnProps) => {
  return (
    <SkeletonCircle size="10" isLoaded={!loading}>
      <Box pos="relative">
        <IconButton
          aria-label="play-button"
          border="rounded"
          bgColor="purple.100"
          color="purple.500"
          fontSize="36px"
          isRound
          icon={<BiPlay />}
          type="button"
          onClick={() => playFn(audioLink)}
        />
        <Text pos="absolute" top="-9px" right="-5px" fontSize="sm">
          {country}
        </Text>
      </Box>
    </SkeletonCircle>
  )
}

export default PlayBtn
