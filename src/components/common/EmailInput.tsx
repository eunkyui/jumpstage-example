import React, { useState, ChangeEvent } from 'react';
import styles from '@/styles/components/EmailInput.module.scss';

interface EmailInputProps {
  value: string;
  onChange: (email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
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
    <div className={styles.emailInputContainer}>
      <input
        type="text"
        value={localPart}
        onChange={(e) => {
          setLocalPart(e.target.value);
          onChange(`${e.target.value}@${domain}`);
        }}
        placeholder="이메일"
        className={styles.emailInput}
      />
      <span>@</span>
      {selectedDomain === '직접입력' ? (
        <input
          type="text"
          value={domain}
          onChange={(e) => {
            setDomain(e.target.value);
            onChange(`${localPart}@${e.target.value}`);
          }}
          placeholder="도메인 입력"
          className={styles.domainInput}
        />
      ) : null}
      <select
        value={selectedDomain}
        onChange={handleDomainChange}
        className={styles.domainSelect}
      >
        {domainOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default EmailInput;