import { Button, Heading, Input, Stack,Card,CardBody,Text } from '@chakra-ui/react'

function App() {

  return (
    <>
      <Heading noOfLines={1} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint vitae at molestiae nam recusandae illo deserunt dolorum soluta nemo similique, sapiente rem odit laboriosam incidunt aut vero culpa ducimus.
      </Heading>
      <Button colorScheme='pink' variant='solid'>heyyyy</Button>
      <Stack spacing={3}>
  <Input focusBorderColor='lime' placeholder='Here is a sample placeholder' />
  <Input
    focusBorderColor='pink.400'
    placeholder='Here is a sample placeholder'
  />
  <Input
    isInvalid
    errorBorderColor='red.300'
    placeholder='Here is a sample placeholder'
  />
  <Input
    isInvalid
    errorBorderColor='crimson'
    placeholder='Here is a sample placeholder'
  />
</Stack>
<Card>
  <CardBody>
    <Text>View a summary of all your customers over the last month.</Text>
  </CardBody>
</Card>
    </>
  )
}

export default App
