import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import JobPage, { jobLoader } from "./Pages/JobPage";
import NotFoundPage from "./Pages/NotFoundPage";
import JobsPage from "./Pages/JobsPage";
import AddJobPage from "./Pages/AddJobPage";

const App = () => {

  const addJob = (newJob) => {
    console.log(newJob)
  }
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
