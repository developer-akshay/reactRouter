import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState("");
  //to call api when component load ho
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/developer-akshay")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log("data ", data);
  //       });
  //   }, []);

  //

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Follower: {data.followers}
      <img src={data.avatar_url} alt="Github Picture" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/developer-akshay");

  return response.json();
};
