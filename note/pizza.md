// return React.createElement("footer",null,"We're currently open!")

<Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ric otta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}/>
<Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}/>

{pizzaData.map((pizza) => (
<Pizza name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} photoName={pizza.photoName} />
))}

{numPizzas > 0 &&(

<ul className="pizzas">
{pizzas.map((pizza) => (
<Pizza pizzaObj={pizza} key={pizza.name}/>
))}
</ul>
)}

{/_ <p>We're currently {isOpen ? "open" : "closed"}!</p> _/}

{numPizzas > 0 ?(

<ul className="pizzas">
{pizzas.map((pizza) => (
<Pizza pizzaObj={pizza} key={pizza.name}/>
))}
</ul>
):null}

if(!isOpen)
return(

<p>We're happy to welcome you between {openHours}:00 and {closeHour}:00</p>
);

{
pizzaObj.soldOut ? <span>Sold Out</span> : <span>{pizzaObj.price}</span>
}
