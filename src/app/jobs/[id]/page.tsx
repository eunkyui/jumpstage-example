'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getJobById } from '@/data/jobListings'
import {
  BuildingOfficeIcon,
  MapPinIcon,
  ClockIcon,
  BanknotesIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import ApplyCompleteModal from '@/components/common/modal/ApplyCompleteModal'

type PageProps = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function JobDetailPage({ params }: PageProps) {
  const router = useRouter()
  const job = getJobById(params.id)
  const [isApplyComplete, setIsApplyComplete] = useState(false)

  if (!job) {
    return <div>Job not found</div>
  }

  const handleApply = async () => {
    try {
      // 지원 API 호출
      await fetch('/api/jobs/apply', {
        method: 'POST',
        // 필요한 데이터 전송
      })

      // 성공 시 모달 표시
      setIsApplyComplete(true)
    } catch (error) {
      console.error('지원 실패:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 정보 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
              <p className="text-xl text-gray-700">{job.company}</p>
            </div>
            <span className="text-primary font-semibold">{job.deadline}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPinIcon className="w-5 h-5" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <ClockIcon className="w-5 h-5" />
              <span>{job.workHours}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <BanknotesIcon className="w-5 h-5" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <UserGroupIcon className="w-5 h-5" />
              <span>{job.companyInfo.size}</span>
            </div>
          </div>
        </div>

        {/* 직무 설명 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">주요 업무</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {job.workDetail.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>

        {/* 자격 요건 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">자격 요건</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {/* 우대사항 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">우대사항</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {job.preferreds.map((pref, index) => (
              <li key={index}>{pref}</li>
            ))}
          </ul>
        </div>

        {/* 복리후생 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">복리후생</h2>
          <div className="grid grid-cols-2 gap-4">
            {job.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
              >
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 근무 환경 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">근무 환경</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">근무 시설</h3>
              <div className="grid grid-cols-2 gap-4">
                {job.workDetail.environment.map((env, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">{env}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">근무 일정</h3>
              <p className="text-gray-700">{job.workDetail.schedule}</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">근무 위치</h3>
              <p className="text-gray-700">{job.workDetail.location_detail}</p>
            </div>
          </div>
        </div>

        {/* 회사 정보 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">회사 소개</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <BuildingOfficeIcon className="w-12 h-12 text-gray-400" />
              <div>
                <h3 className="font-bold">{job.companyInfo.name}</h3>
                <p className="text-gray-600">{job.companyInfo.industry}</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">회사 소개</h3>
              <p className="text-gray-700">{job.companyInfo.description}</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">회사 문화</h3>
              <div className="grid grid-cols-2 gap-4">
                {job.companyInfo.culture.map((culture, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">{culture}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 지원하기 버튼 */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleApply}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              지원하기
            </button>
          </div>
        </div>

        <ApplyCompleteModal
          isOpen={isApplyComplete}
          onClose={() => setIsApplyComplete(false)}
        />
      </div>
    </div>
  )
}