import { useState, useEffect } from "react";

export function useFetch(URL) {
  const [Data, setData] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const [error , setError] = useState(false);

  useEffect(getData, []);

 function getData(){
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
         setData(data.data.children),
         setIsLoading(false)})
         .catch((err) => {
             console.log(err),
             setError(true),
             setIsLoading(false)});
  };
  return {Data ,isLoading ,error}
}
