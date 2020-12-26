import { useEffect, useState } from "react";

function App() {
  const [repose, setRepose] = useState([{}]);
  // const [data, setData] = useState({})
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json)
  //       console.log(json);
  //     });
  // }, []);

  useEffect( () => {
    async function getRepos(params) {
      const response = await fetch(
        "https://api.github.com/users/Azhar7909/repos"
      );
      const data = await response.json();
      console.log(data);
      setRepose(data);
    }
    getRepos()
  }, []);

  return (
    <div>
      <h1>Async Await in React</h1>
      {/* <h2>{data.title}</h2> */}
      <ul>
        {repose.map((rep, ind) => {
          return <li key={ind}>{rep.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
