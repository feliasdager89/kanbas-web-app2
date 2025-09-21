export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

        <div className="wd-dashboard-course col" style ={{width: "300px"}}>
          <div className="card"> 
            <a className="wd-dashboard-course-link text-decoration-none text-dark"
             href="#/Kanbas/Courses/1234/Home">
             <img src="/images/reactjs.jpg" width="100%" /> 
             <div className="card-body">
               <h5 className="wd-dashboard-course-title card-title">
                  CS1234 React JS
                </h5>
                <p className="card-text">
                  Full Stack software developer
                </p> 
                <button className="btn btn-primary"> Go </button>
            </div> 
            </a>
          </div>
        </div> 

        <div className="wd-dashboard-course col" style ={{width: "300px"}}>
          <div className="card"> 
            <a className="wd-dashboard-course-link text-decoration-none text-dark"
             href="#/Kanbas/Courses/1234/Home">
             <img src="/images/reactjs.jpg" width="100%" /> 
             <div className="card-body">
               <h5 className="wd-dashboard-course-title card-title">
                  Data Analytics
                </h5>
                <p className="card-text">
                  Intro to Data
                </p> 
                <button className="btn btn-primary"> Go </button>
            </div> 
            </a>
          </div>
        </div>  

        <div className="wd-dashboard-course col" style ={{width: "300px"}}>
          <div className="card"> 
            <a className="wd-dashboard-course-link text-decoration-none text-dark"
             href="#/Kanbas/Courses/1234/Home">
             <img src="/images/reactjs.jpg" width="100%" /> 
             <div className="card-body">
               <h5 className="wd-dashboard-course-title card-title">
                  Python Programming 1
                </h5>
                <p className="card-text">
                  Intro to Python
                </p> 
                <button className="btn btn-primary"> Go </button>
            </div> 
            </a>
          </div>
        </div>  

        <div className="wd-dashboard-course col" style ={{width: "300px"}}>
          <div className="card"> 
            <a className="wd-dashboard-course-link text-decoration-none text-dark"
             href="#/Kanbas/Courses/1234/Home">
             <img src="/images/reactjs.jpg" width="100%" /> 
             <div className="card-body">
               <h5 className="wd-dashboard-course-title card-title">
                  Net Centric Computing
                </h5>
                <p className="card-text">
                  Intro to Networking
                </p> 
                <button className="btn btn-primary"> Go </button>
            </div> 
            </a>
          </div>
        </div>  

        <div className="wd-dashboard-course col" style ={{width: "300px"}}>
          <div className="card"> 
            <a className="wd-dashboard-course-link text-decoration-none text-dark"
             href="#/Kanbas/Courses/1234/Home">
             <img src="/images/reactjs.jpg" width="100%" /> 
             <div className="card-body">
               <h5 className="wd-dashboard-course-title card-title">
                  Data Storage and Retreival
                </h5>
                <p className="card-text">
                   Databases and SQL
                </p> 
                <button className="btn btn-primary"> Go </button>
            </div> 
            </a>
          </div>
        </div> 

        <div className="wd-dashboard-course col" style ={{width: "300px"}}>
          <div className="card"> 
            <a className="wd-dashboard-course-link text-decoration-none text-dark"
             href="#/Kanbas/Courses/1234/Home">
             <img src="/images/reactjs.jpg" width="100%" /> 
             <div className="card-body">
               <h5 className="wd-dashboard-course-title card-title">
                  Mandarin 1
                </h5>
                <p className="card-text">
                  Intro to Mandarin
                </p> 
                <button className="btn btn-primary"> Go </button>
            </div> 
            </a>
          </div>
        </div>  

        <div className="wd-dashboard-course col" style ={{width: "300px"}}>
          <div className="card"> 
            <a className="wd-dashboard-course-link text-decoration-none text-dark"
             href="#/Kanbas/Courses/1234/Home">
             <img src="/images/reactjs.jpg" width="100%" /> 
             <div className="card-body">
               <h5 className="wd-dashboard-course-title card-title">
                  Fall Internship
                </h5>
                <p className="card-text">
                  Intern Course
                </p> 
                <button className="btn btn-primary"> Go </button>
            </div> 
            </a>
          </div>
        </div> 

      </div>
    </div>
    </div>
);}

