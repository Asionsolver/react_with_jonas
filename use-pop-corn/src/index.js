// import React, { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './StarRating'

// function Test(){
//   const [movieRating, setMovieRating] = useState(0);
//   return(
//     <div>
//       <StarRating maxRating={10} size={34} color='blue' onSetMovieRating={setMovieRating}/>
//       <p>This movies was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating defaultRating={3}/>
    <StarRating maxRating={5} size={24} color='blue' className='test' messages={['Terrible','Bad','Okay','Good','Amazing']}/>
    <Test/> */}
  </React.StrictMode>
);


