import { useState } from "react";
import { tasksMock, votingNumbersMock } from "../constants";
import { Task, TaskCard } from "./components/TaskCard";
import { VotingCard } from "./components/VotingCard";

export const PlanningPoker = () => {
  const tasks: Task[] = tasksMock;
  const votingNumbers: string[] = votingNumbersMock;
  const [votingTask, setVotingTask] = useState(tasks[0] || null)
  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="basis-3/4">
        <h1 className="text-white m-10">{votingTask?.title}</h1>
        <div className="grid grid-cols-3 justify-items-center content-center">
          {votingNumbers.map((number) => (
            <VotingCard id={number} title={number} />
          ))}
        </div>
      </div>
      <div className="basis-1/4 py-4">
        {tasks.map(({ id, title, description }) => (
          <TaskCard id={id} title={title} description={description} selectedTaskId={votingTask?.id} />
        ))}
      </div>
    </div>
  );
};
