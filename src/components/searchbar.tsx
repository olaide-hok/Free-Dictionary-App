import {Input, InputGroup, InputRightElement} from '@chakra-ui/react'
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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    searchWordFn()
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup maxW="7xl">
        <Input
          variant="filled"
          rounded="lg"
          placeholder="Type word here..."
          _placeholder={{fontWeight: 'bold'}}
          ref={searchWord}
          type="text"
        />
        <InputRightElement pointerEvents="none" children={<RiSearchLine />} />
      </InputGroup>
    </form>
  )
}

export default SearchBar
