'use client'

import React, {use} from 'react'

import Link from 'next/link'
import {
  BuildingOfficeIcon,
  MapPinIcon,
  ClockIcon,
  BanknotesIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

type JobDetail = {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary: string
  deadline: string
  description: string
  requirements: string[]
  benefits: string[]
  companyInfo: {
    name: string
    size: string
    industry: string
    description: string
  }
}

// props 타입 정의
type PageProps = {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function JobDetailPage({ params, searchParams }: PageProps) {
  // TODO: API로 데이터 가져오기
  const jobDetail: JobDetail = {
    id: params.id,
    title: '프로덕트 매니저',
    company: '테크스타트',
    location: '서울 강남구',
    type: '정규직',
    salary: '5,000~7,000만원',
    deadline: 'D-7',
    description: '사용자 중심의 제품 개발을 이끌어갈 PM을 찾습니다.',
    requirements: [
      '5년 이상의 PM 경력',
      '데이터 기반 의사결정 경험',
      '애자일 프로세스에 대한 이해'
    ],
    benefits: [
      '유연근무제',
      '재택근무 가능',
      '자기개발비 지원',
      '육아휴직 보장'
    ],
    companyInfo: {
      name: '테크스타트',
      size: '50-100명',
      industry: 'IT/소프트웨어',
      description: '혁신적인 기술 솔루션을 제공하는 스타트업'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 정보 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{jobDetail.title}</h1>
              <p className="text-xl text-gray-700">{jobDetail.company}</p>
            </div>
            <span className="text-primary font-semibold">{jobDetail.deadline}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPinIcon className="w-5 h-5" />
              <span>{jobDetail.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <ClockIcon className="w-5 h-5" />
              <span>{jobDetail.type}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <BanknotesIcon className="w-5 h-5" />
              <span>{jobDetail.salary}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <UserGroupIcon className="w-5 h-5" />
              <span>{jobDetail.companyInfo.size}</span>
            </div>
          </div>
        </div>

        {/* 직무 설명 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">직무 설명</h2>
          <p className="text-gray-700 whitespace-pre-line">
            {jobDetail.description}
          </p>
        </div>

        {/* 자격 요건 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">자격 요건</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {jobDetail.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {/* 복리후생 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">복리후생</h2>
          <div className="grid grid-cols-2 gap-4">
            {jobDetail.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
              >
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 회사 정보 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">회사 소개</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <BuildingOfficeIcon className="w-12 h-12 text-gray-400" />
              <div>
                <h3 className="font-bold">{jobDetail.companyInfo.name}</h3>
                <p className="text-gray-600">{jobDetail.companyInfo.industry}</p>
              </div>
            </div>
            <p className="text-gray-700">
              {jobDetail.companyInfo.description}
            </p>
          </div>
        </div>

        {/* 지원하기 버튼 */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="max-w-4xl mx-auto">
            <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark">
              지원하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}