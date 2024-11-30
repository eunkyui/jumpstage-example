'use client'

import React, { useState } from 'react'
import {
  BuildingOfficeIcon,
  MapPinIcon,
  ClockIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'

type JobPost = {
  id: string
  title: string
  company: string
  location: string
  type: string
  badges: string[]
  deadline: string
  salary: string
  requirements: string[]
}

type FilterOptions = {
  workType: string[]
  workHours: string[]
  location: string[]
  career: string[]
  benefits: string[]
}

const FILTER_OPTIONS: FilterOptions = {
  workType: ['정규직', '계약직', '시간제', '리턴십'],
  workHours: ['주 40시간(풀타임)', '주 30시간', '주 20시간', '주 15시간 미만', '시간 협의가능'],
  location: ['서울', '경기', '인천', '부산', '대구', '기타'],
  career: ['신입', '1-3년', '4-7년', '8년 이상', '경력무관'],
  benefits: ['유연근무', '재택근무', '육아지원', '자기개발지원']
}

const jobListings = [
  {
    id: '1',
    title: '프로덕트 매니저',
    company: '테크스타트',
    location: '서울 강남구',
    type: '정규직',
    workHours: '주 40시간(풀타임)',
    salary: '5,000~7,000만원',
    deadline: 'D-7',
    badges: ['여성친화기업', '유연근무']
  },
  {
    id: '2',
    title: '콘텐츠 마케터',
    company: '미디어허브',
    location: '서울 성동구',
    type: '시간제',
    workHours: '주 20시간',
    salary: '시급 35,000원',
    deadline: 'D-14',
    badges: ['재택가능', '경력단절우대']
  },
  {
    id: '3',
    title: '웹 디자이너',
    company: '디자인랩',
    location: '경기 판교',
    type: '계약직',
    workHours: '주 30시간',
    salary: '4,000~5,000만원',
    deadline: 'D-10',
    badges: ['유연근무', '육아지원']
  },
  {
    id: '4',
    title: '데이터 분석가',
    company: '데이터테크',
    location: '서울 마포구',
    type: '정규직',
    workHours: '시간 협의가능',
    salary: '6,000~8,000만원',
    deadline: 'D-21',
    badges: ['여성친화기업', '재택가능']
  },
  {
    id: '5',
    title: '고객 서비스 매니저',
    company: '서비스플러스',
    location: '서울 영등포구',
    type: '시간제',
    workHours: '주 15시간 미만',
    salary: '시급 30,000원',
    deadline: 'D-5',
    badges: ['육아지원', '유연근무']
  },
  // 추가 공고
  {
    id: '6',
    title: 'HR 매니저',
    company: '피플파트너스',
    location: '서울 서초구',
    type: '정규직',
    workHours: '주 30시간',
    salary: '4,500~5,500만원',
    deadline: 'D-12',
    badges: ['여성친화기업', '육아지원']
  },
  {
    id: '7',
    title: '회계 담당자',
    company: '글로벌파이낸스',
    location: '서울 종로구',
    type: '시간제',
    workHours: '주 20시간',
    salary: '시급 40,000원',
    deadline: 'D-8',
    badges: ['유연근무', '경력단절우대']
  },
  {
    id: '8',
    title: 'UI/UX 디자이너',
    company: '디지털크리에이티브',
    location: '경기 성남시',
    type: '정규직',
    workHours: '주 40시간(풀타임)',
    salary: '5,500~7,000만원',
    deadline: 'D-15',
    badges: ['재택가능', '자기개발지원']
  },
  {
    id: '9',
    title: '온라인 마케팅 매니저',
    company: '이커머스허브',
    location: '서울 송파구',
    type: '계약직',
    workHours: '주 30시간',
    salary: '4,000~5,000만원',
    deadline: 'D-3',
    badges: ['유연근무', '육아지원']
  },
  {
    id: '10',
    title: '백엔드 개발자',
    company: '테크솔루션',
    location: '서울 강남구',
    type: '정규직',
    workHours: '시간 협의가능',
    salary: '6,500~8,500만원',
    deadline: 'D-18',
    badges: ['여성친화기업', '재택가능']
  },
  {
    id: '11',
    title: '리서치 애널리스트',
    company: '마켓인사이트',
    location: '서울 여의도',
    type: '시간제',
    workHours: '주 25시간',
    salary: '시급 35,000원',
    deadline: 'D-9',
    badges: ['유연근무', '경력단절우대']
  },
  {
    id: '12',
    title: '비즈니스 개발 매니저',
    company: '스타트업허브',
    location: '서울 역삼동',
    type: '정규직',
    workHours: '주 35시간',
    salary: '5,000~6,500만원',
    deadline: 'D-11',
    badges: ['여성친화기업', '자기개발지원']
  }
]

export default function JobsPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 검색 및 필터 섹션 */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">채용정보</h1>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-gray-600 hover:text-primary"
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
              필터
            </button>
          </div>

          {showFilters && (
            <div className="space-y-4">
              {Object.entries(FILTER_OPTIONS).map(([category, options]) => (
                <div key={category} className="border-t pt-4">
                  <h3 className="font-medium mb-2">
                    {category === 'workType' && '근무형태'}
                    {category === 'workHours' && '근무시간'}
                    {category === 'location' && '근무지역'}
                    {category === 'career' && '경력'}
                    {category === 'benefits' && '복리후생'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {options.map(option => (
                      <button
                        key={option}
                        onClick={() => toggleFilter(option)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          activeFilters.includes(option)
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 채용공고 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 채용공고 카드 컴포넌트는 별도로 분리하는 것이 좋습니다 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold">프로덕트 매니저</h2>
                <p className="text-gray-600">테크스타트</p>
              </div>
              <span className="text-primary text-sm font-semibold">D-7</span>
            </div>
            <div className="space-y-2 text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <BuildingOfficeIcon className="w-4 h-4" />
                <span>정규직</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4" />
                <span>서울 강남구</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4" />
                <span>연봉 5,000~7,000만원</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                여성친화기업
              </span>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                유연근무
              </span>
            </div>
            <button className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
              상세보기
            </button>
          </div>
          {/* 추가 채용공고 카드들... */}
        </div>
      </div>
    </div>
  )
}