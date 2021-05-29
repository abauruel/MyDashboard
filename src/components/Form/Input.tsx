interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl isRequired>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput id='email' name="email"
        focusBorderColor='pink.500' bg="gray.900" variant='filled'
        _hover={{
          bgColor: 'gray.900'
        }}
        size='lg'
        {...label}
      />
    </FormControl>
  )
}