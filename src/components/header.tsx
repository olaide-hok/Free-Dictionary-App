import {
  Divider,
  Flex,
  FormControl,
  HStack,
  Icon,
  Select,
  Switch,
} from '@chakra-ui/react'
import React from 'react'
import {BiBook} from 'react-icons/bi'
import {FaMoon} from 'react-icons/fa'

const Header = () => {
  return (
    <Flex justifyContent="space-between" pb="8">
      <Icon as={BiBook} boxSize="8" />
      <HStack spacing="4">
        <FormControl>
          <Select id="font" aria-label="form">
            <option value="se">Serif</option>
            <option value="sa">Sans</option>
            <option value="mo">Mono</option>
            <option value="co">Cordana</option>
          </Select>
        </FormControl>
        <Divider orientation="vertical" />
        <Switch size="md" />
        <Icon as={FaMoon} bgColor="transparent" />
      </HStack>
    </Flex>
  )
}

export default Header
