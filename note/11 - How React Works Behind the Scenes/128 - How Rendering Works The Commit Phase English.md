## How Rendering Works The Commit Phase

First Open Image ▶️ The commit phase and Browser Paint

Then continue 🔽

So we just finished learning about the render phase which resulted in a list of DOM updates and this list will now get used in the commit phase.

Now, technically speaking, the current work in progress fiber tree also goes into this commit phase, but let's keep it simple here. So these are more conceptual diagrams so that we can understand what is happening, not a 100% accurate description of the algorithms inside React, all right? But anyway, as you know by now, the commit phase is where React finally writes to the DOM, so it inserts, deletes and updates DOM elements.

You'll sometimes also read that React flushes updates to the DOM in this phase.

So basically, React goes through the effects list that was created during rendering, and applies them one by one to the actual DOM elements that were in the already existing DOM tree.

Now riding to the DOM happens all in one go.

So we say that the commit phase is synchronous unlike the rendering phase, which can be paused. So committing cannot be interrupted. Now this is necessary so that the DOM never shows partial results which ensures that the UI always stays consistent.

In fact, that's the whole point of dividing the entire process into the render phase and the commit phase in the first place.

It's so that rendering can be paused, resumed, and discarded and the results of all that rendering can then be flushed to the DOM in one go. Then once the commit phase is completed, the work in progress fiber tree becomes the current tree for the next render cycle.

That's because, remember, fiber trees are never discarded and never recreated from scratch. Instead, they are reused in order to save precious rendering time. And with that, we close up the commit phase.

The browser will then notice that the DOM has been changed, and as a result, it will repaint the screen whenever it has some idle time. So this is where these DOM updates are finally made visible to the user in the form of an updated user interface.

Now, I'm not gonna go into how this phase works because this is really more about how browsers work internally, and not React. However, there's still one more thing that we need to talk about.

So the browser paint face that we just mentioned is of course performed by whatever browser the user is using. And the render phase is obviously performed by the React Library. But what about the commit phase? We would think that it's also done by React, right? But actually that's not true. It's actually a separate library that writes to the DOM, and it's called React DOM.

So not very creative, but that's just what it's called.

First Open Image ▶️ The commit phase and Browser Paint Part 2

Then continue 🔽

So in fact, React itself does never touch the DOM, and it actually has no idea where the result of the render phase will actually be committed and painted. So React only does the render phase but not the commit phase. And the reason for that is that React itself was designed to be used independently from the platform where elements will actually be shown, and therefore React can be used with many different so-called hosts. Now up until this point, we have only ever thought of React in conjunction with a DOM because we usually use it to build web application.

And in 90% of the cases, that's actually what we do with React.

But the truth is that React is used with other hosts as well. For example, we can actually build native mobile applications for iOS and Android using React Native, or we can build videos with React using a package called Remotion. And we can even create all kinds of documents like Word or PDF documents, Figma designs and many more, using different so-called renderers.

Now, if we think about this, Renderer is actually a pretty terrible name because according to React's own terminology, Renderers do not render, but they commit the results of the render phase.

But I think that this Renderer name comes from a time before React divided the render and the commit phase into two separate phases.

And so they chose this term of Renderer because it fits with the common sense definition of rendering.

But anyway, in all these situations, the results of the render phase is not really a list of DOM updates, but a list of updates of whatever elements are used in the host that's being used. So the term virtual DOM, then, also doesn't really make much sense when we look at it from this angle, which is just one more reason why the React team prefers the more accurate name of React Elementary.

Now, all these details are of course not really that important. What I want you to retain from this slide is that the React Library is not the one responsible for writing to the DOM, because the DOM is just one of many hosts to which React apps can be committed, so to which they can be output, basically. And for each of these hosts we have a different package that we can use. And that's why in our index.js file, we always import both React and React DOM, right?

And so now you know the exact reason why we have to do that.

First Open Image ▶️ Recap: Putting it all together

Then continue 🔽

All right, so after looking at all these phases in so much detail, let's do a quick recap here and summarize everything that we have learned.

So the whole process of rendering and displaying a React application on the screen starts with a trigger, which can either be the initial render of the app or, a state update in one of the component instances. This then triggers the render phase which does not produce any visual output.

So this phase starts by rendering all component instances that need a re-render. And rendering in React simply means to call the components functions. This will create one or more updated React elements which will be placed in a new virtual DOM, which is actually simply a tree of React elements.

Now, what's really important to remember about this process is that rendering a component will cause all of its child components to be rendered as well, no matter if props changed or not. This is because React doesn't know whether children have been affected by the parent re-rendering or not.

Now, next up, this new virtual DOM needs to be reconciled with the current fiber tree. So with the representation of the elementary before the state update. This is necessary because it would be slow and inefficient to destroy and rebuild the entire DOM tree each time that something on the screen must be updated. Instead, reconciliation tries to reuse as much of the DOM as possible by finding the smallest number of DOM updates that reflect the latest state update on the screen.

Now this reconciliation process is done using a reconciler called Fiber, which works with immutable data structure called the fiber tree. And in this tree, for each React element and DOM element, there is a fiber, and this fiber holds the actual component state, props, and a queue of work.

After reconciliation, this queue of work will contain the DOM updates that are needed for that element. Now the computation of these DOM updates is performed by a diffing algorithm, which step by step compares the elements in the new virtual DOM with the elements in the current fiber tree, so to see what has changed.

So the final result of the render phase, so basically of this reconciliation and diffing process, is a second updated fiber tree as well as a list of all necessary DOM updates.

Now, it's important to note that the render face is asynchronous so fiber can prioritize and split work into chunks and pause and resume some work later. And this is necessary for concurrent features and also to prevent the JavaScript engine to be blocked by complex render processes.

But anyway, the output of the render phase, so the list of DOM updates, will finally actually be written to the DOM in the commit phase. So in this phase, a so-called renderer like React DOM will insert, delete, and update DOM elements so that we end up with an updated DOM that reflects the new state of the application. And unlike the render phase, the commit phase is actually synchronous. So all the DOM updates are performed in one go in order to ensure a consistent UI over time.

Now finally, once the browser realizes that the DOM has been updated, it starts a new browser paint in order to visually update the user interface on the screen. Okay, and there you have it.
