This repository is for reproducing a bug introduced in jest v27, which causes an error of `invalid hook call` with react components in isolate modules.

```shell
npm install
npm test
```

An error will occur:

```
Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.

    2 |
    3 | export default function TestComponent() {
  > 4 |   const [count, setCount] = useState(0);
      |                             ^
    5 |   return <div>{count}</div>;
    6 | }
    7 |
```
