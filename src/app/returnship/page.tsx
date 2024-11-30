'use client'

import React, { useState } from 'react'
import {
  CalendarIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'

type Program = {
  id: string
  title: string
  company: string
  period: string
  location: string
  features: string[]
  conversionRate: string
  deadline: string
  description: string
  requirements: string[]
}

const FILTER_OPTIONS = {
  field: ['개발', '마케팅', '디자인', '기획/PM', '영업/세일즈'],
  period: ['3개월', '6개월', '1년'],
  location: ['서울', '경기', '인천', '부산', '대구', '기타'],
  benefits: ['교육지원금', '전환채용가능', '멘토링지원', '자기개발지원']
}

const programs = [
  {
    id: '1',
    title: '디지털 마케팅 리턴십',
    company: '테크컴퍼니',
    period: '2024.04 - 2024.07',
    location: '서울 강남구',
    features: ['교육지원금', '멘토링', '전환채용가능'],
    conversionRate: '80%',
    deadline: 'D-14',
    field: '마케팅'
  },
  {
    id: '2',
    title: '프론트엔드 개발자 리턴십',
    company: '소프트랩',
    period: '2024.05 - 2024.08',
    location: '서울 성동구',
    features: ['실무 프로젝트', '유연근무', '자기개발지원'],
    conversionRate: '75%',
    deadline: 'D-21',
    field: '개발'
  },
  {
    id: '3',
    title: 'UX/UI 디자이너 리턴십',
    company: '디자인허브',
    period: '2024.03 - 2024.06',
    location: '경기 판교',
    features: ['포트폴리오 지원', '재택근무', '육아지원'],
    conversionRate: '85%',
    deadline: 'D-7',
    field: '디자인'
  },
  {
    id: '4',
    title: '데이터 분석가 리턴십',
    company: '데이터테크',
    period: '2024.06 - 2024.09',
    location: '서울 마포구',
    features: ['자격증 취득지원', '유연근무', '전환채용가능'],
    conversionRate: '70%',
    deadline: 'D-30',
    field: '데이터'
  },
  {
    id: '5',
    title: 'HR 매니저 리턴십',
    company: '피플파트너스',
    period: '2024.04 - 2024.08',
    location: '서울 서초구',
    features: ['실무교육', '멘토링', '육아지원'],
    conversionRate: '90%',
    deadline: 'D-10',
    field: '인사'
  },
  {
    id: '6',
    title: '회계/재무 리턴십',
    company: '파이낸스그룹',
    period: '2024.05 - 2024.09',
    location: '서울 영등포구',
    features: ['자격증 취득지원', '유연근무', '전환채용가능'],
    conversionRate: '85%',
    deadline: 'D-17',
    field: '재무'
  }
]

export default function ReturnshipPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 소개 섹션 */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">리턴십 프로그램</h1>
          <p className="text-lg mb-6">
            경력 단절 여성을 위한 맞춤형 교육과 실무 경험을 제공하는 프로그램입니다.
            전문 멘토링과 함께 실무 프로젝트에 참여하며 자신감을 되찾으세요.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">89%</div>
              <div className="text-sm">프로그램 수료율</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">75%</div>
              <div className="text-sm">취업 연계율</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">92%</div>
              <div className="text-sm">참여자 만족도</div>
            </div>
          </div>
        </section>

        {/* 필터 섹션 */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">진행중인 프로그램</h2>
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
                    {category === 'field' && '직무분야'}
                    {category === 'period' && '교육기간'}
                    {category === 'location' && '교육장소'}
                    {category === 'benefits' && '지원혜택'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {options.map(option => (
                      <button
                        key={option}
                        onClick={() => {
                          setActiveFilters(prev =>
                            prev.includes(option)
                              ? prev.filter(f => f !== option)
                              : [...prev, option]
                          )
                        }}
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

        {/* 프로그램 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map(program => (
            <div key={program.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{program.title}</h3>
                  <p className="text-gray-600">{program.company}</p>
                </div>
                <span className="text-primary text-sm font-semibold">{program.deadline}</span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <CalendarIcon className="w-5 h-5" />
                  <span>{program.period}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <BuildingOfficeIcon className="w-5 h-5" />
                  <span>{program.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <AcademicCapIcon className="w-5 h-5" />
                  <span>전환채용률 {program.conversionRate}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {program.features.map(feature => (
                  <span key={feature} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                    {feature}
                  </span>
                ))}
              </div>
              <button className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
                상세보기
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}