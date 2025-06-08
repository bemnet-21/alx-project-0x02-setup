import React, { useState, useEffect } from 'react'
import { type PostModalProps } from '@/interfaces'

const PostModal: React.FC<PostModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    useEffect(() => {
        if (isOpen) {
            setTitle('')
            setContent('')
        }
    }, [isOpen])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!title.trim() || !content.trim()) {
            alert('Title and content cannot be empty')
            return
        }

        onSubmit({title, content})
    }

    if (!isOpen) {
        return null
    }

    return (
         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 ease-in-out scale-100">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-3xl font-light leading-none"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter post title"
              required
            />
          </div>

          <div className="mb-8">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="What's on your mind?"
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default PostModal