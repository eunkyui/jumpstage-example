'use client'

import React, { useState } from 'react'
import {
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  BookOpenIcon,
  FireIcon
} from '@heroicons/react/24/outline'

type Post = {
  id: string
  title: string
  category: 'success' | 'career' | 'study' | 'networking'
  author: string
  content: string
  likes: number
  comments: number
  createdAt: string
  tags: string[]
}

const CATEGORIES = [
  { id: 'success', name: '성공 스토리', icon: FireIcon },
  { id: 'career', name: '커리어 상담', icon: ChatBubbleLeftRightIcon },
  { id: 'study', name: '스터디 모집', icon: BookOpenIcon },
  { id: 'networking', name: '네트워킹', icon: UserGroupIcon },
] as const

const posts: Post[] = [
  // 성공 스토리 카테고리
  {
    id: '1',
    title: '2년만에 개발자로 커리어 전환에 성공했습니다',
    category: 'success',
    author: '김성장',
    content: '육아로 인한 경력 단절 후, 개발자 부트캠프와 리턴십 프로그램을 통해 새로운 시작을 할 수 있었습니다...',
    likes: 24,
    comments: 12,
    createdAt: '2시간 전',
    tags: ['개발자', '커리어전환', '성공후기']
  },
  {
    id: '2',
    title: '마케터로 돌아와 팀장까지 승진했어요',
    category: 'success',
    author: '이희망',
    content: '출산과 육아로 4년간의 공백이 있었지만, 꾸준한 자기개발과 회사의 지원으로 성장할 수 있었습니다...',
    likes: 35,
    comments: 18,
    createdAt: '5시간 전',
    tags: ['마케팅', '승진', '경력성장']
  },

  // 커리어 상담 카테고리
  {
    id: '3',
    title: '디자이너 직무 전환 고민이 있습니다',
    category: 'career',
    author: '박고민',
    content: '현재 마케팅 직무를 맡고 있는데, UX/UI 디자이너로의 전환을 고민 중입니다. 조언 부탁드려요...',
    likes: 15,
    comments: 23,
    createdAt: '1일 전',
    tags: ['디자이너', '직무전환', '고민상담']
  },
  {
    id: '4',
    title: '경력 3년 PM, 연봉 협상 조언 구합니다',
    category: 'career',
    author: '최연봉',
    content: '현재 이직을 준비 중인데, 적정 연봉 수준을 잘 모르겠어요. 비슷한 경력의 PM분들 조언 부탁드립니다...',
    likes: 28,
    comments: 31,
    createdAt: '1일 전',
    tags: ['연봉협상', 'PM', '이직']
  },

  // 스터디 모집 카테고리
  {
    id: '5',
    title: '[모집] SQL 실무 스터디 함께하실 분',
    category: 'study',
    author: '정데이터',
    content: '매주 토요일 오전 10시, 강남역에서 SQL 실무 문제를 함께 풀어보는 스터디원을 모집합니다...',
    likes: 12,
    comments: 8,
    createdAt: '2일 전',
    tags: ['SQL', '데이터분석', '스터디']
  },
  {
    id: '6',
    title: '프론트엔드 주니어 스터디 모집',
    category: 'study',
    author: '한코딩',
    content: '리액트/타입스크립트 기반 프로젝트 스터디입니다. 온라인으로 주 2회 진행됩니다...',
    likes: 19,
    comments: 15,
    createdAt: '2일 전',
    tags: ['프론트엔드', '리액트', '온라인']
  },

  // 네트워킹 카테고리
  {
    id: '7',
    title: '[강남] PM 직무 네트워킹 모임 안내',
    category: 'networking',
    author: '임네트워크',
    content: '이번 주 금요일 저녁 7시, 강남역 인근 카페에서 PM 직무 네트워킹 모임을 가집니다...',
    likes: 42,
    comments: 27,
    createdAt: '3일 전',
    tags: ['네트워킹', 'PM', '오프라인']
  },
  {
    id: '8',
    title: '디자이너 온라인 네트워킹 데이',
    category: 'networking',
    author: '강디자인',
    content: '다음 주 수요일 저녁 8시, 줌으로 진행되는 디자이너 네트워킹 모임에 초대합니다...',
    likes: 31,
    comments: 19,
    createdAt: '3일 전',
    tags: ['디자이너', '온라인', '네트워킹']
  }
]

export default function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'success' | 'career' | 'study' | 'networking'>('all')
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'comments'>('recent')

  // 게시글 필터링
  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => post.category === activeCategory)

  // 게시글 정렬
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.likes - a.likes
      case 'comments':
        return b.comments - a.comments
      default:
        // 최신순은 createdAt 문자열 비교 (실제로는 날짜 객체로 변환하여 비교해야 함)
        return a.createdAt.localeCompare(b.createdAt)
    }
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 커뮤니티 소개 섹션 */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">커뮤니티</h1>
          <p className="text-gray-600 mb-6">
            서로 의견을 나누고, 함께 성장하는 공간입니다.
            성공 스토리를 공유하고, 스터디에 참여하며, 새로운 네트워크를 만들어보세요.
          </p>
          <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark">
            글쓰기
          </button>
        </section>

        {/* 카테고리 네비게이션 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`flex items-center justify-center gap-2 p-4 rounded-lg transition-colors ${
                  activeCategory === id
                    ? 'bg-primary text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 정렬 옵션과 게시글 목록 */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">
              {activeCategory === 'all' ? '전체 게시글' :
                CATEGORIES.find(c => c.id === activeCategory)?.name}
            </h2>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'recent' | 'popular' | 'comments')}
              className="border rounded-md px-3 py-1"
            >
              <option value="recent">최신순</option>
              <option value="popular">인기순</option>
              <option value="comments">댓글순</option>
            </select>
          </div>

          {/* 게시글 목록 */}
          <div className="space-y-4">
            {sortedPosts.map((post) => (
              <div key={post.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {CATEGORIES.find(c => c.id === post.category)?.name}
                    </span>
                    <h3 className="text-lg font-bold mt-2">
                      {post.title}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500">{post.createdAt}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>작성자: {post.author}</span>
                    <span>·</span>
                    <span>좋아요 {post.likes}</span>
                    <span>·</span>
                    <span>댓글 {post.comments}</span>
                  </div>
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}