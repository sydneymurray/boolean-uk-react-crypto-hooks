
import useFetchNewsFeed from "../hooks/useFetchNewsFeed"

import NewsCard from "./NewsCard";

export default function NewsFeed() {


  // You can turn this into a custom hook////////////////////

  let [newsList] = useFetchNewsFeed()

  ///////////////////////////////////////////////////////////

  return (
    <ul className="newsfeed">
      {newsList.map((newsItem) => (
        <li>
          <NewsCard newsItem={newsItem} />
        </li>
      ))}
    </ul>
  );
}
