import {
  // Button,
  Divider,
  Flex,
  // FormControl,
  HStack,
  Icon,
  IconButton,
  // Select,
  // Switch,
  useColorMode,
} from '@chakra-ui/react'
import React from 'react'
import {BiBook} from 'react-icons/bi'
import {FaMoon, FaSun} from 'react-icons/fa'

// {toggleColorMode, colorMode}: any
const Header = () => {
  const {toggleColorMode, colorMode} = useColorMode()

  return (
    <Flex justifyContent="space-between" pb="8">
      <Icon as={BiBook} boxSize="8" />
      <HStack spacing="4">
        {/* <FormControl> */}
        <select title="font">
          <option value="se">Serif</option>
          <option value="sa">Sans</option>
          <option value="mo">Mono</option>
          <option value="co">Cordana</option>
        </select>
        {/* </FormControl> */}
        <Divider orientation="vertical" display={{base: 'none'}} />

        {/* <Button onClick={toggleColorMode} bgColor="transparent">
          <Switch size="md" colorScheme="red" />
          <Icon
            as={colorMode === 'light' ? FaSun : FaMoon}
            bgColor="transparent"
          />
        </Button> */}

        <IconButton
          variant="solid"
          aria-label="toggle theme"
          rounded="full"
          bgColor="transparent"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        />
      </HStack>
    </Flex>
  )
}

export default Header
