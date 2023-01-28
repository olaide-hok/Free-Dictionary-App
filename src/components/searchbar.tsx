import {
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
} from '@chakra-ui/react'
import {RiSearchLine} from 'react-icons/ri'

const SearchBar = () => {
  return (
    <HStack width="full" pb="12">
      <InputGroup maxW="7xl">
        <Input
          variant="filled"
          rounded="lg"
          placeholder="Keyboard"
          _placeholder={{fontWeight: 'bold'}}
        />
        <InputRightElement pointerEvents="none" children={<RiSearchLine />} />
      </InputGroup>
      <Spacer />
      {/* Avatar
      <Avatar /> */}
    </HStack>
  )
}

export default SearchBar
