import React from "react";
import "./main.css";

// Components
import PostsChart from "../PostsChart/PostsChart";
import SignupChart from "../SignupChart/SignupChart";
import UsersTable from "../UsersTable/UsersTable";
import UsersChart from "../UsersChart/UsersChart";

const Main = () => {
    return (
        <div className="content">
            <main>
                <div className="container-fluid">
                    <h1 className="my-4 d-none d-lg-block display-4">SocialSpace Dashboard</h1>

                    <div className="row my-4">
                        <div className="col">
                            <div className="card border-0">
                                <div className="card-header">
                                    <i className="fas fa-users"></i><span className="ml-2 font-weight-bold">Users</span>
                                </div>
                                <div className="card-body pt-1 bg-light-dark">
                                    <UsersTable />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 mb-4">
                            <div className="card ">
                                <div className="card-header">
                                    <i className="fas fa-chart-bar mr-1"></i><span className="ml-2 font-weight-bold">Posts Chart</span>
                                </div>
                                <div className="card-body">
                                    <PostsChart />
                                </div>
                            </div >
                        </div>
                        <div className="col-xl-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <i className="fas fa-chart-bar mr-1"></i><span className="ml-2 font-weight-bold">Sign Up Chart</span>
                                </div>
                                <div className="card-body">
                                    <SignupChart />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col mb-5 ">
                            <div className="card">
                                <div className="card-header">
                                    <i className="fas fa-chart-bar mr-1"></i><span className="ml-2 font-weight-bold">Users Chart</span>
                                </div>
                                <div className="card-body">
                                    <UsersChart />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div >
    )
}

export default Main;