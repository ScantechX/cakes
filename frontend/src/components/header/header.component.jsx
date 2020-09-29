import React from "react";
import { useEffect } from "react";
import axios from "axios";

export const Header = () => {
  useEffect(() => {
    const getInitialData = async () => {
      const data = await axios.get("http://localhost:1337/authors");
      console.log(data);
    };
    getInitialData();
  }, []);
  return <div>kek</div>;
};
