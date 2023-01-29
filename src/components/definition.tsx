import {ListItem, SkeletonText, UnorderedList} from '@chakra-ui/react'

type Props = {
  definition: String
  loading: Boolean
}

const Definiton = ({definition, loading}: Props) => {
  return (
    <UnorderedList pl="8">
      <SkeletonText
        isLoaded={!loading}
        noOfLines={4}
        spacing="4"
        skeletonHeight="4">
        <ListItem>{definition}</ListItem>
      </SkeletonText>
    </UnorderedList>
  )
}

export default Definiton
