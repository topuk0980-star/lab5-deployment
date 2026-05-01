import { useState, useEffect } from 'react';

const Reviews = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Варіант 7: запит до 7-го поста[cite: 1]
    fetch('https://jsonplaceholder.typicode.com/posts/7/comments')
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Відгуки (Варіант 7)</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {comments.map(c => (
          <div key={c.id} className="p-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-sm">
            <p className="font-bold text-sm text-gray-500">{c.email}</p>
            <p className="italic my-2">"{c.name}"</p>
            <p className="text-sm">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;