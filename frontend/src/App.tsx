import { useState } from "react";
import axios from "axios";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";

function App() {
  // const blocks = [B1,B2,B3,B4,B5,B6,B,7]
  const [block, setBlock] = useState("");
  const [floor, setFloor] = useState(0);
  const [room, setRoom] = useState(0);
  const [pref, setPreference] = useState("");

  axios.defaults.baseURL = import.meta.env.VITE_API;

  async function handleSearch() {
    await axios({
      url: `/rooms?block=${block}`,
      method: "GET",
    }).then((res) => {
      if (res.data.length == 0) {
        toast.error("No Results Found");
      } else {
        console.log(res.data);
      }
    });
  }

  async function handleAdd() {
    const data = { block: block, floorNo: floor, roomNo: room, note: pref };

    await axios({
      url: `/rooms`,
      method: "POST",
      data: { block: block, floorNo: floor, roomNo: room, note: pref },
    })
      .then(() => toast.success("Added your room!"))
      .catch(() => toast.error("Room couldn't be added"));
  }

  async function handleRemove() {
    await axios({
      url: `/rooms`,
      method: "DELETE",
      data: { block: block, floorNo: floor, roomNo: room },
    })
      .then(() => toast.success("Room was removed"))
      .catch(() => toast.error("An Error occured."));
  }
  return (
    <>
      <div className="flex flex-col items-center w-screen">
        <div className="header w-fit m-2 mt-4 rounded-md p-5 bg-primary">
          <h2 className="text-2xl text-white font-bold">Find a Roomie</h2>
        </div>
        <div className="h-6"></div>
        <div className="shadow-md rounded-md px-6 py-4 flex flex-col gap-4">
          <div>
            <h3 className="text-xl">Find Rooms</h3>
            <hr />
          </div>
          <select
            name="block"
            id=""
            className="text-lg px-6 w-[60vw] sm:max-w-18 py-2 rounded-2xl bg-grey"
          >
            <option value="none" onClick={() => setBlock("b1")}>
              Block
            </option>
            <option value="b1" onClick={() => setBlock("b1")}>
              B1
            </option>
            <option value="b2" onClick={() => setBlock("b2")}>
              B2
            </option>
            <option value="b3" onClick={() => setBlock("b3")}>
              B3
            </option>
            <option value="b4" onClick={() => setBlock("b4")}>
              B4
            </option>
            <option value="b5" onClick={() => setBlock("b5")}>
              B5
            </option>
            <option value="b6" onClick={() => setBlock("b6")}>
              B6
            </option>
            <option value="b7" onClick={() => setBlock("b7")}>
              B7
            </option>
            <option value="b8" onClick={() => setBlock("b8")}>
              B8
            </option>
            <option value="b9" onClick={() => setBlock("b9")}>
              B9
            </option>
            <option value="b10" onClick={() => setBlock("b10")}>
              B10
            </option>
            <option value="g1" onClick={() => setBlock("g1")}>
              G1
            </option>
            <option value="g2" onClick={() => setBlock("g2")}>
              G2
            </option>
            <option value="g3" onClick={() => setBlock("g3")}>
              G3
            </option>
            <option value="g4" onClick={() => setBlock("g4")}>
              G4
            </option>
            <option value="g5" onClick={() => setBlock("g5")}>
              G5
            </option>
            <option value="g6" onClick={() => setBlock("g6")}>
              G6
            </option>
            <option value="g7" onClick={() => setBlock("g7")}>
              G7
            </option>
          </select>
          <button
            className="bg-dblue text-white rounded-3xl p-2 text-md w-fit px-8 py-2 "
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>
        <div className="shadow-md rounded-md px-6 py-4 flex flex-col gap-4">
          <div>
            <h3 className="text-xl">Add your room</h3>
            <hr />
          </div>
          <select
            name="block"
            id=""
            className="text-lg px-6 w-[60vw] sm:max-w-18 py-2 rounded-2xl bg-grey"
          >
            <option value="none" onClick={() => setBlock("b1")}>
              Block
            </option>
            <option value="b1" onClick={() => setBlock("b1")}>
              B1
            </option>
            <option value="b2" onClick={() => setBlock("b2")}>
              B2
            </option>
            <option value="b3" onClick={() => setBlock("b3")}>
              B3
            </option>
            <option value="b4" onClick={() => setBlock("b4")}>
              B4
            </option>
            <option value="b5" onClick={() => setBlock("b5")}>
              B5
            </option>
            <option value="b6" onClick={() => setBlock("b6")}>
              B6
            </option>
            <option value="b7" onClick={() => setBlock("b7")}>
              B7
            </option>
            <option value="b8" onClick={() => setBlock("b8")}>
              B8
            </option>
            <option value="b9" onClick={() => setBlock("b9")}>
              B9
            </option>
            <option value="b10" onClick={() => setBlock("b10")}>
              B10
            </option>
            <option value="g1" onClick={() => setBlock("g1")}>
              G1
            </option>
            <option value="g2" onClick={() => setBlock("g2")}>
              G2
            </option>
            <option value="g3" onClick={() => setBlock("g3")}>
              G3
            </option>
            <option value="g4" onClick={() => setBlock("g4")}>
              G4
            </option>
            <option value="g5" onClick={() => setBlock("g5")}>
              G5
            </option>
            <option value="g6" onClick={() => setBlock("g6")}>
              G6
            </option>
            <option value="g7" onClick={() => setBlock("g7")}>
              G7
            </option>
          </select>

          <input
            type="text"
            placeholder="Floor"
            className="outline-none border-dblue border-b-2"
            onChange={(event) => setFloor(parseInt(event.target.value))}
          />
          <input
            type="text"
            placeholder="Room No."
            className="outline-none border-dblue border-b-2"
            onChange={(event) => setRoom(parseInt(event.target.value))}
          />
          <textarea
            name=""
            id=""
            className="outline-none border-dblue border-b-2"
            placeholder="Your contact + Any preferences ?"
            onChange={(event) => setPreference(event.target.value)}
          ></textarea>

          <button
            className="bg-dblue text-white rounded-3xl p-2 text-md w-fit px-8 py-2 "
            onClick={() => handleAdd()}
          >
            Add
          </button>
        </div>
        <div className="shadow-md rounded-md px-6 py-4 flex flex-col gap-4">
          <div>
            <h3 className="text-xl">Remove your Room</h3>
            <hr />
          </div>
          <select
            name="block"
            id=""
            className="text-lg px-6 w-[60vw] sm:max-w-18 py-2 rounded-2xl bg-grey"
          >
            <option value="none" onClick={() => setBlock("b1")}>
              Block
            </option>
            <option value="b1" onClick={() => setBlock("b1")}>
              B1
            </option>
            <option value="b2" onClick={() => setBlock("b2")}>
              B2
            </option>
            <option value="b3" onClick={() => setBlock("b3")}>
              B3
            </option>
            <option value="b4" onClick={() => setBlock("b4")}>
              B4
            </option>
            <option value="b5" onClick={() => setBlock("b5")}>
              B5
            </option>
            <option value="b6" onClick={() => setBlock("b6")}>
              B6
            </option>
            <option value="b7" onClick={() => setBlock("b7")}>
              B7
            </option>
            <option value="b8" onClick={() => setBlock("b8")}>
              B8
            </option>
            <option value="b9" onClick={() => setBlock("b9")}>
              B9
            </option>
            <option value="b10" onClick={() => setBlock("b10")}>
              B10
            </option>
            <option value="g1" onClick={() => setBlock("g1")}>
              G1
            </option>
            <option value="g2" onClick={() => setBlock("g2")}>
              G2
            </option>
            <option value="g3" onClick={() => setBlock("g3")}>
              G3
            </option>
            <option value="g4" onClick={() => setBlock("g4")}>
              G4
            </option>
            <option value="g5" onClick={() => setBlock("g5")}>
              G5
            </option>
            <option value="g6" onClick={() => setBlock("g6")}>
              G6
            </option>
            <option value="g7" onClick={() => setBlock("g7")}>
              G7
            </option>
          </select>

          <input
            type="text"
            placeholder="Floor"
            className="outline-none border-dblue border-b-2"
            onChange={(event) => setFloor(parseInt(event.target.value))}
          />

          <input
            type="text"
            placeholder="Room No."
            className="outline-none border-dblue border-b-2"
            onChange={(event) => setRoom(parseInt(event.target.value))}
          />

          <button
            className="bg-dblue text-white rounded-3xl p-2 text-md w-fit px-8 py-2 "
            onClick={() => handleRemove()}
          >
            Get if off here
          </button>
        </div>
        <div className="h-4"></div>
        <p>This page is not affliated via GHS, it's a student project</p>
        <p className="italic">For students, By students</p>
        <div className="h-4"></div>
        <p>Having Problems / love my work?</p>
        <p>Contact me: yogeshjajoria2019@gmail.com</p>
      </div>
      <Toaster />
    </>
  );
}

export default App;
