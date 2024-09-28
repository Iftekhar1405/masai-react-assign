import './App.css';
import useFetch from './useFetch';

function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) {
    return <h1>Loading .....</h1>;
  } else if (error) {
    return <h1>Something went wrong</h1>;
  } else {
    return (
      <>
        {data.map((post) => (
          <div key={post.id}>
            <p>User ID: {post.userId}</p>
            <p>Post ID: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
          </div>
        ))}
      </>
    );
  }
}

export default App;
