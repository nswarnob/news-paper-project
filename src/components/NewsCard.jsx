import React from "react";
import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id, title, rating, total_view, author, thumbnail_url, tags, details } =
    news;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  return (
    <div className="bg-white rounded-lg space-y-2 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden min-w-sm">
      {/* Author Info & Actions */}
      <div className="flex items-center bg-base-200 justify-between p-4 pb-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold text-sm text-gray-900">
              {author.name}
            </h3>
            <p className="text-xs text-gray-500">
              {formatDate(author.published_date)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <FaBookmark size={16} />
          </button>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <FaShareAlt size={16} />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pb-3">
        <h2 className="text-lg font-bold text-gray-900 leading-tight line-clamp-3">
          {title}
        </h2>
      </div>

      {/* Thumbnail Image */}
      <div className="px-4 pb-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Description */}
      <div className="px-4 pb-3">
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer hover:underline">
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      {/* Tags */}
      <div className="px-4 pb-3">
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 5).map((tag, index) => (
            <span
              key={index}
              className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer - Rating & Views */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              size={14}
              className={
                index < rating.number ? "text-orange-400" : "text-gray-300"
              }
            />
          ))}
          <span className="text-sm font-semibold text-gray-700 ml-1">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye size={16} />
          <span className="text-sm font-medium">
            {total_view.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
