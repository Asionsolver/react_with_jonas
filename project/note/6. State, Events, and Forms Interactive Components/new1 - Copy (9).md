## In practical Guidelines about state

👉 Use a state variable for any data that the component should keep track of ("remember") over time. This is data that will change at some point. in Vanilla JS, that's a let variable, or an [] or {}.

👉 Whenever you want something in the component to be dynamic, create a piece of state related to that "thing", and update the state when the "thing" should change (aka "be dynamic")

    ✓ Example: A modal window can be open or close, So we create a state variable isOpen that tracks Whether the modal is open or not, on isOpen = true we display the window, on isOpen = false we hide it.

👉 If you want to change the way a component look, or the data is displays, update its state. This usually happens in an event handler function.

👉 When building a component, imagine its view as a reflection of state changing over time.

👉 For data that should not trigger component re-renders, don't use state. Use a regular variable instead. This a common beginner mistake.
