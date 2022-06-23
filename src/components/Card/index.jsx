export function Card({name, time}) {
  return (
    <div className="h-16 p-6 w-1/2 bg-purple-500 text-white rounded-[10px] mb-5 flex items-center justify-between duration-300 hover:bg-purple-600">
      <strong className="text-lg">{name}</strong>
      <small>{time}</small>
    </div>
  )
}
