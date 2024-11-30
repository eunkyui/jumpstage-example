'use client'

import React from 'react'
import Image from 'next/image'

type StoryProps = {
  id: string
  name: string
  role: string
  company: string
  quote: string
  image: string
}

const stories: StoryProps[] = [
  {
    id: '1',
    name: '김미래',
    role: 'UX 디자이너',
    company: '테크스타트',
    quote: '2년의 경력 단절 후, 리턴십을 통해 새로운 시작을 할 수 있었습니다. 체계적인 교육과 실무 경험을 통해 자신감을 되찾았어요.',
    image: '/images/profile-1.jpg'
  },
  {
    id: '2',
    name: '이성장',
    role: '프로덕트 매니저',
    company: '소프트랩',
    quote: '육아로 인한 경력 단절 이후에도 꿈을 포기하지 않았습니다. JumpStage를 통해 새로운 기회를 잡을 수 있었어요.',
    image: '/images/profile-2.jpg'
  }
]

export default function SuccessStories() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">성공 스토리</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-sm p-6 relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{story.name}</h3>
                  <p className="text-gray-600">{story.role}</p>
                  <p className="text-gray-600">{story.company}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                {story.quote}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}