import {useState} from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Underwear", quantity: 12, packed: false },
  { id: 4, description: "T-Shirts", quantity: 6, packed: true },
  { id: 5, description: "Pants", quantity: 4, packed: true },
  
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 💼</h1>;
}
function Form() {
  const[description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);



  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;
    const newItem = {
      description,
      quantity,
      id: new Date().getTime(),
      packed: false};
      console.log(newItem);
      setDescription("");
      setQuantity(1);
  }


  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for 😍 your trip?</h3>
      <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <option value={number} key={number}>{number}</option>
        ))}
      </select>
      <input type="text" placeholder="Item...." value={description} onChange={(e)=>setDescription(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? {textDecoration:'line-through'} : {}}>
      {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>👜You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
