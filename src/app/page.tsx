import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import FeaturedJobs from '@/components/home/FeaturedJobs'
import ReturnshipPrograms from '@/components/home/ReturnshipPrograms'
import SuccessStories from '@/components/home/SuccessStories'
import Stats from '@/components/home/Stats'

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            경력의 새로운 도약을 위한 첫걸음
          </h1>
          <p className="text-xl mb-8">
            경력 단절 없는 성장을 위한 최적의 플랫폼
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/jobs"
              className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100"
            >
              채용공고 보기
            </Link>
            <Link
              href="/returnship"
              className="px-6 py-3 bg-transparent border-2 border-white rounded-lg hover:bg-white/10"
            >
              리턴십 알아보기
            </Link>
          </div>
        </div>
      </section>

      <Stats />
      <FeaturedJobs />
      <ReturnshipPrograms />
      <SuccessStories />

      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            당신의 커리어를 JumpStage와 함께 시작하세요
          </h2>
          <p className="text-xl mb-8">
            경력 단절 극복을 위한 최적의 솔루션을 제공합니다
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100"
          >
            무료로 시작하기
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}