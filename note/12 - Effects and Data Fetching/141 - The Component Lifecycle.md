# The Component Lifecycle

First Open Image ▶️ Component (Instance) Lifecycle
Then continue🔽

We just need to look at one more slide here, where we will quickly learn about the LIFECYCLE of COMPONENTS, because this is gonna be highly relevant for the rest of the section.

And actually, I should say that we're gonna learn about the LIFE CYCLE of a COMPONENT INSTANCE, because it's only an actual physical INSTANCE of a COMPONENT that can go through a LIFECYCLE.

But as I mentioned earlier, it's just a bit too much work to always say, COMPONENT INSTANCE.

And so, for the rest of this lecture, I will just say COMPONENT most of the time, which is what everybody else also does. So no one can always say COMPONENT INSTANCE, that's just too much work.

But anyway, what does COMPONENT LIFECYCLE actually mean?

Well, the LIFECYCLE of a COMPONENT basically encompasses the different phases that a specific COMPONENT INSTANCE can go through over time. And the first phase in any COMPONENT'S LIFECYCLE is that a COMPONENT INSTANCE is MOUNTED. Which is also called the INITIAL RENDER.

So this is when the COMPONENT is rendered for the very first time, based on everything that we have learned in the previous section. This is also when fresh state and props are created for the COMPONENT INSTANCE. And therefore, I like to use the analogy that the COMPONENT is born in this phase.

Now, once the COMPONENT has been rendered and is on the screen, it can be re-rendered an unlimited number of times. Now, as we learned in the previous section, a React Application is re-rendered, whenever there is a State Update, right?

However, back then, we were only talking about the entire application, not about one specific COMPONENT INSTANCE. So in practical terms, a COMPONENT will also be re-rendered when the props that it receives change, when its parent COMPONENT re-renders, or when something called CONTEXT changes. And more about CONTEXT later.

Now, the RE-RENDER Phase is actually optional, so it doesn't always happen in all COMPONENTS. So some COMPONENTS are only mounted and then unmounted, right away, which actually brings us to the next phase.

So finally, there comes a point in time, where a COMPONENT INSTANCE is no longer needed. And so that's when the COMPONENT is unmounted. And as you can see from that not so subtle emoji, this is when the COMPONENT basically dies. So in this step, the COMPONENT INSTANCE is completely destroyed and removed from the screen along with its state and props. And of course, we have already seen this happening many times in the applications that we have been building. So this can happen when users navigate to a new section or a new page of the app or when they close the app all together. Now, of course, a new INSTANCE of the same COMPONENT can be mounted later, but this specific INSTANCE is now gone. So it has been unmounted. and that's actually it. So pretty straightforward, right?

So why was it even worth learning about this now? Well, it's important to know about the COMPONENT LIFECYCLE, because we can hook into different phases of this LIFECYCLE. So we can basically define code to be executed at these specific points in time, which can be extremely useful. And we do so by using the useEffect Hook, which is the big topic of this section.
