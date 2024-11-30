'use client'

import React from 'react'

type StatItemProps = {
  number: string
  label: string
}

function StatItem({ number, label }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-primary">{number}</div>
      <div className="mt-2 text-gray-600">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <StatItem number="1,234" label="채용 공고" />
          <StatItem number="89%" label="리턴십 취업률" />
          <StatItem number="5,678" label="경력 검증 완료" />
          <StatItem number="456" label="협력 기업" />
        </div>
      </div>
    </section>
  )
}