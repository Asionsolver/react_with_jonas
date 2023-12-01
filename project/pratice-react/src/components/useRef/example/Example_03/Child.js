// Filename - Child.js:

import { useState } from 'react';
function Child({reference, setName}) {
	const [input, setInput] = useState("");

	return (
		<div style={{ marginTop: "30px" }}>

			<div>Child Component</div>
			{/*The input onchange function will set 
			the input state variable*/}
			<input type="text" onChange=
				{(e) => { setInput(e.target.value) }}>
			</input>

			{/* This has reference which is 
			sent by Parent as props*/}
			<button ref={reference} 
				style={{ display: "none" }}
				onClick={() => { setName(input) }} >
			</button>
		</div>
	)
}
export default Child;
