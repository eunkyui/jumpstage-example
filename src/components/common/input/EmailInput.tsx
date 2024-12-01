'use client';

import React, { useState, ChangeEvent } from 'react';

interface EmailInputProps {
  value: string;
  onChange: (email: string) => void;
  className?: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ value, onChange, className }) => {
  const [localPart, setLocalPart] = useState<string>('');
  const [domain, setDomain] = useState<string>('');
  const [selectedDomain, setSelectedDomain] = useState<string>('직접입력');

  const domainOptions: string[] = [
    '직접입력',
    'naver.com',
    'gmail.com',
    'daum.net',
    'kakao.com'
  ];

  const handleDomainChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedDomain(selected);

    if (selected === '직접입력') {
      setDomain('');
    } else {
      setDomain(selected);
    }

    onChange(`${localPart}@${selected === '직접입력' ? '' : selected}`);
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <input
        type="text"
        value={localPart}
        onChange={(e) => {
          setLocalPart(e.target.value);
          onChange(`${e.target.value}@${domain}`);
        }}
        placeholder="이메일"
        className="flex-1 min-w-[120px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="text-gray-500">@</span>
      {selectedDomain === '직접입력' ? (
        <input
          type="text"
          value={domain}
          onChange={(e) => {
            setDomain(e.target.value);
            onChange(`${localPart}@${e.target.value}`);
          }}
          placeholder="도메인 입력"
          className="flex-1 min-w-[120px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : null}
      <select
        value={selectedDomain}
        onChange={handleDomainChange}
        className="min-w-[120px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {domainOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default EmailInput;