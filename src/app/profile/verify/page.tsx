'use client'

import { useState } from 'react'

export default function ReviewRequestPage() {
  const [reviewerEmail, setReviewerEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // 리뷰 요청 로직 구현
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">동료 리뷰 요청하기</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            리뷰어 이메일
          </label>
          <input
            type="email"
            value={reviewerEmail}
            onChange={(e) => setReviewerEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="리뷰어의 이메일을 입력해주세요"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            요청 메시지
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="리뷰어에게 전달할 메시지를 입력해주세요"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          리뷰 요청하기
        </button>
      </form>
    </div>
  )
}