'use client';

import React, { useState } from 'react';

interface JobCategorySelectProps {
  onChange: (category: string) => void;
  className?: string;
}

const JobCategorySelect: React.FC<JobCategorySelectProps> = ({ onChange, className }) => {
  const [selectedMainCategory, setSelectedMainCategory] = useState<string>('');

  const jobCategories: Record<string, string[]> = {
    '재무/회계': ['재무', '회계', '세무', '예산관리'],
    'SW 개발': ['프론트엔드', '백엔드', '풀스택', '모바일', 'DevOps'],
    '기획': ['서비스기획', '전략기획', '상품기획'],
    '디자인': ['UI/UX', '그래픽', '제품디자인'],
    '마케팅/홍보': ['디지털마케팅', '브랜드마케팅', '콘텐츠제작', 'PR']
  };

  return (
    <div className="flex gap-3">
      <select
        value={selectedMainCategory}
        onChange={(e) => setSelectedMainCategory(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">직군 선택</option>
        {Object.keys(jobCategories).map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      {selectedMainCategory && (
        <select
          onChange={(e) => onChange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">세부직군 선택</option>
          {jobCategories[selectedMainCategory].map(subCategory => (
            <option key={subCategory} value={subCategory}>{subCategory}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default JobCategorySelect;