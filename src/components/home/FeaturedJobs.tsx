'use client'

import React from 'react'
import Link from 'next/link'
import { jobListings } from '@/data/jobListings'
import { BuildingOfficeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function FeaturedJobs() {
  // 최신 4개의 채용공고만 표시
  const featuredJobs = jobListings.slice(0, 4)

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">주목할 만한 채용공고</h2>
          <Link
            href="/jobs"
            className="text-primary hover:text-primary-dark"
          >
            전체보기
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <Link href={`/jobs/${job.id}`} key={job.id}>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-duration-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
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
    </section>
  )
}