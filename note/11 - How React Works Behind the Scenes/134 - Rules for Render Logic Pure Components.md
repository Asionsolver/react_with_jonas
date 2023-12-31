## Rules for Render Logic Pure Components

First Open The Image▶️ The two types of logic in react components

Then Continue🔽

In order for the rendering process to work in the way that we just learned before, our render logic needs to follow some simple rules. So, let's look at these rules in this lecture but first of all,

what actually is render logic?

Well, in order to understand that, let's actually take a look at the two types of logic that we can write in React components.

So, that's render logic and event handler functions.

So, render logic is basically all the code that lifts at the top level of your component functions and that participates in describing how the view of a certain component instance should look like.

So in this code example, there is a lot of render logic. So we have these two lines of code at a top level and then also the return block where our component returns it's JSX. So these describe exactly how the component will be displayed on the screen.

However, if we look closely, we can identify yet another piece of render logic here, even though this code is actually inside a function. So as you can see in the return block, the code there is actually calling this createList function. And therefore, that logic also participates in describing the component view. And so, it's also render logic.

So basically, render logic is all the code that is executed as soon as the component is rendered. So each time that the function is called.

Now moving on to event handler functions, those are very easy to identify. So, they're basically pieces of code that are executed as a consequence of the event that the handler is listening to.

So in our example, we have this line of code that essentially registered handle new answer for the change event and therefore handle new answer is our event handle function. And this is of course nothing new at this point. So we have done this many times in the course, right?

But it's still important to differentiate between these two types of logic because they do actually do fundamentally different things.

So while render logic is code that renders the component, event handlers contain code that actually does things.

So basically code that makes things happen in the application. So, event handlers contain things like state updates, HTTP requests, reading input fields, page navigation, and many more. So all things that basically change and manipulate the application in some way.

Now why is this all so important?

Well, it's important because React requires that components are pure when it comes to render logic in order for everything to work as expected.

First Open The Image▶️ Refresher: Functional programming principles

Then Continue🔽

But what does pure actually mean?

To answer that, let's have a quick refresher on functional programming principles, which are quite important in React in general.

And let's start with side effects.

So, a side effect happens whenever a function depends on any data that is outside the function scope, or even more importantly whenever a function modifies data that is outside its scope. And I like to think as a side effect as a functions interaction with the outside world.

For example, this function is mutating an outside object. And so this is clearly a side effect.

Other examples of side effects are HTTP requests, riding to the DOM, setting timers and more.

The other important functional concept is pure functions, which are basically functions without side effects.

So basically, these are functions that do not change any variable outside their scope. Also, when we give a pure function the same input, it'll always return the same output.

For example, this function is clearly a pure function because if we give it the same argument r, it'll always give us the area of the circle based on that r value. So the output only depends on the inputs, which makes this function predictable.

This other function right here on the other hand is completely unpredictable because it returns a string that contains a date and that date changes every second.

So in this case, even if we give the function the same input, the output will always be different because the date will always be different and therefore, this is an impure function. And the same is true for the second function. So notice how this function mutates an outside variable, which of course makes this function impure as well.

Now, calling functions impure makes it sound as if side effects are somehow bad but that's actually not true. So, side effects are not bad in themselves. In fact, if we think about it, any program can only be useful if it has some interaction with the outside world at some point, right? Like a web application that never affects any data or never writes to the DOM is just completely useless.

However, in order to make useful and bug-free applications, we need to know when and how to create side effects,

First Open The Image▶️ Rules for render logic

Then Continue🔽

which brings us back to React and its rules for render logic.

And essentially, there's just one big rule, which is that components must be pure functions when it comes to render logic.

This means that if we give a certain component instance the same props, so the same input, then the component should always return the exact same output in the form of JSX.

In practice, this means that render logic is not allowed to produce any side effects.

So in other words, the logic that runs at the top level and is responsible for rendering the component should have no interaction with the outside world. This means that render logic is not allowed to perform network requests to create timers or to directly work with the DOM API.

For example, listening to events using at event listener. Now, according to what we learned previously, render logic must also not mutate objects or variables that are outside the scope of the component function. And this is actually the reason why we cannot mutate props, which remember is one of the hard rules of React. And so now you know why that rule exists. It's because doing so would be a side effect and side effects are not allowed.

Finally, we really cannot update state or refs in render logic. And updating state in render logic would actually create an infinite loop, which is why we can never do that. State updates are technically not side effects but it's still important for them to be on this list.

Now, there are other side effects that are technically not allowed as well, but that we create all the time like using console.log or creating random numbers.

So these are clearly interactions with the outside world but they don't seem to do any harm. And so we can safely keep doing them.

Alright, but now you might be wondering if all this stuff is not allowed, then how will I ever be able to make an API call to fetch some data?

Well, keep in mind that these side effects are only forbidden inside render logic. This means that you have other options for running your side effects. First of all, we saw earlier that event handler functions are not render logic and therefore, side effects are allowed and actually encouraged to be used inside these functions.

And second, if we need to create a side effect as soon as the component function is first executed, we can register that side effect using a special hook called useEffect.
