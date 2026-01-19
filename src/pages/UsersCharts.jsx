import useFetch from "../hooks/useFetch";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./UsersCharts.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

export default function UsersCharts() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/users?limit=50"
  );

  if (loading) {
    return <p>Loading User Data</p>;
  }
  if (error) {
    return <p>Error loading user data</p>;
  }

  const users = data.users;

  const bloodGroupCount = {};
  users.forEach((user) => {
    const group = user.bloodGroup;
    bloodGroupCount[group] = (bloodGroupCount[group] || 0) + 1;
  });

  const ageGroups = {
    "0-20": 0,
    "21-30": 0,
    "31-40": 0,
    "41-50": 0,
    "51+": 0,
  };

  users.forEach((user) => {
    if (user.age <= 20) ageGroups["0-20"]++;
    else if (user.age <= 30) ageGroups["21-30"]++;
    else if (user.age <= 40) ageGroups["31-40"]++;
    else if (user.age <= 50) ageGroups["41-50"]++;
    else ageGroups["51+"]++;
  });

  return (
    <div className="charts-container">
      <h1 className="charts-title">User Charts</h1>

      <div className="chart-card">
        <h3 className="chart-heading">Users by Blood Group</h3>
        <div className="chart-wrapper">
          <Bar
            data={{
              labels: Object.keys(bloodGroupCount),
              datasets: [
                {
                  label: "Number of Users",
                  data: Object.values(bloodGroupCount),
                },
              ],
            }}
          />
        </div>
      </div>

      <div className="chart-card">
        <h3 className="chart-heading">Users by Age Group</h3>
        <div className="chart-wrapper">
          <Line
            data={{
              labels: Object.keys(ageGroups),
              datasets: [
                {
                  label: "Number of Users",
                  data: Object.values(ageGroups),
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}
