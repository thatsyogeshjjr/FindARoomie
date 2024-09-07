const RoomCard = ({ block, floor, room, note }) => {
  return (
    <div className="flex flex-col shadow-md p-4">
      <h2 className="font-bold text-xl">
        Floor {floor} in Room {room}
      </h2>
      <p className="text-md">{note}</p>
    </div>
  );
};
export const Rooms = (results) => {
  console.log(results.results);
  if (results.results.length == 0) {
    return (
      <div>
        <h2>Found no results.</h2>
      </div>
    );
  } else {
    return (
      <div>
        {results.results.map((data, index) => (
          <RoomCard
            key={index}
            block={data.block}
            floor={data.floorNo}
            room={data.roomNo}
            note={data.note}
          />
        ))}
      </div>
    );
  }
};
