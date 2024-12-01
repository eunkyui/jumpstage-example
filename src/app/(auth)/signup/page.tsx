'use client'

import { useState } from 'react'
import EmailInput from '@/components/common/input/EmailInput'
import JobCategorySelect from '@/components/common/select/JobCategorySelect'
import { useRouter } from 'next/navigation'
// import { signUp } from '@/lib/auth/signup'

interface SignUpFormData {
  email: string
  password: string
  passwordConfirm: string
  name: string
  phone: string
  careerStatus: 'EXPERIENCED' | 'NEWCOMER'
  breakPeriod: string
  lastJob: string
  desiredJob: string
  jobCategory: string
  agreeTerms: boolean
  agreePrivacy: boolean
  workPreference: 'FULLTIME' | 'PARTTIME'
}

export default function SignUpPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<SignUpFormData>({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phone: '',
    careerStatus: 'EXPERIENCED',
    breakPeriod: 'LESS_THAN_1YEAR',
    lastJob: '',
    desiredJob: '',
    jobCategory: '',
    agreeTerms: false,
    agreePrivacy: false,
    workPreference: 'FULLTIME'
  })

  const handleInputChange = (name: keyof SignUpFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // await signUp(formData)
      router.push('/')
    } catch (error) {
      console.error('회원가입 실패:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">회원가입</h1>
          <p className="mt-2 text-sm text-gray-600">
            경력 정보를 입력하고 맞춤 채용 정보를 받아보세요
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 기본 정보 섹션 */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">기본 정보</h2>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이메일
                </label>
                <EmailInput
                  value={formData.email}
                  onChange={(value) => handleInputChange('email', value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  비밀번호
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="영문, 숫자 포함 8자 이상"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  비밀번호 확인
                </label>
                <input
                  type="password"
                  value={formData.passwordConfirm}
                  onChange={(e) => handleInputChange('passwordConfirm', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이름
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  연락처
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="'-' 없이 입력해주세요"
                />
              </div>
            </div>
          </div>

          {/* 경력 정보 섹션 */}
          <div className="space-y-6 pt-6">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">경력 정보</h2>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  경력 상태
                </label>
                <select
                  value={formData.careerStatus}
                  onChange={(e) => handleInputChange('careerStatus', e.target.value as 'EXPERIENCED' | 'NEWCOMER')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="EXPERIENCED">경력</option>
                  <option value="NEWCOMER">신입</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  경력 보유 기간
                </label>
                <select
                  value={formData.breakPeriod}
                  onChange={(e) => handleInputChange('breakPeriod', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="LESS_THAN_1YEAR">1년 미만</option>
                  <option value="LESS_THAN_3YEARS">1년 이상 3년 미만</option>
                  <option value="LESS_THAN_5YEARS">3년 이상 5년 미만</option>
                  <option value="LESS_THAN_7YEARS">5년 이상 7년 미만</option>
                  <option value="MORE_THAN_7YEARS">7년 이상</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  직군 선택
                </label>
                <JobCategorySelect
                  onChange={(value) => handleInputChange('jobCategory', value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이전 직무
                </label>
                <input
                  type="text"
                  value={formData.lastJob}
                  onChange={(e) => handleInputChange('lastJob', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  희망 직무
                </label>
                <input
                  type="text"
                  value={formData.desiredJob}
                  onChange={(e) => handleInputChange('desiredJob', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  근무 형태
                </label>
                <select
                  value={formData.workPreference}
                  onChange={(e) => handleInputChange('workPreference', e.target.value as 'FULLTIME' | 'PARTTIME')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="FULLTIME">정규직</option>
                  <option value="PARTTIME">계약직</option>
                </select>
              </div>
            </div>
          </div>

          {/* 약관 동의 섹션 */}
          <div className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">약관 동의</h2>

            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">이용약관 동의 (필수)</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.agreePrivacy}
                  onChange={(e) => handleInputChange('agreePrivacy', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">개인정보 처리방침 동의 (필수)</span>
              </label>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}