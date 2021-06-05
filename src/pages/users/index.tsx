import {
  Box,
  Button,
  Checkbox, Flex,
  Heading,
  HStack, Icon,
  Table,
  Tbody,
  Td,
  Text, Th, Thead,
  Tr,
  useBreakpointValue,
  Spinner
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

import { useQuery } from 'react-query'

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })

      }
    })

    return users
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["2", "4", "6", "8"]}>
          <Flex mb="8" w={["90%", "100%"]} mt="4" justify="space-between" align="center" mx="auto">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button as="a" size="sm" colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize={["16", "20"]} />}>Criar novo</Button>
            </Link>
          </Flex>
          {isLoading ? (
            <Flex justify="center" align="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex><Text>Algo deu errado</Text></Flex>
          ) :
            <>

              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={['2', '4', '6']} color="gray.300" w="8">
                      <Checkbox colorScheme='pink' />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th w={["2", "4", "6", "8"]}></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.map(user => (
                    <Tr key={user.id}>
                      <Td px={['2', '4', '6']}>
                        <Checkbox colorScheme='pink' />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="sm" color='gray.300'>{user.email}</Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>
                        <Text>{user.createdAt}</Text>
                      </Td>}
                      <Td>
                        <HStack spacing="2" align="center" >
                          <Button as="a" size="xs" colorScheme="purple"
                            leftIcon={<Icon as={RiPencilLine} />}>{isWideVersion && 'Editar'}</Button>
                          <Button as="a" size="xs" colorScheme="red"
                            leftIcon={<Icon as={RiDeleteBinLine} fontSize="16" />}>{isWideVersion && 'Deletar'}</Button>
                        </HStack>

                      </Td>
                    </Tr>


                  ))}
                </Tbody>
              </Table>

              <Pagination />

            </>
          }
        </Box>
      </Flex>
    </Flex >
  )
}