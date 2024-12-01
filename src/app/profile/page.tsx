'use client'

import React, { useState } from 'react'
import {
  UserCircleIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import CareerVerificationButton from '@/components/career/CareerVerificationButton'

type ProfileSection = 'info' | 'career' | 'education' | 'skills' | 'reviews' | 'returnship'

type ReturnshipStatus = {
  id: string
  programName: string
  company: string
  period: string
  status: 'in_progress' | 'completed' | 'pending'
  progress: {
    current: number
    total: number
    nextTask?: string
    nextDue?: string
  }
  mentor?: {
    name: string
    position: string
    nextMeeting?: string
  }
}

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState<ProfileSection>('info')
  const [activeTab, setActiveTab] = useState<'career' | 'education'>('career')

  const renderSection = () => {
    switch (activeSection) {
      case 'info':
        return <BasicInfo />
      case 'career':
        return <CareerHistory />
      case 'education':
        return <Education />
      case 'skills':
        return <Skills />
      case 'reviews':
        return <Reviews />
      case 'returnship':
        return <ReturnshipProgress />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 프로필 헤더 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <UserCircleIcon className="w-20 h-20 text-gray-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">김미래</h1>
              <p className="text-gray-600">프로덕트 매니저</p>
              <p className="text-gray-600">경력 5년 | 서울</p>
            </div>
            <button className="ml-auto px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
              프로필 수정
            </button>
          </div>
        </div>

        {/* 네비게이션 탭 */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <nav className="flex border-b">
            {[
              { id: 'info', label: '기본 정보', icon: UserCircleIcon },
              { id: 'career', label: '경력 사항', icon: DocumentTextIcon },
              { id: 'education', label: '학력/교육', icon: AcademicCapIcon },
              { id: 'skills', label: '보유 스킬', icon: StarIcon },
              { id: 'reviews', label: '동료 리뷰', icon: ChatBubbleLeftRightIcon },
              { id: 'returnship', label: '리턴십 현황', icon: ClipboardDocumentListIcon },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id as ProfileSection)}
                className={`flex items-center gap-2 px-6 py-4 ${
                  activeSection === id
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* 컨텐츠 섹션 */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {renderSection()}
        </div>
      </div>
    </div>
  )
}

function BasicInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">기본 정보</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">이메일</label>
          <p className="mt-1">mirae.kim@email.com</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">연락처</label>
          <p className="mt-1">010-1234-5678</p>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">자기소개</label>
          <div className="mt-1 space-y-2 text-gray-600">
            <p>
              5년차 프로덕트 매니저로서 사용자 중심의 제품 개발 열정을 가지고 있습니다.
              데이터 기반의 의사결정과 다양한 이해관계자들과의 원활한 커뮤니케이션을 통해
              성공적인 프로젝트들을 이끌어왔습니다.
            </p>
            <p>
              주요 성과:
              - 신규 서비스 런칭으로 월간 활성 사용자 30% 증가 달성
              - 제품 개선을 통한 사용자 만족도 25% 향상
              - 애자일 프로세스 도입으로 개발 생산성 40% 향상
            </p>
            <p>
              2년간의 육아 휴직 기간 동안에도 온라인 강의와 사이드 프로젝트를 통해
              지속적으로 역량을 개발해왔으며, 특히 데이터 분석과 UX 리서치 분야에서
              새로운 인사이트를 얻을 수 있었습니다.
            </p>
            <p>
              현재는 워라밸을 고려한 유연근무 환경에서 제품 기획 및 개발에 참여하며,
              팀원들과 함께 성장하고 있습니다. 향후 여성 리더로서 조직의 다양성과
              포용성 향상에도 기여하고 싶습니다.
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">관심 분야</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {['제품 기획', '데이터 분석', 'UX 리서치', '애자일 방법론', '팀 리더십'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CareerHistory() {
  const [isVerified, setIsVerified] = useState<boolean>(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">경력 사항</h2>
        <button className="text-primary hover:text-primary-dark">+ 경력 추가</button>
      </div>
      <div className="space-y-8">
        <div className="border-l-2 border-primary pl-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold">테크스타트</h3>
              <p className="text-gray-600">프로덕트 매니저</p>
              <p className="text-sm text-gray-500">2019.03 - 2022.05</p>
            </div>
            <div className="flex gap-2">
              <button className="text-gray-500 hover:text-primary">수정</button>
              <button className="text-gray-500 hover:text-red-500">삭제</button>
            </div>
          </div>
          <p className="mt-2 text-gray-600">
            - 신규 서비스 기획 및 출시
            - 사용자 리서치 및 데이터 분석
            - 개발팀/디자인팀과의 협업
          </p>
        </div>
      </div>
        {/* 경력 인증 상태 표시 */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">경력 인증 상태</h3>
              <p className="text-sm text-gray-600 mt-1">
                {isVerified ? '인증완료' : '미인증'}
              </p>
            </div>
            {!isVerified && (
              <CareerVerificationButton />
            )}
          </div>
        </div>
    </div>
  )
}

function Education() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">학력 및 교육</h2>
        <button className="text-primary hover:text-primary-dark">+ 추가</button>
      </div>
      <div className="space-y-4">
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">OO대학교</h3>
          <p className="text-gray-600">경영학과</p>
          <p className="text-sm text-gray-500">2012.03 - 2016.02</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">프로덕트 매니저 부트캠프</h3>
          <p className="text-gray-600">PM 실무 과정 수료</p>
          <p className="text-sm text-gray-500">2019.01 - 2019.02</p>
        </div>
      </div>
    </div>
  )
}

function Skills() {
  const skills = [
    { name: '제품 기획', level: 90 },
    { name: '데이터 분석', level: 85 },
    { name: '프로젝트 관리', level: 80 },
    { name: 'UI/UX', level: 75 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">보유 스킬</h2>
        <button className="text-primary hover:text-primary-dark">+ 스킬 추가</button>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span className="text-gray-500">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Reviews() {
  const reviews = [
    {
      id: '1',
      name: '이개발',
      position: '테크스타트 / 개발팀 리드',
      company: '테크스타트',
      period: '2019-2022',
      rating: 5,
      content: '뛰어난 커뮤니케이션 능력과 문제 해결 능력을 갖춘 PM입니다. 개발팀과의 협업 시 명확한 요구사항 전달과 일정 관리가 인상적이었습니다. 특히 사용자 중심의 제품 기획과 데이터 기반의 의사결정이 프로젝트 성공에 크게 기여했습니다.',
      skills: ['커뮤니케이션', '문제해결', '제품기획']
    },
    {
      id: '2',
      name: '박디자인',
      position: '테크스타트 / 디자인 팀장',
      company: '테크스타트',
      period: '2020-2022',
      rating: 5,
      content: 'UX에 대한 깊은 이해를 바탕으로 디자인팀과 원활하게 협업했습니다. 사용자 리서치부터 프로토타입 검증까지, 제품의 전체 프로세스를 체계적으로 이끌어가는 모습이 인상적이었습니다.',
      skills: ['UX 이해도', '협업능력', '프로세스 관리']
    },
    {
      id: '3',
      name: '김마케팅',
      position: '이전 직장 / 마케팅 매니',
      company: '디지털컴퍼니',
      period: '2017-2019',
      rating: 4,
      content: '데이터 분석을 통한 인사이트 도출 능력이 뛰어났습니다. 마케팅팀과 긴밀하게 협력하여 사용자 피드백을 제품에 효과적으로 반영했으며, 이는 사용자 만족도 향상으로 이어졌습니다.',
      skills: ['데이터분석', '협업능력', '피드백 반영']
    },
    {
      id: '4',
      name: '최리더',
      position: '이전 직장 / 사업부 총괄',
      company: '디지털컴퍼니',
      period: '2017-2019',
      rating: 5,
      content: '책임감 있는 업무 수행과 팀 리딩 능력이 돋보였습니다. 특히 어려운 상황에서도 침착하게 문제를 해결하고, 팀원들을 효과적으로 이끄는 리더십을 보여주었습니다. 향후 관리자로서의 성장 가능성도 매우 높다고 평가됩니다.',
      skills: ['리더십', '위기관리', '책임감']
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">동료 리뷰</h2>
        <Link
          href="/profile/verify"
          className="text-primary hover:text-primary-dark"
        >
          리뷰 요청하기
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="border p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.position}</p>
                <p className="text-sm text-gray-500">{review.period}</p>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    className={`w-5 h-5 ${
                      star <= review.rating
                        ? 'text-yellow-400'
                        : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-3">
              {review.content}
            </p>
            <div className="flex flex-wrap gap-2">
              {review.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ReturnshipProgress() {
  const returnships: ReturnshipStatus[] = [
    {
      id: '1',
      programName: '디지털 마케팅 리턴십',
      company: '테크컴퍼니',
      period: '2024.04 - 2024.07',
      status: 'in_progress',
      progress: {
        current: 2,
        total: 6,
        nextTask: '디지털 광고 실습',
        nextDue: '2024.05.15'
      },
      mentor: {
        name: '김멘토',
        position: '마케팅 팀장',
        nextMeeting: '2024.05.10 14:00'
      }
    },
    {
      id: '2',
      programName: 'UX 디자인 리턴십',
      company: '디자인허브',
      period: '2024.01 - 2024.03',
      status: 'completed',
      progress: {
        current: 6,
        total: 6
      }
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">리턴십 진행 현황</h2>
      </div>

      <div className="space-y-6">
        {returnships.map((program) => (
          <div key={program.id} className="border rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg">{program.programName}</h3>
                <p className="text-gray-600">{program.company}</p>
                <p className="text-sm text-gray-500">{program.period}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                program.status === 'in_progress'
                  ? 'bg-primary/10 text-primary'
                  : program.status === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {program.status === 'in_progress' ? '진행중'
                  : program.status === 'completed' ? '수료완료'
                  : '대기중'}
              </span>
            </div>

            {program.status === 'in_progress' && (
              <>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>진행률</span>
                    <span>{Math.round((program.progress.current / program.progress.total) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(program.progress.current / program.progress.total) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-4 border-t pt-4">
                  {program.progress.nextTask && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700">다음 과제</h4>
                      <p className="text-gray-600">{program.progress.nextTask}</p>
                      <p className="text-sm text-primary">마감일: {program.progress.nextDue}</p>
                    </div>
                  )}

                  {program.mentor && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700">멘토링</h4>
                      <p className="text-gray-600">{program.mentor.name} ({program.mentor.position})</p>
                      {program.mentor.nextMeeting && (
                        <p className="text-sm text-primary">다음 미팅: {program.mentor.nextMeeting}</p>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}

            {program.status === 'completed' && (
              <div className="mt-4 pt-4 border-t">
                <p className="text-gray-600">프로그램을 성공적으로 수료했습니다.</p>
                <button className="mt-2 text-primary hover:text-primary-dark text-sm">
                  수료증 다운로드
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}