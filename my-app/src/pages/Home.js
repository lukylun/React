import React from "react";
import AppEchart from "../components/Chart";
import PaginationTable from "../components/PaginationTable";

const Home = () => {

    const height = "300px"
    const customOptions = {
        xAxis: {
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          },
          series: [
            {
              name: 'Sample Data',
              type: 'line',
              data: [30, 40, 35, 50, 55, 45],
            },
          ],
    }

    return (
        <>
            <h1>
                Home
            </h1>
            <h2>
                Chart
                <AppEchart height={height} option={customOptions}/>
            </h2>
            <h2>
                Table
                <PaginationTable />
            </h2>
        </>
    )
}

export default Home;