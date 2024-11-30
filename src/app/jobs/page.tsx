'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  BuildingOfficeIcon,
  MapPinIcon,
  ClockIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'
import { jobListings } from '@/data/jobListings'

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
          {jobListings.map((job) => (
            <Link href={`/jobs/${job.id}`} key={job.id}>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-duration-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold">{job.title}</h2>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <span className="text-primary text-sm font-semibold">{job.deadline}</span>
                </div>
                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <BuildingOfficeIcon className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    <span>{job.workHours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">연봉:</span>
                    <span>{job.salary}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}