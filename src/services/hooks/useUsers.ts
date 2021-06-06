import { useQuery } from "react-query"
import api from "../api"

type UserProps = {
  id: string;
  name: string;
  email: string;
  createdAt: string;

}

export async function getUsers(): Promise<UserProps[]> {

  const response = await api.get('users')

  const users = response.data.users.map(user => {
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

}

export function useUsers() {
  return useQuery('users', getUsers, { staleTime: 1000 * 5 })

}