import { Navigate, useParams } from 'react-router-dom'

type RoomParams = {
  roomId: string
}

export function Room() {
  const params = useParams<RoomParams>()

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <div>
      Room Details
      <br />
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  )
}
