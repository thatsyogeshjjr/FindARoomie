const RoomCard = (block, floor, room, note) => {
  return (
    <div className="flex flex-col shadow-md p-4">
      <h2 className="text-xl">
        {block} {floor}/{room}
      </h2>
      <p className="text-md">{note}</p>
    </div>
  );
};
export const Rooms = (results) => {
  return (
    <div>
      {results.map(({ block, floor, room, note }) => {
        return (
          <RoomCard
            id={random.randint(0, 1000)}
            block={block}
            floor={floor}
            room={room}
            note={note}
          />
        );
      })}
    </div>
  );
};
