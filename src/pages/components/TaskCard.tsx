export type Task = {
  id: string;
  title: string;
  description: string;
  selectedTaskId?: string;
};

export const TaskCard = ({ id, title, description, selectedTaskId }: Task) => {
  const selectedTaskBorder =
    selectedTaskId === id ? "border-blue-500 border-8" : "";
  return (
    <div
      className={`max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-6 m-5 sm:flex sm:items-center ${selectedTaskBorder}`}
      key={id}
    >
      <div className="mt-4 sm:mt-0 sm:ml-4">
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
