import {useSelector,useDispatch} from 'react-redux'
import './App.css'
import { useEffect } from 'react'


function App() {
  const {isLoading,footballMatches,isError} = useSelector(store => store)
const dispatch = useDispatch()

useEffect(() => {
  const fetchData = async () => {
    try {
      dispatch({type:'fetching'})
      let res = await fetch('https://jsonmock.hackerrank.com/api/football_matches?page=2');
      let resj = await res.json();
      let data = resj.data;
      console.log(data);

      dispatch({ type: 'fetch', payload: data });
    } catch (error) {
      dispatch({type:'error'})
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [dispatch]);  

  return (
    <>
    {isLoading && <h1>Loading</h1>}
    {isError && <h1>something went wrong</h1>}
    {footballMatches && footballMatches.map((match,index)=>
    <div key={index}>
    <p>{match.competition}</p>
    <p>{match.round}</p>
    <p>{match.team1}</p>
    <p>{match.team1goals}</p>
    <p>{match.team2}</p>
    <p>{match.team2goals}</p>
    <p>{match.year}</p>
    </div>
    )}
      
    </>
  )
}

export default App
