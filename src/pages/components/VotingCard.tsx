export type Task = {
  id: string;
  title: string;
};

export const VotingCard = ({ id, title }: Task) => {
  return (
    <div
      className="m-5 text-center w-32 h-40 bg-white rounded-xl overflow-hidden shadow-lg p-6"
      key={id}
    >
      <h1 className="text-8xl text-gray-800">{title}</h1>
    </div>
  );
};
