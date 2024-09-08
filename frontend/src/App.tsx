import { useState } from "react";
import axios from "axios";
import "./App.css";
import closeIcon from "./assets/close.png";
import toast, { Toaster } from "react-hot-toast";
import { Rooms } from "./Rooms.tsx";

function App() {
  // const blocks = [B1,B2,B3,B4,B5,B6,B,7]
  const [block, setBlock] = useState("");
  const [floor, setFloor] = useState<number>(-1);
  const [room, setRoom] = useState<number>(-1);
  const [roomResults, setRoomResults] = useState([]);
  const [pref, setPreference] = useState("");
  const [showModal, setShowModal] = useState(false);

  axios.defaults.baseURL = import.meta.env.VITE_API;

  function isEmptyFields() {
    // non-empty fields check
    if (block == "") {
      toast.error("Block can't be empty");
      return true;
    }
    if (room == -1 || floor == -1) {
      toast.error("Room / Floor can't be empty");
      return true;
    }
    return false;
  }

  async function handleSearch() {
    await axios({
      url: `/rooms?block=${block}`,
      method: "GET",
    }).then((res) => {
      if (res.data.length == 0) {
        toast.error("No Results Found");
      } else {
        setShowModal(true);
        setRoomResults(res.data);
      }
    });
  }

  async function handleAdd() {
    // const data = { block: block, floorNo: floor, roomNo: room, note: pref };

    if (isEmptyFields()) {
      return;
    }

    await axios({
      url: `/rooms`,
      method: "POST",
      data: { block: block, floorNo: floor, roomNo: room, note: pref },
    })
      .then(() => toast.success("Added your room!"))
      .catch((e) => {
        console.log(e.response.data.message);
        toast.error(
          e.status == 409
            ? e.response.data.message
            : e.status == 405
            ? "Room already exists"
            : "An Error Occured"
        );
      });
  }

  async function handleRemove() {
    if (isEmptyFields()) {
      return;
    }
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
        <div
          className={`${
            showModal ? "flex" : "hidden"
          } absolute flex flex-col w-[80vw] h-[80vh] p-4 bg-white shadow-md self-center`}
        >
          <div
            id="header"
            className="flex flex-row justify-between items-center"
          >
            <h2 className="text-2xl">Results</h2>
            <img
              src={closeIcon}
              className="h-6 w-6 cursor-pointer"
              alt=""
              onClick={() => {
                setShowModal(false);
              }}
            />
          </div>
          <hr />
          <Rooms results={roomResults} />
        </div>
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
            onChange={(event) => setBlock(event.target.value)}
          >
            <option value="">Block</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="B3">B3</option>
            <option value="B4">B4</option>
            <option value="B5">B5</option>
            <option value="B6">B6</option>
            <option value="B7">B7</option>
            <option value="B8">B8</option>
            <option value="B9">B9</option>
            <option value="B10">B10</option>
            <option value="G1">G1</option>
            <option value="G2">G2</option>
            <option value="G3">G3</option>
            <option value="G4">G4</option>
            <option value="G5">G5</option>
            <option value="G6">G6</option>
            <option value="G7">G7</option>
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
            onChange={(event) => setBlock(event.target.value)}
          >
            <option value="">Block</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="B3">B3</option>
            <option value="B4">B4</option>
            <option value="B5">B5</option>
            <option value="B6">B6</option>
            <option value="B7">B7</option>
            <option value="B8">B8</option>
            <option value="B9">B9</option>
            <option value="B10">B10</option>
            <option value="G1">G1</option>
            <option value="G2">G2</option>
            <option value="G3">G3</option>
            <option value="G4">G4</option>
            <option value="G5">G5</option>
            <option value="G6">G6</option>
            <option value="G7">G7</option>
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
            onChange={(event) => setBlock(event.target.value)}
          >
            <option value="">Block</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="B3">B3</option>
            <option value="B4">B4</option>
            <option value="B5">B5</option>
            <option value="B6">B6</option>
            <option value="B7">B7</option>
            <option value="B8">B8</option>
            <option value="B9">B9</option>
            <option value="B10">B10</option>
            <option value="G1">G1</option>
            <option value="G2">G2</option>
            <option value="G3">G3</option>
            <option value="G4">G4</option>
            <option value="G5">G5</option>
            <option value="G6">G6</option>
            <option value="G7">G7</option>
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
