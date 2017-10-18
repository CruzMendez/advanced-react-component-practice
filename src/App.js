import React from "react";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import PropTypes from "prop-types";
import Comments from "./components/Comments";
import Tasks from "./components/Tasks"
import Orders from "./components/Orders"
import Tickets from "./components/Tickets"
import TasksPanel from "./components/TasksPanel"
import TransactionsPanel from "./components/TransactionsPanel"

function App(props) {
 
  return (
    <div> 
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          
          <TopNav />
                    
          <SideNav />
          
        </nav>

        <div id="page-wrapper">

            <div className="container-fluid">

                
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            Dashboard <small>Statistics Overview</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="fa fa-dashboard"></i> Dashboard
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                
                   <Comments/>
                                        
                    <Tasks/>
                                    
                    <Orders/>
                                        
                    <Tickets/>
                    
                </div>
                
                {/*   <AreaChart>   */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title"><i className="fa fa-bar-chart-o fa-fw"></i> Area Chart</h3>
                            </div>
                            <div className="panel-body">
                                <div id="morris-area-chart"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*   </AreaChart>   */}

                <div className="row">

                    {/*   <DonutChart>   */}
                    <div className="col-lg-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title"><i className="fa fa-long-arrow-right fa-fw"></i> Donut Chart</h3>
                            </div>
                            <div className="panel-body">
                                <div id="morris-donut-chart"></div>
                                <div className="text-right">
                                    <a href="#">View Details <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*   </DonutChart>   */}


                    <div className="col-lg-4">
                        
                        <TasksPanel/>
                        
                    </div>
                    <div className="col-lg-4">
                        
                        <TransactionsPanel/>
                        
                    </div>
                </div>
                

            </div>
            

        </div>
        

    </div>
    </div>

  );
}

App.propTypes = {

};

export default App;
