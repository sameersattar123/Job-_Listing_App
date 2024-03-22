import React from "react";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import ViewAllJobs from "../components/ViewAllJobs";
import JobListings from "../components/JobListings";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
