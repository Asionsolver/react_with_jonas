# How Rendering Works

First Open Image-> Review: The Mechanics of state in React

Then Continue 🔽

Remember this diagram?

Well, back then I told you that we can conceptually imagine this as a new view being rendered on the screen, so into the DOM.

However, now we know that this was technically not true because rendering is not about the screen or the DOM or the view, it's just about calling component functions.

I also told you that whenever there is a re-render, React discards the old component view and replaces it with a brand new one.

However, that's also technically not true. So the DOM will actually not be updated for the entire component instance. So if those things are not true, then let's now learn what happens instead and how rendering actually works.

First Open Image-> The Render Phase

Then Continue 🔽

So, in the previous lecture we talked about how renders are triggered. In this lecture, we're gonna learn all about how renders are actually performed in the render phase.

So, at the beginning of the render phase React will go through the entire component tree, take all the component instances that triggered a re-render and actually render them, which simply means to call the corresponding component functions that we have written in our code.

This will create updated React elements which altogether make up the so-called virtual DOM. And this is a term that you might have heard before and so let's dig a little bit deeper now into what the virtual DOM actually is.

First Open Image-> The virtual Dom(React Element Tree)

Then Continue 🔽

So on the initial render, React will take the entire component tree and transform it into one big React element which will basically be a React element tree like this one. And this is what we call the virtual DOM.

So, the virtual DOM is just a tree of all React elements created from all instances in the component tree. And it's relatively cheap and fast to create a tree like this, even if we need many iterations of it because in the end it's just a JavaScript object. Now, virtual DOM is probably the most hyped and most used term when people describe what React is and how it works. But if we think about it, if the virtual DOM is just the simple object, it's actually not such a big deal, right?

And that's why the React team has really downplayed the meaning of this name.

And the official documentation actually no longer mentioned the term virtual DOM anywhere. But I'm still using this term here because everyone still uses it and also because it just sounds a bit nicer than React element tree. Also, some people confuse the term with the shadow DOM, even though it has nothing to do with the virtual DOM in React. So the shadow DOM is actually just a browser technology that is used in stuff like web components.

But anyway, let's now suppose that there is gonna be a state update in component D, which will of course trigger a re-render.

That means that React will call the function of component D again and place the new React element in a new React element tree. So, in a new virtual DOM.

But now comes the very important part, which is this. Whenever React renders a component, that render will cause all of its child components to be rendered as well. And that happens no matter if the props that we passed down have changed or not.

So again, if the updated components returns one or more other components, those nested components will be re-rendered as well, all the way down the component tree. This means that if you update the highest component in a component tree, in this example component A, then the entire application will actually be re-rendered.

Now, this may sound crazy, but React uses this strategy because it doesn't know beforehand whether an update in a component will affect the child components or not.

😛 And so by default, React prefers to play it safe and just render everything.

Also, keep in mind once again that this does not mean that the entire DOM is updated. It's just a virtual DOM that will be recreated which is really not a big problem in small or medium sized applications.

Okay, so with this, we now know what this new virtual DOM here means and so let's keep moving forward.

First Open Image-> The Render Phase part 2

Then Continue 🔽

So what happens next is that this new virtual DOM that was created after the state update will get reconciled with the current so-called Fiber tree as it exists before the state update.

Now this reconciliation is done in React's reconciler which is called Fiber. Now that's why we have a Fiber tree.

Then the results of this reconciliation process is gonna be an updated Fiber tree, so a tree that will eventually be used to write to the DOM. So this is a high level overview of the inputs and the outputs of reconciliation.

First Open Image-> What is Reconciliation and why do we need it?

Then Continue 🔽

But, of course, now we need to understand what reconciliation is and how it works.

So, you might be wondering why do we even need stuff like the virtual DOM, a reconciler and those Fiber trees?

Why not simply update the entire DOM whenever state changes somewhere in the app?

Well, the answer is simple. Remember how we said that creating the virtual DOM so the React element tree for the entire app is cheap and fast because it's just a JavaScript object?

Well, writing to the DOM is not cheap and fast. It would be extremely inefficient and wasteful to always write the entire virtual DOM to the actual DOM each time that a render was triggered. Also, usually when the state changes somewhere in the app only a small portion of the DOM needs to be updated and the rest of the DOM that is already present can be reused.

Now, of course, on the initial render there is no way around creating the entire DOM from scratch but from there on, doing so doesn't make sense anymore.

So imagine that you have a complex app like Udemy.com and when you click on some button there then showModal is set to true, which in turn will then trigger a modal to be shown. So in this situation, only the DOM elements for that modal need to be inserted into the DOM and the rest of the DOM should just stay the same. And so that's what React tries to do.

Whenever a render is triggered, React will try to be as efficient as possible by reusing as much of the existing DOM tree as possible.

But that leads us to the next question. So how does React actually do that? How does it know what changed from one render to the next one? Well, that's where a process called reconciliation comes into play.

So reconciliation is basically deciding exactly which DOM elements need to be inserted, deleted or updated in order to reflect the latest state changes. So the result of the reconciliation process is gonna be a list of DOM operations that are necessary to update the current DOM with a new state.

Now, reconciliation is processed by a reconciler and we can say that the reconciler really is the engine of React. It's like the heart of React.

So it's this reconciler that allows us to never touch the DOM directly and instead simply tell React what the next snapshot of the UI should look like based on state.

And as I mentioned before, the current reconciler in React is called Fiber, and this is how it works.

First Open Image-> The Reconciler: Fiber

Then Continue 🔽

So, during the initial render of the application Fiber takes the entire React element tree, so the virtual DOM, and based on it builds yet another tree which is the Fiber tree.

The Fiber tree is a special internal tree where for each component instance and DOM element in the app, there is one so-called Fiber.

Now, what's special about this tree is that unlike React elements in the virtual DOM, Fibers are not recreated on every render. So the Fiber tree is never destroyed. Instead, it's a mutable data structure and once it has been created during the initial render, it's simply mutated over and over again in future reconciliation steps. And this makes Fibers the perfect place for keeping track of things like the current component state, props, side effects, list of used hooks and more. So the actual state and props of any component instance that we see on the screen are internally stored inside the corresponding Fiber in the Fiber tree.

Now, each Fiber also contains a queue of work to do like updating state, updating refs, running registered side effects, performing DOM updates and so on. This is why a Fiber is also defined as a unit of work.

Now, if we take a quick look at the Fiber tree we will see that the Fibers are arranged in a different way than the elements in the React element tree.

So instead of a normal parent-child relationship, each first child has a link to its parent and all the other children then have a link to their previous sibling. And this kind of structure is called a linked list and it makes it easier for React to process the work that is associated with each Fiber. We also see that both trees include not only React elements or components, but also regular DOM elements, such as the h3 and button elements in this example. So both trees really are a complete representation of the entire DOM structure, not just of React components.

Now going back to the idea that Fibers are units of work, one extremely important characteristic of the Fiber reconciler is that work can be performed asynchronously.

This means that the rendering process which is what the reconciler does, can be split into chunks, some tasks can be prioritized over others and work can be paused, reused, or thrown away if not valid anymore. Just keep in mind that all this happens automatically behind the scenes. It's completely invisible to us developers.

There are, however, also some practical uses of this asynchronous rendering because it enables modern so-called concurrent features like Suspense or transitions starting in React 18. It also allows the rendering process to pause and resume later so that it won't block the browser's JavaScript engine with two long renders, which can be problematic for performance in large applications. And again, this is only possible because the render phase does not produce any visible output to the DOM yet.

Okay, so at this point we know what the Fiber reconciler is and how the Fiber tree works but now it's time to talk about what Fiber actually does which is the reconciliation process.

First Open Image-> Reconciliation in action

Then Continue 🔽

And the best way to explain how reconciliation works is by using a practical example. So let's take the virtual DOM and the corresponding Fiber tree from the last slide which corresponds to this piece of code right here. So in the app component, there is a piece of state called showModal, which is currently set to true and you can pause the video here to analyze it but it's not really necessary. So let's say now that the state is updated to false. This will then trigger a re-render which will create a new virtual DOM. And in this tree, the modal and all its children are actually gone because they are no longer displayed when showModal is not true. Also, all remaining React elements are yellow, meaning that all of them were re-rendered.

And do you remember why that is? That's right.

It's because all children of a re-rendered element are re-rendered as well, as we just learned a few minutes ago.

But anyway, this new virtual DOM now needs to be reconciled with the current Fiber tree, which will then result in this updated tree which internally is called the work in progress tree. So whenever reconciliation needs to happen, Fiber walks through the entire tree step by step and analyzes exactly what needs to change between the current Fiber tree and the updated Fiber tree based on the new virtual DOM.

And this process of comparing elements step-by-step based on their position in the tree is called diffing and we will explore exactly how diffing works a bit later in the section because that's actually pretty important in practice.

But anyway, let's quickly analyze our updated Fiber tree where I marked new work that is related to DOM mutations.

So first, the Btn component has some new text and so the work that will need to be done in this Fiber is a DOM update. So in this case, swapping text from height to rate. Then we have the Modal, Overlay, h3 and button. So these were in the current Fiber tree but are no longer in the virtual DOM and therefore they are marked as DOM deletions.

Finally, we have the interesting case of the video component. So this component was re-rendered because it's a child of the app component, but it actually didn't change. And so as a result of reconciliation, the DOM will not be updated in this case. Now, once this process is over, all these DOM mutations will be placed into a list called the list of effects which will be used in the next phase, so in a commit phase, to actually mutate the DOM.

First Open Image-> The Render Phase Part 3

Then Continue 🔽

Now, what I showed you here was actually still a bit oversimplified, if you can believe that, but I think that this is more than enough for you to understand how this process works. Okay, so that was quite a deep dive, but now we're back here in the high level overview of the render phase. So we learned that the results of the reconciliation process is a second updated Fiber tree, plus basically a list of DOM updates that need to be performed in the next phase. So React still hasn't written anything to the DOM yet but it has figured out this so-called list of effects. So this is the final result of the render phase as it includes the DOM operations that will finally be made in the commit phase.
