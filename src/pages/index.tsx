
import { Button, Flex, FormErrorMessage, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string,
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('E-mail inválido'),
  password: yup.string().required('Password obrigatório')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values)
  }

  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      alignItems="center"
      justifyContent="center"

    >
      <Flex
        as="form"
        w={"100%"}
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Input type='email' label='E-mail' name="email" id="email"
            error={errors.email}
            {...register("email")} />

          <Input type='password' label='Password' name="password" id="password"
            error={errors.password}
            {...register("password")}

          />
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme='pink'
          isLoading={formState.isSubmitting}
        >Entrar</Button>
      </Flex>
    </Flex>
  )
}
