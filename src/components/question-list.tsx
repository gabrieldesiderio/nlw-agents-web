import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useRoomQuestions } from '@/http/use-room-questions'
import { QuestionItem } from './question-item'

interface QuestionListProps {
  roomId: string
}

export function QuestionList({ roomId }: QuestionListProps) {
  const { data } = useRoomQuestions(roomId)

  const [parent] = useAutoAnimate()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Perguntas & Respostas
        </h2>
      </div>

      <div className="space-y-6" ref={parent}>
        {data?.questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </div>
    </div>
  )
}
