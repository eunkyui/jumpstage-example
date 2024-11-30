'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type CareerStatus = '신입' | '1-3년' | '4-7년' | '8년 이상'
type BreakPeriod = '해당없음' | '1년미만' | '1-3년' | '3년이상'
type WorkPreference = {
  workType: string[];
  workHours: string;
  workLocation: string[];
  workStyle: string[];
  salary: string;
  priority: string;
}

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phone: '',
    careerStatus: '' as CareerStatus,
    breakPeriod: '' as BreakPeriod,
    lastJob: '',
    desiredJob: '',
    agreeTerms: false,
    agreePrivacy: false,
    workPreference: {
      workType: [], // 복수 선택 가능
      workHours: '',
      workLocation: [], // 복수 선택 가능
      workStyle: [], // 복수 선택 가능
      salary: '',
      priority: ''
    } as WorkPreference
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 회원가입 로직 구현
    console.log('Signup attempt:', formData)
  }

  const toggleWorkType = (type: string) => {
    setFormData(prev => ({
      ...prev,
      workPreference: {
        ...prev.workPreference,
        workType: prev.workPreference.workType.includes(type)
          ? prev.workPreference.workType.filter(t => t !== type)
          : [...prev.workPreference.workType, type]
      }
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">회원가입</h2>
          <p className="mt-2 text-gray-600">
            이미 계정이 있으신가요?{' '}
            <Link href="/login" className="text-primary hover:text-primary-dark">
              로그인
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow">
          {/* 기본 정보 섹션 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">기본 정보</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* 경력 정보 섹션 */}
          <div className="space-y-4 pt-6">
            <h3 className="text-xl font-semibold">경력 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="careerStatus" className="block text-sm font-medium text-gray-700">
                  경력 기간
                </label>
                <select
                  id="careerStatus"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  value={formData.careerStatus}
                  onChange={(e) => setFormData({ ...formData, careerStatus: e.target.value as CareerStatus })}
                >
                  <option value="">선택해주세요</option>
                  <option value="신입">신입</option>
                  <option value="1-3년">1-3년</option>
                  <option value="4-7년">4-7년</option>
                  <option value="8년 이상">8년 이상</option>
                </select>
              </div>
              <div>
                <label htmlFor="breakPeriod" className="block text-sm font-medium text-gray-700">
                  경력 단절 기간
                </label>
                <select
                  id="breakPeriod"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  value={formData.breakPeriod}
                  onChange={(e) => setFormData({ ...formData, breakPeriod: e.target.value as BreakPeriod })}
                >
                  <option value="">선택해주세요</option>
                  <option value="해당없음">해당없음</option>
                  <option value="1년미만">1년 미만</option>
                  <option value="1-3년">1-3년</option>
                  <option value="3년이상">3년 이상</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="lastJob" className="block text-sm font-medium text-gray-700">
                  최종 직무
                </label>
                <input
                  type="text"
                  id="lastJob"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  value={formData.lastJob}
                  onChange={(e) => setFormData({ ...formData, lastJob: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* 희망 근무 스타일 섹션 추가 */}
          <div className="space-y-4 pt-6">
            <h3 className="text-xl font-semibold">희망 근무 스타일</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  희망 근무 형태 (복수 선택 가능)
                </label>
                <div className="flex flex-wrap gap-2">
                  {['정규직', '계약직', '시간제', '리턴십'].map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => toggleWorkType(type)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        formData.workPreference.workType.includes(type)
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  희망 근무 시간
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  value={formData.workPreference.workHours}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    workPreference: {
                      ...prev.workPreference,
                      workHours: e.target.value
                    }
                  }))}
                >
                  <option value="">선택해주세요</option>
                  <option value="full">주 40시간 (풀타임)</option>
                  <option value="part30">주 30시간</option>
                  <option value="part20">주 20시간</option>
                  <option value="part15">주 15시간 미만</option>
                  <option value="flexible">시간 협의 가능</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  선호하는 근무 방식 (복수 선택 가능)
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    '유연근무제',
                    '재택근무',
                    '하이브리드',
                    '고정 출퇴근',
                  ].map(style => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          workPreference: {
                            ...prev.workPreference,
                            workStyle: prev.workPreference.workStyle.includes(style)
                              ? prev.workPreference.workStyle.filter(s => s !== style)
                              : [...prev.workPreference.workStyle, style]
                          }
                        }))
                      }}
                      className={`px-3 py-1 rounded-full text-sm ${
                        formData.workPreference.workStyle.includes(style)
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  우선순위
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  value={formData.workPreference.priority}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    workPreference: {
                      ...prev.workPreference,
                      priority: e.target.value
                    }
                  }))}
                >
                  <option value="">선택해주세요</option>
                  <option value="work-life">워라밸</option>
                  <option value="salary">급여</option>
                  <option value="growth">성장 가능성</option>
                  <option value="stability">고용 안정성</option>
                  <option value="location">출퇴근 거리</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  희망 연봉 수준
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  value={formData.workPreference.salary}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    workPreference: {
                      ...prev.workPreference,
                      salary: e.target.value
                    }
                  }))}
                >
                  <option value="">선택해주세요</option>
                  <option value="~3000">3,000만원 미만</option>
                  <option value="3000-4000">3,000~4,000만원</option>
                  <option value="4000-5000">4,000~5,000만원</option>
                  <option value="5000-6000">5,000~6,000만원</option>
                  <option value="6000+">6,000만원 이상</option>
                  <option value="negotiable">협의 가능</option>
                </select>
              </div>
            </div>
          </div>

          {/* 약관 동의 섹션 */}
          <div className="space-y-4 pt-6">
            <div className="flex items-center">
              <input
                id="agreeTerms"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
              />
              <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-900">
                <Link href="#" className="text-primary hover:text-primary-dark">
                  이용약관
                </Link>
                에 동의합니다
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="agreePrivacy"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                checked={formData.agreePrivacy}
                onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
              />
              <label htmlFor="agreePrivacy" className="ml-2 block text-sm text-gray-900">
                <Link href="#" className="text-primary hover:text-primary-dark">
                  개인정보 처리방침
                </Link>
                에 동의합니다
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  )
}