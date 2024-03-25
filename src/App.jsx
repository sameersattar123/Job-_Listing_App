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

  // add job
  const addJob = async(newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  // delete job

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path="/jobs/:id" element={<JobPage deleteJob = {deleteJob} />} loader={jobLoader} />
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
