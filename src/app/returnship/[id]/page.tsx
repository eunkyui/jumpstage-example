'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { getReturnshipById } from '@/data/returnshipPrograms'
import {
  CalendarIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ClockIcon,
  MapPinIcon,
  BanknotesIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react';
import ApplyCompleteModal from '@/components/common/modal/ApplyCompleteModal';

type PageProps = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ReturnshipDetailPage({ params }: PageProps) {
  const router = useRouter()
  const program = getReturnshipById(params.id)
  const [isApplyComplete, setIsApplyComplete] = useState(false);

  if (!program) {
    return <div>Program not found</div>
  }

  const handleApply = async () => {
    try {
      // 지원 API 호출
      await fetch('/api/returnship/apply', {
        method: 'POST',
        // 필요한 데이터 전송
      });

      // 성공 시 모달 표시
      setIsApplyComplete(true);
    } catch (error) {
      console.error('지원 실패:', error);
    }
  };

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
              <MapPinIcon className="w-5 h-5" />
              <span>{program.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <AcademicCapIcon className="w-5 h-5" />
              <span>전환채용률 {program.conversionRate}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <BanknotesIcon className="w-5 h-5" />
              <span>지원금 {program.programDetails.supportAmount}</span>
            </div>
          </div>
        </div>

        {/* 프로그램 소개 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">프로그램 소개</h2>
          <p className="text-gray-700 whitespace-pre-line mb-6">
            {program.description}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <ClockIcon className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">교육 기간</p>
                <p className="text-sm text-gray-600">{program.programDetails.educationPeriod}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <ClockIcon className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">인턴십 기간</p>
                <p className="text-sm text-gray-600">{program.programDetails.internshipPeriod}</p>
              </div>
            </div>
          </div>
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

        {/* 멘토링 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">멘토링 프로그램</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium">멘토링 일정</p>
                <p className="text-gray-600">{program.mentoring.schedule}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium">멘토링 방식</p>
                <p className="text-gray-600">{program.mentoring.type}</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">멘토 소개</h3>
              {program.mentoring.mentors.map((mentor, index) => (
                <div key={index} className="border p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <div>
                      <p className="font-medium">{mentor.name}</p>
                      <p className="text-sm text-gray-600">{mentor.position}</p>
                      <p className="text-sm text-gray-600">{mentor.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((exp, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 선발 과정 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">선발 과정</h2>
          <div className="flex justify-between items-center">
            {program.process.selectionProcess.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="text-sm mt-2">{step}</p>
                </div>
                {index < program.process.selectionProcess.length - 1 && (
                  <div className="h-[2px] w-12 bg-gray-200 mx-2" />
                )}
              </div>
            ))}
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