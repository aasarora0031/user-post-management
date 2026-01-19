import './Home.css'

export default function Home() {
  return (
    <main>
         <div className="home-content">
    <div className="home-text">
      <h1>User & Post Management Application</h1>
      <p>Manage users, analyze data, and update settings.</p>
      <ul>
        <li>View and manage users</li>
        <li>Add and edit user information</li>
        <li>Visualize user data with charts</li>
        <li>Change application settings</li>
      </ul>
    </div>

    <div className="home-cards">
      <div className="home-card">
        <h3>Users</h3>
        <p>Manage user records</p>
      </div>
      <div className="home-card">
        <h3>Charts</h3>
        <p>Analyze user data</p>
      </div>
      <div className="home-card">
        <h3>Add Users</h3>
        <p>Add new Users</p>
      </div>
      <div className="home-card">
        <h3>Settings</h3>
        <p>Configure application</p>
      </div>
    </div>
  </div>
    </main>
  );
}
