import React, { useState } from 'react';
import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';
import PostModal from '@/components/common/PostModal';
import { type PostData } from '@/interfaces';

const HomePage: React.FC = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [posts, setPosts] = useState<PostData[]>([])

  const handleAddPost = (newPost: PostData) => {
    setPosts([newPost, ...posts])
  }


  return (
      <>
        <Header />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10  min-h-screen'>
        
        {
          posts.map((post, index) => {
          return <Card key={index} title={post.title} content={post.content} />;
          })
        }
        
        </div>
        <button
        onClick={() => setIsModalOpen(true)}
        className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Create New Post
      </button>
        
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

    </>
  );
};

export default HomePage;