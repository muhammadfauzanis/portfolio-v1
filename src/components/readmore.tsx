import { useState } from 'react';

const ReadMore = ({ text, maxLength }: { text: string; maxLength: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <p className="text-justify text-gray-500">
      {isExpanded ? text : `${text.slice(0, maxLength)}... `}
      {text.length > maxLength && (
        <button
          onClick={toggleReadMore}
          className="text-gray-900 dark:text-gray-300 hover:underline focus:outline-none pl-2"
        >
          {isExpanded ? ' Read Less' : ' Read More'}
        </button>
      )}
    </p>
  );
};

export default ReadMore;
