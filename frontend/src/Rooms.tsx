import React from "react";

interface RoomsProps {
  results: dataObj[];
}

interface RoomDetails {
  floor: number;
  room: number;
  note: string;
}

interface dataObj {
  floorNo: number;
  roomNo: number;
  note: string;
}

const RoomCard = ({ floor, room, note }: RoomDetails) => {
  return (
    <div className="flex flex-col shadow-md p-4">
      <h2 className="font-bold text-xl">
        Floor {floor} in Room {room}
      </h2>
      <p className="text-md">{note}</p>
    </div>
  );
};

export const Rooms: React.FC<RoomsProps> = ({ results }) => {
  console.log(results);
  if (results.length == 0) {
    return (
      <div>
        <h2>Found no results.</h2>
      </div>
    );
  } else {
    return (
      <div>
        {results.map((data: dataObj, index: number) => (
          <RoomCard
            key={index}
            // block={data.block}
            floor={data.floorNo}
            room={data.roomNo}
            note={data.note}
          />
        ))}
      </div>
    );
  }
};
