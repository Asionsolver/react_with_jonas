import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((elements, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={elements.title}
          num={i}
          key={elements.title}
        >
          {elements.text}
        </AccordionItem>   
      ))}

      <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title="test"
          num={22}
          key='test1'
        >
          <p>Allow React Developer</p>
            <ul>
              <li>Must have know how to components work.</li>
              <li>Must have know how to state work.</li>
            </ul>
          </AccordionItem>
    </div>
  );
}

function AccordionItem({ num,curOpen,children, onOpen, title, text }) {
  const isOpen = num === curOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num)
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{children}</div> : ""}
    </div>
  );
}

export default App;
