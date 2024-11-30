'use client'

import React from 'react'
import Link from 'next/link'
import {
  CalendarIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

type PageProps = {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

type ReturnshipDetail = {
  id: string
  title: string
  company: string
  period: string
  location: string
  deadline: string
  description: string
  curriculum: {
    title: string
    duration: string
    details: string[]
  }[]
  requirements: string[]
  benefits: string[]
  conversionRate: string
  companyInfo: {
    name: string
    size: string
    industry: string
    description: string
  }
}

export default function ReturnshipDetailPage({ params }: PageProps) {
  // TODO: API로 데이터 가져오기
  const program: ReturnshipDetail = {
    id: params.id,
    title: '디지털 마케팅 리턴십',
    company: '테크컴퍼니',
    period: '2024.04 - 2024.07 (3개월)',
    location: '서울 강남구',
    deadline: 'D-14',
    description: '디지털 마팅의 A to Z를 배우고 실무에 적용하는 기회',
    curriculum: [
      {
        title: '기초 교육 과정',
        duration: '1개월',
        details: [
          '디지털 마케팅 개요',
          '데이터 분석 기초',
          '마케팅 채널 이해'
        ]
      },
      {
        title: '실무 프로젝트',
        duration: '2개월',
        details: [
          '실제 캠페인 기획 및 운영',
          '성과 분석 및 리포팅',
          '팀 프로젝트 수행'
        ]
      }
    ],
    requirements: [
      '마케팅 경력 3년 이상',
      '데이터 분석 툴 사용 경험',
      '커뮤니케이션 능력'
    ],
    benefits: [
      '교육지원금 월 200만원',
      '수료 후 정규직 전환 기회',
      '멘토링 프로그램',
      '자기개발비 지원'
    ],
    conversionRate: '80%',
    companyInfo: {
      name: '테크컴퍼니',
      size: '100-200명',
      industry: 'IT/소프트웨어',
      description: '혁신적인 디지털 솔루션을 제공하는 기업'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 정보 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{program.title}</h1>
              <p className="text-xl text-gray-700">{program.company}</p>
            </div>
            <span className="text-primary font-semibold">{program.deadline}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
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
        </div>

        {/* 프로그램 설명 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">프로그램 소개</h2>
          <p className="text-gray-700 whitespace-pre-line">
            {program.description}
          </p>
        </div>

        {/* 커리큘럼 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">커리큘럼</h2>
          <div className="space-y-8">
            {program.curriculum.map((phase, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <AcademicCapIcon className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">{phase.title}</h3>
                  <span className="text-sm text-gray-500">({phase.duration})</span>
                </div>
                <ul className="space-y-2">
                  {phase.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircleIcon className="w-4 h-4 text-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 지원 자격 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">지원 자격</h2>
          <ul className="space-y-2">
            {program.requirements.map((req, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircleIcon className="w-4 h-4 text-primary" />
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* 지원 혜택 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">지원 혜택</h2>
          <div className="grid grid-cols-2 gap-4">
            {program.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
              >
                <UserGroupIcon className="w-5 h-5 text-primary" />
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
                <h3 className="font-bold">{program.companyInfo.name}</h3>
                <p className="text-gray-600">{program.companyInfo.industry}</p>
              </div>
            </div>
            <p className="text-gray-700">
              {program.companyInfo.description}
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