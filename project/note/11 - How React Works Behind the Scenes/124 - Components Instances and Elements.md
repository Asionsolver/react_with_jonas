# Component VS. Instance VS. Element

- Component
  🔹 Description of a piece of UI.
  🔹 A Component is just a regular Javascript function that return react elements(element tree), usually written as JSX.
  🔹 A Component is a generic description of the UI.
  🔹 "Blueprint" or "Template" - a component as blueprint or a template,

And it's out of this one blueprint or template that React then creates one or multiple component instances.

                                 🧑‍💻 COMPONENT -> COMPONENT INSTANCE -> React Elements -> DOM Element (HTML)

Now, React does this each time that we use the component somewhere in our code.

- Instance
  🔹 Instances are created when we "use" components.
  🔹 React internally call Tab().
  🔹 Actual "physical" manifestation of a component.
  🔹 Has its own state and props.
  🔹 Has a lifecycle (can "be born", "live", and "die")

For example, the <Tab /> component that we saw in the last slide is used, so it is included three times in this app component. And so therefore, three instances of tap are placed in a component tree. So in our actual application.

Behind the scenes, this happens because React will call the tap function three times. So one time for each instance.

So we can say that an instance is like the actual physical manifestation of a component living in our componentry. While the component itself is really just a function that we wrote before being called.

And actually, it's each instance that holds its own state and props and that also has its own life cycle.

So basically, a component instance can be born, it can live for some time until it will eventually die. So it's a bit like a living organism really.

- React Element
  🔹 JSX is converted to React.createElement() function calls.
  🔹 A React element is the result of these function calls.
  🔹 Information necessary to create DOM elements.

React executes the code in each of these instances, each of them will return one or more React elements. So as we learned when we first talked about JSX behind the scenes, JSX will actually get converted to multiple React.createElement function calls. Then as React calls these create element functions the result will be a React element.

So a React element is basically the result of using a component in our code. It's simply a big immutable JavaScript object that React keeps in memory.

But what is this object actually?

Well, a React element basically contains all the information that is necessary in order to create DOM elements for the current component instance.

And so it's this React element that will eventually be converted to actual DOM elements, and then painted onto the screen by the browser.

- DOM Element (HTML)
  🔹 Actual visual representation of the component instance in the browser.

So based on all this, the DOM elements are the actual, final and visual representation of the components instance in the browser. And again, it's not React elements that are rendered to the DOM. React elements just live inside the React app and have nothing to do with the DOM. They are simply converted to DOM elements when they are painted on the screen in this final step.
