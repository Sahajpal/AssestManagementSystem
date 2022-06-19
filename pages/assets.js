import React from 'react'
import { ChakraProvider, SimpleGrid, Container } from '@chakra-ui/react'
import Card from '../components/cards'

function Assets() {
  const dataList = [
    {
      id: '1',
      product: 'Product 1',
      summary: 'This is a summary, can be any length',
      longLine: 'Wow, this is very descriptive! I wonder how long it is'
    },
    {
      id: '2',
      product: 'Product 2',
      summary: 'This is a summary, can be any length',
      longLine: 'Wow, this is very descriptive! I wonder how long it is'
    },
    {
      id: '3',
      product: 'Product 3',
      summary: 'This is a summary, can be any length',
      longLine: 'Wow, this is very descriptive! I wonder how long it is'
    },
    {
      id: '4',
      product: 'Product 4',
      summary: 'This is a summary, can be any length',
      longLine: 'Wow, this is very descriptive! I wonder how long it is'
    },
    {
      id: '5',
      product: 'Product 5',
      summary: 'This is a summary, can be any length',
      longLine: 'Wow, this is very descriptive! I wonder how long it is'
    },
    {
      id: '6',
      product: 'Product 6',
      summary: 'This is a summary, can be any length',
      longLine: 'Wow, this is very descriptive! I wonder how long it is'
    }
  ]

  return (
    <ChakraProvider>
      <Container maxW="80rem" centerContent>
        <SimpleGrid columns={[1, 2, 1, 2]}>
          {dataList.map(function (data) {
            const { id, product, summary, longLine } = data
            return (
              <Card
                key={id}
                product={product}
                summary={summary}
                longLine={longLine}
              />
            )
          })}
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  )
}

export default Assets
