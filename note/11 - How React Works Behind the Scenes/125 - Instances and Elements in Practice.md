```Javascript
console.log(<DifferentContent/>)
```

If we run this then we should see something in the console.
And indeed, there it is. So as soon as React sees this right here, it will internally call the different content function and will then return this React element.

So let's take a quick look at this and while this is not really interesting,

we can see that the type here is of different content(▶️ type: f DifferentContent()).And so that's exactly the name of the component right here.

We can also see that we didn't pass in any props but which we actually could. So let's just do test equals 23. and so then we should see that right here.

(▶️ props: {test: 23})

So now in the second one, and indeed there it is. So again, this is what React internally use to then later create our dumb elements.

Now if you're wondering what this weird dollar($) dollar($) type of
({▶️ $$typeof: Symbol(react.element), key: null, ref: null, props:{...},... })

Thing here is, well this is simply a security feature that React has implemented in order to protect us against cross-site scripting attacks. So, notice how this is a symbol and symbols are one of the JavaScript primitives, which cannot be transmitted via JSON, or in other words, this means that a symbol like this cannot come from an API call. So if some hacker would try to send us a fake React element from that API, then React would not see this type of as a symbol. Again, because symbols cannot be transmitted via JSON. And so then React would not include that fake React element into the dumb so protecting us against that kind of attack.

So, if React calls are component internally when it renders them, so just as it did here in this previous line, then maybe you have wondered, why don't we just call components directly?

So why should we write it like this when we could also write different content like this?

```Javascript
console.log(DifferentContent());
```

So, basically calling the function ourselves. Well, there is really nothing stopping us from doing so. So if we save this, then we actually get a result as well. Let's just reload here so that we only get these two outputs. So one output from here and one from here. So you see that even here in this case, we still got a React element like this. However, it is a very different one. So this one no longer has the type of different content and instead it is a diff which is basically just the content of that component.

So this diff here is now the type of this React element and we can also see that because the props include the class name of "tab-content".

(▶️ $$typeof: Symbol(react.element))
(▶️ props: {className: 'tab-content', children:{...}})
(type: "div")

So what this means is that right now, React does no longer see this as a component instance, and instead it just sees the raw React element, which is really not what we want.

So, when we write, or actually when we use a component, we want React to see the component instance and not the raw output element like this one.

So never do this, what we did right here, and let's actually demonstrate this one more time, but now inside the component here.

So after all this, let's enter JavaScript mode here and then let's just call or actually tab content. This time, let's call tab content and we can pass in props just like this. So we pass in an object and then item, and then let's say content at zero.

```Javascript
{TabContent({item: content.at(0)})}
```

And well, we got some errors here, but let's try to reload. And now this somehow works. So you see that actually we got a second tab content rendered down here. So, it looks like this works, right?

Well, not so fast. Let's check out our component tree here again. We need some more space. And so now you see that we still only have one tab content here in our component tree.

```Javascript
🔽 App
   🔽 Tabbed
        Tab
        Tab
        Tab
        Tab
        TabContent
```

And so this happened exactly because of what I explained before, which is that when we call a component directly like this, then React no longer sees it as a component instance.

Now we can also see that the state that this component manages is actually now inside the parent state or the parent component. So, if we check out the tabbed component here, you see that it has the normal state that it had before which is this active tab but it also has some other hooks here which come from tab content. So these two are the two hooks that are inside this component, but they don't really belong here. So we actually want them to be inside tab content and not inside, well not here inside the tabbed component.

So what this means again, is that this is here not really a component because it cannot even manage its own state at this point. So, for all these reasons, you should never ever do what we just did here because this will create multiple problems such as violating the rules of hooks that we will talk about later.

So instead, as you already know, always render it inside the JSX. So just like this. And so here we just use the component. So, basically this blueprint like we have always been doing. And so then React calls the component and actually recognizes this as a component instance.
