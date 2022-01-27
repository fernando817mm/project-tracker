import React from "react";
import Wave from "react-wavify";
import DashNav from "../common-components/DashNav";
import StyledDashNav from "../styled-components/StyledDashNav";

const Dashboard = () => {
  return (
    <div className="bg">
      <Wave
        fill="rgba(255, 186, 1, 0.8)"
        paused={false}
        options={{
          height: 60,
          amplitude: 60,
          speed: 0.15,
          points: 4,
        }}
        className="dashboard-background"
      />
      <Wave
        fill="rgba(252, 222, 103, 0.8)"
        paused={false}
        options={{
          height: 70,
          amplitude: 40,
          speed: 0.25,
          points: 3,
        }}
        className="dashboard-background"
      />
      <Wave
        fill="rgba(250, 243, 192, 0.8)"
        paused={false}
        options={{
          height: 120,
          amplitude: 40,
          speed: 0.25,
          points: 5,
        }}
        className="dashboard-background"
      />
      <StyledDashNav>
        <DashNav />
      </StyledDashNav>
    </div>
  );
};

export default Dashboard;
