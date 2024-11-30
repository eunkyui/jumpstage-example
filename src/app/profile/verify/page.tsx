'use client'

import React, { useState } from 'react'
import {
  BuildingOfficeIcon,
  DocumentCheckIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

type VerificationStatus = 'pending' | 'verified' | 'rejected'

type CareerRecord = {
  id: string
  company: string
  position: string
  period: string
  status: VerificationStatus
  verifier?: {
    name: string
    position: string
    comment?: string
  }
}

type SkillVerification = {
  id: string
  skill: string
  level: number
  endorsements: number
  status: VerificationStatus
}

export default function CareerVerificationPage() {
  const [activeTab, setActiveTab] = useState<'career' | 'reference' | 'skills'>('career')

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 상단 설명 */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-2xl font-bold mb-4">경력 검증</h1>
        <p className="text-gray-600">
          이전 경력을 검증하고 동료들의 추천을 받아 신뢰도 높은 프로필을 만드세요.
        </p>
      </div>

      {/* 탭 네비게이션 */}
      <div className="flex border-b mb-8">
        <button
          onClick={() => setActiveTab('career')}
          className={`px-6 py-3 ${
            activeTab === 'career'
              ? 'border-b-2 border-primary text-primary'
              : 'text-gray-500'
          }`}
        >
          경력 인증
        </button>
        <button
          onClick={() => setActiveTab('reference')}
          className={`px-6 py-3 ${
            activeTab === 'reference'
              ? 'border-b-2 border-primary text-primary'
              : 'text-gray-500'
          }`}
        >
          동료 레퍼런스
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`px-6 py-3 ${
            activeTab === 'skills'
              ? 'border-b-2 border-primary text-primary'
              : 'text-gray-500'
          }`}
        >
          스킬 인증
        </button>
      </div>

      {/* 경력 인증 섹션 */}
      {activeTab === 'career' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">경력 인증 현황</h2>
            <button className="text-primary hover:text-primary-dark">
              + 경력 추가
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-sm divide-y">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <BuildingOfficeIcon className="w-10 h-10 text-gray-400" />
                  <div>
                    <h3 className="font-bold">테크스타트</h3>
                    <p className="text-gray-600">프로덕트 매니저</p>
                    <p className="text-sm text-gray-500">2019.03 - 2022.05</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm">
                  검증 대기중
                </span>
              </div>
              <button className="mt-4 text-primary hover:text-primary-dark text-sm">
                인증 요청하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 동료 레퍼런스 섹션 */}
      {activeTab === 'reference' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">동료 레퍼런스</h2>
            <button className="text-primary hover:text-primary-dark">
              + 레퍼런스 요청
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-center py-8">
              <UserGroupIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">
                아직 받은 레퍼런스가 없습니다.
                이전 동료에게 레퍼런스를 요청해보세요.
              </p>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
                레퍼런스 요청하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 스킬 인증 섹션 */}
      {activeTab === 'skills' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">스킬 인증</h2>
            <button className="text-primary hover:text-primary-dark">
              + 스킬 추가
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold">프로덕트 기획</h3>
                  <p className="text-sm text-gray-500">12명이 인증했습니다</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">
                  검증됨
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full w-4/5 bg-primary rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}