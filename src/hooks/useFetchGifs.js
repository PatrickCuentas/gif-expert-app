import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((image) => {
      setState({
        data: image,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
