import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../App";
import { useQuery } from 'react-query';
import { UpDown } from "./UpDown";

export const Form = () => {
  const { setResult, ip, setIp, setGeocode } = useContext(AppContext);
  
  // Initialize isLoading to true
  const [isLoading, setIsLoading] = useState(false);
  
  const link = `https://geo.ipify.org/api/v2/country?apiKey=at_361P3u9cGvjYnsDs03feZcTuYX3lH&ipAddress=${ip}`;

  const fetchData = async () => {
    try {
      const res = await axios.get(link);
      setResult({
        location: res.data.location.country + " " + res.data.location.region,
        timezone: "UTC" + res.data.location.timezone,
        isp: res.data.isp,
      });
      
      const response = await axios.get(`https://www.iplocate.io/api/lookup/${ip}`);
      setGeocode([response.data.latitude, response.data.longitude]);
      
      
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error and set isLoading to false if there's an error
      setIsLoading(false);
    }
    finally
    {
      setIsLoading(false)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetchData(link);
  };
  return (
    <div className="">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="Search for any IP address or domain"
        />
        <button type="submit" className="bg-black font-bold">
          {'>'}
        </button>
      </form>
      {isLoading && <UpDown />}
    </div>
  );
};
