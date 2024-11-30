'use client'

import React from 'react'
import Link from 'next/link'
import { CalendarIcon, AcademicCapIcon, UserGroupIcon } from '@heroicons/react/24/outline'

type ProgramProps = {
  id: string
  title: string
  company: string
  period: string
  features: string[]
  conversionRate: string
  deadline: string
}

const programs: ProgramProps[] = [
  {
    id: '1',
    title: '디지털 마케팅 리턴십',
    company: '테크컴퍼니',
    period: '2024.04 - 2024.07',
    features: ['교육지원금 제공', '멘토링 지원', '전환채용 가능'],
    conversionRate: '80%',
    deadline: 'D-14'
  },
  {
    id: '2',
    title: '프론트엔드 개발자 리턴십',
    company: '소프트랩',
    period: '2024.05 - 2024.08',
    features: ['실무 프로젝트', '유연근무', '자기개발 지원'],
    conversionRate: '75%',
    deadline: 'D-21'
  }
]

export default function ReturnshipPrograms() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">진행중인 리턴십 프로그램</h2>
          <Link
            href="/returnship"
            className="text-primary hover:text-primary-dark"
          >
            전체보기
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{program.title}</h3>
                  <p className="text-gray-600">{program.company}</p>
                </div>
                <span className="text-sm text-primary font-semibold">
                  {program.deadline}
                </span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <CalendarIcon className="w-5 h-5" />
                  <span>{program.period}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <AcademicCapIcon className="w-5 h-5" />
                  <span>전환채용률 {program.conversionRate}</span>
                </div>
              </div>
              <div className="space-y-2">
                {program.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <UserGroupIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href={`/returnship/${program.id}`}
                className="mt-4 block w-full text-center py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
              >
                자세히 보기
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}