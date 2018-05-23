# react-whether

In react all logic such as `if`, `else` and `for` should be written in JavaScript, however it is really ugly to embed many code blocks in JSX trees.

`react-whether` provides a simple declarative way to perform if and else logic.

## Install

```shell
npm install --save react-whether
```

## Use

`react-whether` exports 3 components:

- `Whether`: The root of a logic block.
- `Match`: To match a condition as a child of `Whether`.
- `Else`: To match anything else, must be the last child of `Whether`.

### Single if block

The most simple and straitforward representation of a single `if` branch is to use `Whether` and `matches` prop:

```jsx
<Whether matches={userLoggedIn}>
    <App />
</Whether>
```

One thing to notice is that `if` expression does a implicit boolean conversion on its input, however `Whether` does not, so you could write `if (someObject)` but only `<Whether matches={!!someObject}>` is valid for its `propTypes`.

### Simple if and else

We can add an `Else` component as the last child of `Whether` to get 2 branches.

```jsx
<Whether matches={userLoggedIn}>
    <App />
    <Else>
        <LoginForm />
    </Else>
</Whether>
```

### More branches

For more complex condition branches, `context` prop allows `Whether` to manage a condition context and perform more branches, you can use `Match` and its `selector` prop to create a branch.

```jsx
const isVisitor = user => !user;
const isAdmin = user => user.role === 'admin';

<Whether context={currentUser}>
    <Match selector={isVisitor}>
        <LoginForm />
    </Match>
    <Match selector={isAdmin}>
        <AdminConsole />
    </Match>
    <Else>
        <App />
    </Else>
</Whether>
```

A `selector` prop must be a function which receives the `context` prop of `Whether` as the only argument and returnes a boolean value, the first `Match` component which returns `true` will be rendered.

### Lazy render

Function can be passed as child of `Whether`, `Match` and `Else` to enable lazy render, this could be helpful if creating react element of a non-matched condition will cause violation of `propTypes` validation.

```jsx
const isVisitor = user => !user;
const isAdmin = user => user.role === 'admin';

<Whether context={currentUser}>
    <Match selector={isVisitor}>
        {() => <LoginForm />}
    </Match>
    <Match selector={isAdmin}>
        {() => <AdminConsole />}
    </Match>
    <Else>
        {() => <App />}
    </Else>
</Whether>
```
