##### Before we heard or read that we should never initialize state from props.However, this is only true, if you want the state variable to stay in sync with that passed in props. Or in other words, if you want the state value to update in case that the prop value is also updated. So it's really no problem to initialize your state based on a prop.

```Javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating'

function Test(){
  const [movieRating, setMovieRating] = useState(0);
  return(
    <div>
      <StarRating maxRating={10} size={34} color='blue' onSetMovieRating={setMovieRating}/>
      <p>This movies was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating defaultRating={3}/>
    <StarRating maxRating={5} size={24} color='blue' className='test' messages={['Terrible','Bad','Okay','Good','Amazing']}/>
    <Test/>
  </React.StrictMode>
);

```

```Javascript

const containerStyle={
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
};

const starContainerStyle={
    display: 'flex',
}



export default function StarRating({
    maxRating = 5,
    color="#fcc419",
    size = 48,
    defaultRating = 0,
    className = '',
    messages = [],
    onSetMovieRating,
    }){
    const [rating, setRating] = useState(defaultRating);
    const [tempRating, setTempRating] = useState();

    const textStyle={
    lineHeight: '1',
    margin: '0',
    color,
    fontSize:`${size}px`,
    }

    function handleRating(rating){
        setRating(rating);
        onSetMovieRating(rating);
    }

    return(
        <div style={containerStyle}>
           <div style={starContainerStyle}>
               {Array.from({length: maxRating}, (_,i) =>(
                <Star
                  key={i}
                  onRating={()=>handleRating(i + 1)}
                  full={tempRating ? tempRating>= i + 1 : rating >= i + 1}
                  onHoverIn={() => setTempRating(i + 1)}
                  onHoverOut={() => setTempRating(0)}
                  size={size}
                  color= {color}
                />
           ))}
           </div>
           <p style={textStyle}>{messages.length === maxRating ? messages[tempRating ? tempRating - 1 : rating - 1] : tempRating || rating || ""}</p>
        </div>
    );
}


function Star({onRating, full, onHoverIn,color, onHoverOut}){
    const starStyle={
        width: `${size}px`,
        height: `${size}px`,
        display: "block",
        cursor: "pointer",
    };
    return(
      <span
       role='button'
       style={starStyle}
       onClick={onRating}
       onMouseEnter={onHoverIn}
       onMouseLeave={onHoverOut}
       >
        {full ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={color}
            stroke={color}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>): (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke={color}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
            </svg>)}
      </span>
    );
}

```
