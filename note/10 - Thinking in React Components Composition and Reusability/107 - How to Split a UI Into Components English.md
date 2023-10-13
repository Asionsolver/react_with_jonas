## How to split a UI into components and When should we actually create new components

- Component size matter

🔸🟧🔴🔘☑️✖️🫤😡🤕🤢🤒😵‍💫🥴😠😀😄😃🤔😑😏😮🤐

1. Huge Components

   🚫 Too many responsibilities - So components are just like JavaScript functions in the sense that if a function does too many different things, we should break it up into multiple functions. And so the same applies to React components.

   🚫 Might need too many props - Now, another way in which it becomes apparent that a component is too large is when it needs to receive too many props in order to work properly. So for example, if we need like 10 or 15 props to properly configure a certain component, that component is probably way too big, and should be split up.

   🚫 Hard to reuse - So in general, these two problems make it very hard to reuse the component.

   🚫 Complex code hard to understand - huge components generally contain a lot of code that might be complex and intertwined, which ultimately makes the whole component hard to understand and to use.

🥴 Now, does this mean that we should do the opposite and create many small components Well, most of the time, that would probably be a terrible idea as well.

2. Small Components

   🚫 We end up with 100s of mini-component

   🚫 Confusing codebase - This, of course, would create a code base that is super confusing to navigate and to understand, and it would be way too abstracted.

   🚫 Too abstracted - Creating something new to hide the implementation details of that thing. If you're not familiar with the term abstraction, in programming, it basically means to create something new in order to hide the implementation details of that thing. For example, when we create a button component, the user of that component might have no idea how the button actually does what it does because the implementation detail are hidden behind this abstraction so behind this component. So in a way, each new component that we create is an abstraction.

😵‍💫 Now, if both ends of the spectrum, so both really small and huge components, have these problems, then what should we do?

😀 Well, most of the time,

🤔 Generally, we need find the right balance between to specific and to broad - the goal is to create components that strike the right balance between being too specific and too broad, or in other words, between being too small and being too big.

### The 4 Criteria for splitting a UI into component:

    1. Logical Separation of content/layout

    2. Reusability - We should also strive to make some of these components reusable

    3. Responsibilities/ complex - ensure that each component has a single, well-defined responsibility.

    4. Personal coding style -  some people work better with smaller components

### Framework: When to create a new component?

Suggestion: When in doubt, start with a relatively big component, but not a huge component. Then split it into smaller components as it becomes necessary.

when does it actually become necessary to split big components into multiple small ones?

Well, that's where

### The 4 criteria come into play again

    1. Logical Separation of content/layout

       🔘 So if, after writing your big component, you feel like the component contains some piece of code, or of the layout, that don't really belong together, then that means that it's probably a good idea to create a new component.

    2. Reusability

      🔘 Is it possible to reuse part of the component?
      🔘 Do you want or need to reuse it?


    3. Responsibilities/ complex

      🔘 Is the component doing to many different things?
      🔘 Does the component rely on to many props?
      🔘Does the component to many pieces of state and or effect?
      🔘Is the code, including JSX, too complex/confusing.


    4. Personal coding style -  some people work better with smaller components

    🤔 then that means that it's probably a good idea to create a new component.

### Some more general guidelines

    💰 Be aware that creating a new component create a new abstraction. Abstractions have a cost, because more abstraction require more mental energy to switch back and forth between components. So try not to create new components to early .

    🏷️ Name a component according to what it does or what it displays. Don't be afraid of using long component name.

    🪆 Never declare a new component inside another component!

    📦 Co-locate related components inside the same file. Don't separate components into different files to early.

    ☑️ It's completely normal that an app has components of many different sizes, including very small and huge ones.

### Any app has components of different size and reusability

    😀 Small Component
    ☑️ Some very small components are necessary!
    ☑️ Highly reusable
    ☑️ Very low complexity

    😡 Huge Component
    ☑️ Most app will have a few huge components
    ☑️ Not meant to be reused(not a problem!)
