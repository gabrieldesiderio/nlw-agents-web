export type GetRoomsResponse = {
  results: Array<{
    id: string
    name: string
    questionsCount: number
    createdAt: string
  }>
}
