
import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      alignItems="center"
      justifyContent="center">
      <Flex
        as="form"
        w={"100%"}
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection='column'
      >
        <Stack spacing='4'>
          <Input type='email' label='E-mail' name='e-mail' />
          <Input type='password' label='Password' name='password' />
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme='pink'
        >Entrar</Button>
      </Flex>
    </Flex>
  )
}
