import { FiberManualRecord, InfoRounded } from "@mui/icons-material";
import "./Widget.css";
const Widget = () => {
  const newsArticles = (article, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets_articleRight">
        <h4>{article}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widget__header">
        <h2>Linkdin News</h2>
        <InfoRounded />
      </div>
      {newsArticles(
        "Will summer slow the spread of COVID-19? New research sheds light ",
        "13 April 2021 5 min read"
      )}
      {newsArticles("Quality Education", "13 April 2021 5 min read")}
      {newsArticles(
        "World's top graduates get new UK visa option",
        "13 April 2021 5 min read"
      )}
      {newsArticles(
        "   Welsh compulsory sex education plans face legal challenge",
        "13 April 2021 5 min read"
      )}
     
    
    </div>
  );
};
export default Widget;
