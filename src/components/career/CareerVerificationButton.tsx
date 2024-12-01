'use client';

import React from 'react';

interface CareerVerificationButtonProps {
  className?: string;
}

const CareerVerificationButton: React.FC<CareerVerificationButtonProps> = ({ className }) => {
  const handleVerification = async () => {
    try {
      const response = await fetch('/api/career/nhis-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        alert('경력 정보를 성공적으로 가져왔습니다.');
      } else {
        throw new Error('경력 정보 가져오기 실패');
      }
    } catch (error) {
      console.error('경력 정보 가져오기 실패:', error);
      alert('경력 정보를 가져오는데 실패했습니다.');
    }
  };

  return (
    <button
      onClick={handleVerification}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    >
      건강보험 공단 경력 정보 가져오기
    </button>
  );
};

export default CareerVerificationButton;