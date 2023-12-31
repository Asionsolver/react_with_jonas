## The Key Prop

First Open Image: ▶️ What is the key prop

Then continue 🔽

So, the key prop is a special prop that we can use to tell the differing algorithm that a certain element is unique. And this works for both DOM elements and React elements.

So in practice, this means that we can give each component instance a unique identification, which will allow React to distinguish between multiple instances of the same component type.

Now that's all great, but why do we actually need this?

Well, remember that the second assumption of the diffing algorithm is that whenever an element has a stable key, so a key that stays the same across renders, the element will be kept in the DOM, even if the position in the tree has changed. And this is the whole reason why we should use the key prop in lists as we have already done so many times throughout the course.

You will finally learn why we need to do that.

On the other hand, when the key of a certain element changes between renders, the element will be destroyed and a new one will be created in its place, even if the elements positioned in the tree is exactly the same as before. And so this is great to reset state, which is the second big use case of the key prop.

First Open Image: ▶️ Keys in lists[stable key]

Then continue 🔽

But let's go back to the first big use case of the key prop, which is to use keys in lists. And let's start by considering this example without keys.

So here, we have a list with two question items, which clearly have no key prop but let's see what happens when we add a new item to the top of the list.

Well, the two list items that we already had are clearly still the same, but they will now appear at different positions in the React Elementary. They're no longer the first and second children but now they are the second and the third children. So, we basically have the same elements but at different positions in the tree. And so according to the differing rules that we learned earlier, these two DOM elements will be removed from the DOM and then immediately recreated at their new positions. And this is obviously bet for performance because removing and rebuilding the same dumb element is just wasted work, right?

But the thing is that React doesn't know that this is wasted work.

Of course, we developers intuitively know that these two elements are actually the same as before but React has no way of knowing that. But what if we could actually change that?

Well, that's where keys come into play because remember, a key allows us developers to uniquely identify an element so we can give React that information that it d , And so now when we add a new item to the top of the list, the two original elements are of course, still in different positions of the tree but they do have a stable key. So, a key that stays the same across renders. So that's q1 and q2 in this case. And so according to the differing rules, these two elements will now be kept in the dump even though their position in the tree is different. So, they will not be destroyed. Entry result will be a bit more of a performant UI.

Now of course, you won't really notice this difference on small lists, but it will make a huge difference when you have a really big list with thousands of elements, which can actually happen in some applications.

So in summary, always use the key prop when you have multiple child elements of the same type. So just like the question elements in this example and you already knew that you should do that because well, otherwise, React will complain and give us a warning but now, you hopefully understand exactly why you need to do it.

Alright, so we looked at the use case for a stable key.

First Open Image: ▶️ Keys prop t reset state[Changing key]

Then continue 🔽

And so now let's look at the use case for a changing key, which is used to reset state in component instances.

Now here, we don't need a big code example because we will do this in practice in the next lecture. But let me just show you what I mean by resetting state. So, let's say we have this question, inside question box and we pass in this object as a prop. Now the question component instance has an answer state, which right now is set to React allows us to build apps faster.

But now, let's imagine that the question changes to this one. So, we still have the same element at the same position in the tree. All that changed was the question prop.

So, what do you think will happen to the state in this case?

Well, let's remember one of the diffing rules, which says that if we have the same element at the same position in the tree, the DOM element and its state will be kept. Therefore, what's gonna happen is that the state of question will be preserved. So, it will still show the answer that was in the component state before. But that answer is of course completely irrelevant to this new question, right?

So, it doesn't make any sense to keep this state around here.

So basically, what we need is a way to reset this state. And as you can guess, this is where the key prop comes into play once again. So now, we have a key of q23 in this first question, which allows React to uniquely identify this component instance. Then when a new question appears, we can give it a different key. And so by doing this, we tell React that this should be a different component instance and therefore, it should create a brand new DOM element. And the result of doing this is that the state will be reset, which is exactly what we need in the situation in order to make this small app work in a logical way.

So, whenever you find yourself in a position where you need to reset state, just make sure that you give the element a key and that the key changes across renderers. Now, this actually is necessary very often but you will sometimes find yourself in this situation. And so when this happens, it's very important to know that this is the solution.
