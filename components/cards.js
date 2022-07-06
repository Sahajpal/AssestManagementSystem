import React from 'react'
import {
  AspectRatio,
  Image,
  Text,
  Stack,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react'

function Card(props) {
  const { product, summary, longLine } = props

  return (
    <LinkBox
      p={4}
      display={{ md: 'flex' }}
      maxWidth="32rem"
      borderWidth={1}
      margin={2}
      rounded="md"
    >
      <AspectRatio ratio={1 / 1}>
        <Image
          maxWidth="200px"
          margin="auto"
          src="images/Logo.jpeg"
          alt="Woman paying for a purchase"
        />
      </AspectRatio>
      <Stack
        align={{ base: 'center', md: 'stretch' }}
        textAlign={{ base: 'center', md: 'left' }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >
        <LinkOverlay
          href="#"
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          {product}
        </LinkOverlay>
        <Text
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
          fontWeight="semibold"
        >
          {summary}
        </Text>
        <Text my={2} color="gray.500">
          {longLine}
        </Text>
      </Stack>
    </LinkBox>
  )
}

export default Card
