import { Avatar } from "@mui/material";
import "./Sidebar.css";
const SideBar = () => {

  const RecentItems = ["react","programming","javascript","frontend","comunity"]
  const recentItems = (item) =>{
    return(
      <div className="sidebar__recentItems">
        <span className="sidebar__hash">#</span>
        <p>{item}</p>
        </div>
    )
  }
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1613379293095-d81837c1502d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          alt="codding"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Ramin Khodaie</h2>
        <h4>kh.ramin69@gmail.com </h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewd you</p>
          <p className="sidebar__statNumber">2344</p>
        </div>
        <div className="sidebar__stat">
          <p>view on post</p>
          <p className="sidebar__statNumber">987</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        Recent
       {
         RecentItems.map((recentitem)=>(recentItems(recentitem)))
       }
      </div>
    </div>
  );
};

export default SideBar;
