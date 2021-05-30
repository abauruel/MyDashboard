import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

interface NavsectionProps {
  title: string,
  children: React.ReactNode
}
export function NavSection({ title, children }: NavsectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}