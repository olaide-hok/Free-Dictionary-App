import React, {
  useEffect,
  useCallback,
  useContext,
  useState,
  createContext,
} from 'react'

const freeDictUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

type NotFound = {
  title: String
  resolution: String
  message: String
}

type DictionaryContextType = {
  setSearchWord: Function
  loading: Boolean
  wordMeaning: Object[]
  notFound: NotFound
}

const noop = () => {}

const DictionaryContext = createContext<DictionaryContextType>({
  setSearchWord: noop,
  loading: false,
  wordMeaning: [],
  notFound: {
    title: '',
    message: '',
    resolution: '',
  },
})

interface ChildrenProps {
  children: JSX.Element[] | JSX.Element
}

const DictionaryProvider = ({children}: ChildrenProps) => {
  const [loading, setLoading] = useState(false)
  const [searchWord, setSearchWord] = useState('keyboard')
  const [wordMeaning, setWordMeaning] = useState([])
  const [notFound, setNotFound] = useState({
    title: '',
    message: '',
    resolution: '',
  })

  const fetchWordMeaning = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${freeDictUrl}${searchWord}`)
      const data = await response.json()

      if (data.length > 0) {
        setWordMeaning(data)
      } else {
        setWordMeaning([])
        setNotFound(data)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [searchWord])

  useEffect(() => {
    fetchWordMeaning()
  }, [searchWord, fetchWordMeaning])

  return (
    <DictionaryContext.Provider
      value={{loading, setSearchWord, wordMeaning, notFound}}>
      {children}
    </DictionaryContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(DictionaryContext)
}

export {DictionaryContext, DictionaryProvider}
