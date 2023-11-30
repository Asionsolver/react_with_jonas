//importing useRef 
import { useRef } from 'react'; 

const App = () => { 

	//creating a ref 
	const ref = useRef(); 
	// Styling the element 
	const handleClick = () => { 
    // console.log('Rendering')
		ref.current.style.backgroundColor = 'black'; 
		ref.current.style.padding = '3rem'; 
		ref.current.style.color = 'white'; 
		ref.current.style.width = '150px'; 
		ref.current.style.height = '150px'; 
		ref.current.style.margin = '50px'; 
		ref.current.style.borderRadius = '10px'; 
	}; 

	return ( 
		<div> 
			<h2>Welcome to GeeksForGeeks</h2> 
			<button onClick={handleClick}> 
				Enable dark mode 
			</button> 

			<br /> 
			<br /> 

			{/* Passing the ref to the DOM element , 
				we wish to style */} 
			<div ref={ref}>Article on styling an element 
				using useRef hook in React</div> 
		</div> 
	); 
}; 

export default App;
