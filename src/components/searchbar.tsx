import {
  FormControl,
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
  }, [searchWord?.current?.value])

  const searchWordFn = () => {
    setSearchWord(searchWord.current.value.trim())
  }

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
  }

  return (
    <FormControl onSubmit={handleSubmit}>
      <InputGroup maxW="7xl">
        <Input
          variant="filled"
          rounded="lg"
          placeholder="Type word here..."
          _placeholder={{fontWeight: 'bold'}}
          onClick={() => searchWordFn()}
          ref={searchWord}
          type="text"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              searchWordFn()
            }
          }}
        />
        <InputRightElement pointerEvents="none" children={<RiSearchLine />} />
      </InputGroup>
    </FormControl>
  )
}

export default SearchBar
