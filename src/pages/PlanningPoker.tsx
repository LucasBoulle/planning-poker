import { TaskCard } from "./components/TaskCard"

export const PlanningPoker = () => {
  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="basis-3/4"></div>
      <div className="basis-1/4 py-4"><TaskCard /></div>
    </div>
  )
}
