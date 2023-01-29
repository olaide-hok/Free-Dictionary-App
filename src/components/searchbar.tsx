import {
  FormControl,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import {useEffect, useRef} from 'react'
import {RiSearchLine} from 'react-icons/ri'
import {useGlobalContext} from '../context'

const SearchBar = () => {
  const {setSearchWord} = useGlobalContext()

  const searchWord = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    if (searchWord.current) {
      searchWord.current.focus()
    }
  }, [])

  const searchWordFn = () => {
    setSearchWord(searchWord.current.value)
    console.log(searchWord.current.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault()
  }

  return (
    <HStack width="full" pb="12">
      <FormControl onSubmit={handleSubmit}>
        <InputGroup maxW="7xl">
          <Input
            variant="filled"
            rounded="lg"
            placeholder="Type here..."
            _placeholder={{fontWeight: 'bold'}}
            // onChange={searchWordFn}
            onClick={searchWordFn}
            ref={searchWord}
            type="text"
          />
          <InputRightElement pointerEvents="none" children={<RiSearchLine />} />
        </InputGroup>
      </FormControl>
    </HStack>
  )
}

export default SearchBar
