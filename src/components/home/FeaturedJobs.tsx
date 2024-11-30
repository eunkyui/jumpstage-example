'use client'

import React from 'react'
import Link from 'next/link'
import { BuildingOfficeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

type JobCardProps = {
  id: string
  title: string
  company: string
  location: string
  type: string
  badges: string[]
  deadline: string
}

const featuredJobs: JobCardProps[] = [
  {
    id: '1',
    title: '프로덕트 매니저',
    company: '테크스타트',
    location: '서울 강남구',
    type: '정규직',
    badges: ['여성친화기업', '유연근무'],
    deadline: 'D-7'
  },
  {
    id: '2',
    title: 'UX 디자이너',
    company: '디자인랩',
    location: '서울 성동구',
    type: '정규직',
    badges: ['재택근무', '경력단절극복'],
    deadline: 'D-14'
  }
]

function JobCard({ job }: { job: JobCardProps }) {
  return (
    <Link href={`/jobs/${job.id}`} className="block">
      <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            {job.badges.map((badge) => (
              <span
                key={badge}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
              >
                {badge}
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">{job.deadline}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center gap-2">
            <BuildingOfficeIcon className="w-4 h-4" />
            <span>{job.company}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4" />
            <span>{job.type}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function FeaturedJobs() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">주목할 만한 채용공고</h2>
          <Link href="/jobs" className="text-primary hover:text-primary-dark">
            전체보기
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}