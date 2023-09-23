import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="ma:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-xl">
      <div>
        <h3 className="text-3xl">Reading Time : {readingTime}</h3>
      </div>
      <h2 className="text-3xl text-center">
        Bookmarked Blogs : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.array,
};

export default Bookmarks;
