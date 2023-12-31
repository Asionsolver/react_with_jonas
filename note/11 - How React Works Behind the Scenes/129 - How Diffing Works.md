## How Diffing Work

First Open Image ▶️ How Diffing Works

Then continue 🔽

So diffing is first of all based on two fundamental assumptions.

The first one is that two elements of different types will produce different trees.

The second assumption is that elements with a stable key, so a key that is consistent over time, will stay the same across renders.

Now these assumptions may seem pretty obvious especially the first assumption but they allow the algorithm to be orders of magnitude faster going, for example, from a billion operations per a thousand processed elements to just a thousand operations.

Now remember that diffing is comparing elements step-by-step between two renders based on their position in the tree.

And there are basically two different situations that need to be considered.

First, having two different elements at the same position in the tree between two renders and second having the same element at the same position in the tree.

So those are the only two situations that matter.

And so let's now start with the first situation.

First Open Image ▶️ How Diffing Works Part 2

Then continue 🔽

So let's say that at some point an application is re-rendered, and in the diffing process, we find that an element has changed in a certain position of the tree. Now here we're actually not looking at a tree but at the JSX code, which leads to that tree because I find that it's a bit easier to understand this way. But anyway, in the case of a DOM element changing like this, changing simply means that the type of the element has changed like in this example from a div to a header. So in a situation like this, React will assume that the element itself plus all its children are no longer valid. Therefore, all these elements will actually be destroyed and removed from the DOM. And that also includes their state,

which is really important to remember.

So as we see in this example, both the diff element and the search bar component will be removed from the DOM and will then be rebuilt as a header with a brand new search bar component instance as the child. So if the child elements stays the same across renders, the tree will actually get rebuilt, but it gets rebuilt with brand new elements. And so if there were any components with state that state will not be recovered. So this effectively resets state and this has huge implications for the way that React applications work in practice.

Now, everything we just learned works the exact same way for React elements, so basically for component instances as we can see in this second example.

So here the search bar component changed to a profile menu component and therefore the search bar is again completely destroyed including its date and removed from the DOM. Okay, so this is the first situation.

First Open Image ▶️ How Diffing Works Part 3

Then continue 🔽

The second situation is when between two renders we have the exact same element at the same position in the tree. And this one is actually way more straightforward.

So if after a render, an element at a certain position in the tree is the same as before, like in these examples right here, the element will simply be kept in the DOM. And that includes all child elements and more importantly, the components state. Now this may sound pretty obvious but it actually has some important implications in practice. So again, the same element at the same position in the tree stays the same and preserves state, and it works like this for DOM elements and for React elements as well. Now, looking at these examples we actually see that something has changed. However, it was not the element type that has changed but simply the class name attribute in the <div> and the weight prop in the search power component. And so what React is gonna do is to simply mutate the DOM element attributes. And in the case of React elements it'll pass in the new props, but that's it. So React tries to be as efficient as possible and so the DOM elements themselves will stay the same. They're not removed from the DOM, and even more importantly the state will not be destroyed. Now sometimes we actually don't want this standard behavior but instead to create a brand new component instance with new state. And so that's where the key prop comes into play as we will learn about after seeing these rules that we just learned about in action.
