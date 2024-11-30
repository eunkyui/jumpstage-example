export type ReturnshipProgram = {
  id: string
  title: string
  company: string
  period: string
  location: string
  features: string[]
  conversionRate: string
  deadline: string
  field: string
  description: string
  curriculum: {
    title: string
    duration: string
    details: string[]
  }[]
  requirements: string[]
  benefits: string[]
  companyInfo: {
    name: string
    size: string
    industry: string
    description: string
    benefits: string[]
    culture: string[]
  }
  programDetails: {
    duration: string
    educationPeriod: string
    internshipPeriod: string
    participantsCount: string
    schedule: string
    location_detail: string
    supportAmount: string
  }
  mentoring: {
    schedule: string
    type: string
    mentors: {
      name: string
      position: string
      company: string
      expertise: string[]
    }[]
  }
  process: {
    steps: {
      title: string
      description: string
      duration: string
    }[]
    selectionProcess: string[]
  }
}

export const returnshipPrograms: ReturnshipProgram[] = [
  {
    id: '1',
    title: '디지털 마케팅 리턴십',
    company: '테크컴퍼니',
    period: '2024.04 - 2024.07',
    location: '서울 강남구',
    features: ['교육지원금', '멘토링', '전환채용가능'],
    conversionRate: '80%',
    deadline: 'D-14',
    field: '마케팅',
    description: '디지털 마케팅의 A to Z를 배우고 실무에 적용하는 기회',
    curriculum: [
      {
        title: '기초 교육 과정',
        duration: '1개월',
        details: [
          '디지털 마케팅 개요',
          '데이터 분석 기초',
          '마케팅 채널 이해'
        ]
      },
      {
        title: '실무 프로젝트',
        duration: '2개월',
        details: [
          '실제 캠페인 기획 및 운영',
          '성과 분석 및 리포팅',
          '팀 프로젝트 수행'
        ]
      }
    ],
    requirements: [
      '마케팅 경력 3년 이상',
      '데이터 분석 툴 사용 경험',
      '커뮤니케이션 능력'
    ],
    benefits: [
      '교육지원금 월 200만원',
      '수료 후 정규직 전환 기회',
      '멘토링 프로그램',
      '자기개발비 지원'
    ],
    companyInfo: {
      name: '테크컴퍼니',
      size: '100-200명',
      industry: 'IT/소프트웨어',
      description: '혁신적인 디지털 솔루션을 제공하는 기업',
      benefits: [
        '유연근무',
        '연구지원',
        '학습지원',
        '의료지원'
      ],
      culture: [
        '연구 중심',
        '수평적 문화',
        '지속적 학습',
        '글로벌 환경'
      ]
    },
    programDetails: {
      duration: '3개월',
      educationPeriod: '1개월',
      internshipPeriod: '2개월',
      participantsCount: '10명',
      schedule: '평일 10:00-17:00',
      location_detail: '강남역 2번 출구 도보 5분',
      supportAmount: '월 200만원'
    },
    mentoring: {
      schedule: '주 1회 (2시간)',
      type: '1:1 멘토링 + 그룹 멘토링',
      mentors: [
        {
          name: '김멘토',
          position: '디지털 마케팅 팀장',
          company: '테크컴퍼니',
          expertise: ['퍼포먼스 마케팅', '콘텐츠 마케팅', '데이터 분석']
        },
        {
          name: '이멘토',
          position: '마케팅 이사',
          company: '테크컴퍼니',
          expertise: ['브랜드 마케팅', '마케팅 전략', '팀 리더십']
        }
      ]
    },
    process: {
      steps: [
        {
          title: '기초 교육',
          description: '디지털 마케팅 기초 이론 및 실습',
          duration: '4주'
        },
        {
          title: '실무 프로젝트',
          description: '실제 마케팅 캠페인 기획 및 운영',
          duration: '4주'
        },
        {
          title: '심화 프로젝트',
          description: '성과 분석 및 최적화',
          duration: '4주'
        }
      ],
      selectionProcess: [
        '서류 전형',
        '온라인 과제',
        '직무 면접',
        '컬처 면접',
        '최종 합격'
      ]
    }
  },
  {
    id: '2',
    title: 'UX/UI 디자이너 리턴십',
    company: '디자인허브',
    period: '2024.05 - 2024.08',
    location: '서울 성수동',
    features: ['포트폴리오 지원', '재택근무', '육아지원'],
    conversionRate: '85%',
    deadline: 'D-7',
    field: '디자인',
    description: 'UX/UI 디자인의 전문성을 기르고 실무 경험을 쌓을 수 있는 프로그램입니다.',
    curriculum: [
      {
        title: 'UX 기초',
        duration: '4주',
        details: [
          '사용자 리서치 방법론',
          '정보 구조 설계',
          '와이어프레임 제작'
        ]
      },
      {
        title: 'UI 디자인',
        duration: '4주',
        details: [
          '디자인 시스템 이해',
          '인터랙션 디자인',
          '프로토타입 제작'
        ]
      }
    ],
    requirements: [
      '디자인 관련 경력 2년 이상',
      'Figma 활용 능력',
      '포트폴리오 제출 필수'
    ],
    benefits: [
      '최신형 맥북 프로 지급',
      '디자인 툴 라이센스 제공',
      '재택근무 가능',
      '육아 지원'
    ],
    companyInfo: {
      name: '디자인허브',
      size: '50-100명',
      industry: '디자인/IT',
      description: '혁신적인 디자인 솔루션을 제공하는 디자인 전문 기업',
      benefits: [
        '자율출퇴근',
        '장비지원',
        '교육지원',
        '건강검진'
      ],
      culture: [
        '창의적 환경',
        '수평적 문화',
        '협업 중시',
        '성장 지향'
      ]
    },
    programDetails: {
      duration: '3개월',
      educationPeriod: '2개월',
      internshipPeriod: '1개월',
      participantsCount: '8명',
      schedule: '평일 10:00-17:00',
      location_detail: '성수역 1번 출구 도보 3분',
      supportAmount: '월 180만원'
    },
    mentoring: {
      schedule: '주 2회 (1시간)',
      type: '1:1 멘토링',
      mentors: [
        {
          name: '박디자인',
          position: '디자인 리드',
          company: '디자인허브',
          expertise: ['UX 디자인', 'UI 디자인', '디자인 시스템']
        }
      ]
    },
    process: {
      steps: [
        {
          title: 'UX 기초',
          description: '사용자 중심 디자인 이론 및 실습',
          duration: '4주'
        },
        {
          title: 'UI 실습',
          description: '실제 프로젝트 디자인 작업',
          duration: '4주'
        },
        {
          title: '포트폴리오',
          description: '프로젝트 완성 및 포트폴리오 제작',
          duration: '4주'
        }
      ],
      selectionProcess: [
        '포트폴리오 심사',
        '실무 과제',
        '디자인 면접',
        '컬처 면접',
        '최종 합격'
      ]
    }
  },
  {
    id: '3',
    title: '백엔드 개발자 리턴십',
    company: '테크솔루션',
    period: '2024.06 - 2024.09',
    location: '서울 판교',
    features: ['자격증 취득지원', '유연근무', '전환채용가능'],
    conversionRate: '90%',
    deadline: 'D-21',
    field: '개발',
    description: '실무 중심의 백엔드 개발 교육과 실제 프로젝트 경험을 제공하는 프로그램입니다.',
    curriculum: [
      {
        title: '백엔드 기초',
        duration: '4주',
        details: [
          'Java/Spring 심화',
          'DB 설계 및 최적화',
          'API 개발 실습'
        ]
      },
      {
        title: '실무 프로젝트',
        duration: '8주',
        details: [
          '실제 서비스 개발 참여',
          '코드 리뷰',
          '성능 최적화'
        ]
      }
    ],
    requirements: [
      '개발 경력 2년 이상',
      'Java/Spring 경험',
      'SQL 활용 능력'
    ],
    benefits: [
      '개발 장비 지원',
      '클라우드 자격증 취득 지원',
      '컨퍼런스 참가 지원',
      '도서구입비'
    ],
    companyInfo: {
      name: '테크솔루션',
      size: '100-200명',
      industry: 'IT/소프트웨어',
      description: '엔터프라이즈 솔루션을 제공하는 기술 중심 기업',
      benefits: [
        '자율출퇴근',
        '장비지원',
        '자기개발',
        '의료지원'
      ],
      culture: [
        '기술 중심',
        '자율 문화',
        '지속 학습',
        '협업 강조'
      ]
    },
    programDetails: {
      duration: '3개월',
      educationPeriod: '1개월',
      internshipPeriod: '2개월',
      participantsCount: '12명',
      schedule: '평일 09:00-18:00',
      location_detail: '판교역 2번 출구 도보 7분',
      supportAmount: '월 250만원'
    },
    mentoring: {
      schedule: '주 2회 (2시간)',
      type: '1:1 멘토링 + 팀 멘토링',
      mentors: [
        {
          name: '김개발',
          position: '개발 팀장',
          company: '테크솔루션',
          expertise: ['백엔드 개발', '시스템 설계', '성능 최적화']
        },
        {
          name: '이시니어',
          position: '수석 개발자',
          company: '테크솔루션',
          expertise: ['Java/Spring', 'MSA', 'DevOps']
        }
      ]
    },
    process: {
      steps: [
        {
          title: '기술 교육',
          description: '백엔드 개발 심화 학습',
          duration: '4주'
        },
        {
          title: '프로젝트',
          description: '실제 서비스 개발 참여',
          duration: '4주'
        },
        {
          title: '심화 과정',
          description: '성능 최적화 및 운영',
          duration: '4주'
        }
      ],
      selectionProcess: [
        '서류 심사',
        '코딩 테스트',
        '기술 면접',
        '컬처 면접',
        '최종 합격'
      ]
    }
  },
  {
    id: '4',
    title: '데이터 분석가 리턴십',
    company: '데이터랩스',
    period: '2024.07 - 2024.10',
    location: '서울 역삼동',
    features: ['자격증 취득지원', '전환채용가능', '멘토링'],
    conversionRate: '85%',
    deadline: 'D-25',
    field: '데이터',
    description: '데이터 분석 실무 능력을 키우고 실제 프로젝트에 참여하는 기회를 제공합니다.',
    curriculum: [
      {
        title: '데이터 기초',
        duration: '4주',
        details: [
          'SQL 심화',
          '데이터 시각화',
          '통계 분석 기초'
        ]
      },
      {
        title: '실무 프로젝트',
        duration: '8주',
        details: [
          '실제 데이터 분석',
          '대시보드 구축',
          'A/B 테스트'
        ]
      }
    ],
    requirements: [
      '데이터 관련 업무 경험 2년 이상',
      'SQL 기본 지식',
      'Python/R 중 하나 이상 사용 가능'
    ],
    benefits: [
      '데이터 자격증 취득 지원',
      '유연근무제',
      '교육비 지원',
      '전문 멘토링'
    ],
    companyInfo: {
      name: '데이터랩스',
      size: '50-100명',
      industry: '데이터/AI',
      description: '데이터 기반의 비즈니스 인사이트를 제공하는 데이터 전문 기업',
      benefits: [
        '자율출퇴근',
        '교육지원',
        '자격증지원',
        '건강검진'
      ],
      culture: [
        '데이터 중심',
        '자율성 존중',
        '지속 학습',
        '수평적 소통'
      ]
    },
    programDetails: {
      duration: '3개월',
      educationPeriod: '1개월',
      internshipPeriod: '2개월',
      participantsCount: '10명',
      schedule: '평일 10:00-18:00',
      location_detail: '역삼역 3번 출구 도보 5분',
      supportAmount: '월 220만원'
    },
    mentoring: {
      schedule: '주 2회 (1.5시간)',
      type: '1:1 멘토링 + 그룹 멘토링',
      mentors: [
        {
          name: '정데이터',
          position: '데이터 분석 리드',
          company: '데이터랩스',
          expertise: ['데이터 분석', '머신러닝', '비즈니스 통계']
        }
      ]
    },
    process: {
      steps: [
        {
          title: '기초 교육',
          description: '데이터 분석 기초 학습',
          duration: '4주'
        },
        {
          title: '실무 프로젝트',
          description: '실제 데이터 분석 프로젝트',
          duration: '8주'
        }
      ],
      selectionProcess: [
        '서류 심사',
        'SQL 테스트',
        '기술 면접',
        '컬처 면접',
        '최종 합격'
      ]
    }
  },
  {
    id: '5',
    title: '디지털 마케팅 리턴십',
    company: '마케팅프로',
    period: '2024.08 - 2024.11',
    location: '서울 선릉동',
    features: ['실무프로젝트', '교육지원금', '육아지원'],
    conversionRate: '80%',
    deadline: 'D-30',
    field: '마케팅',
    description: '디지털 마케팅의 전 과정을 경험하고 실무 역량을 키우는 프로그램입니다.',
    curriculum: [
      {
        title: '마케팅 기초',
        duration: '4주',
        details: [
          '디지털 마케팅 전략',
          '콘텐츠 마케팅',
          '퍼포먼스 마케팅'
        ]
      },
      {
        title: '실전 프로젝트',
        duration: '8주',
        details: [
          '캠페인 기획 및 운영',
          '데이터 분석',
          '성과 보고서 작성'
        ]
      }
    ],
    requirements: [
      '마케팅 경력 2년 이상',
      '디지털 마케팅 도구 활용 경험',
      '데이터 분석 능력'
    ],
    benefits: [
      '교육지원금 지원',
      '육아수당 지원',
      '자격증 취득 지원',
      '도서구입비'
    ],
    companyInfo: {
      name: '마케팅프로',
      size: '100-200명',
      industry: '마케팅/광고',
      description: '통합 마케팅 솔루션을 제공하는 디지털 마케팅 전문 기업',
      benefits: [
        '유연근무',
        '육아지원',
        '자기개발',
        '건강검진'
      ],
      culture: [
        '창의적 환경',
        '성과중심',
        '협업 강조',
        '수평적 문화'
      ]
    },
    programDetails: {
      duration: '3개월',
      educationPeriod: '1개월',
      internshipPeriod: '2개월',
      participantsCount: '15명',
      schedule: '평일 09:30-17:30',
      location_detail: '선릉역 1번 출구 도보 3분',
      supportAmount: '월 200만원'
    },
    mentoring: {
      schedule: '주 1회 (2시간)',
      type: '그룹 멘토링',
      mentors: [
        {
          name: '김마케팅',
          position: '마케팅 총괄',
          company: '마케팅프로',
          expertise: ['브랜드 마케팅', '퍼포먼스 마케팅', '콘텐츠 전략']
        }
      ]
    },
    process: {
      steps: [
        {
          title: '이론 교육',
          description: '마케팅 전략 및 도구 학습',
          duration: '4주'
        },
        {
          title: '실무 프로젝트',
          description: '실제 캠페인 운영',
          duration: '8주'
        }
      ],
      selectionProcess: [
        '서류 심사',
        '과제 평가',
        '직무 면접',
        '임원 면접',
        '최종 합격'
      ]
    }
  },
  {
    id: '6',
    title: 'HR 매니저 리턴십',
    company: '피플파트너스',
    period: '2024.09 - 2024.12',
    location: '서울 삼성동',
    features: ['전환채용보장', '유연근무', '자격증지원'],
    conversionRate: '95%',
    deadline: 'D-35',
    field: 'HR',
    description: '인사관리와 채용 전반의 실무 경험을 제공하는 프로그램입니다.',
    curriculum: [
      {
        title: 'HR 기초',
        duration: '4주',
        details: [
          '인사제도 설계',
          '채용 프로세스',
          '성과관리'
        ]
      },
      {
        title: '실무 실습',
        duration: '8주',
        details: [
          '채용 진행',
          '인사 운영',
          '교육 기획'
        ]
      }
    ],
    requirements: [
      'HR 경력 3년 이상',
      '채용 프로세스 경험',
      '커뮤니케이션 능력'
    ],
    benefits: [
      '전환채용 보장',
      'HR 자격증 취득 지원',
      '유연근무제',
      '교육비 지원'
    ],
    companyInfo: {
      name: '피플파트너스',
      size: '200-300명',
      industry: 'HR/컨설팅',
      description: 'HR 솔루션과 컨설팅을 제공하는 HR 전문 기업',
      benefits: [
        '자율출퇴근',
        '자격증지원',
        '복지포인트',
        '건강검진'
      ],
      culture: [
        '전문성 중시',
        '워라밸 존중',
        '소통 강조',
        '성장 지향'
      ]
    },
    programDetails: {
      duration: '3개월',
      educationPeriod: '1개월',
      internshipPeriod: '2개월',
      participantsCount: '8명',
      schedule: '평일 09:00-18:00',
      location_detail: '삼성중앙역 4번 출구 도보 1분',
      supportAmount: '월 230만원'
    },
    mentoring: {
      schedule: '주 2회 (2시간)',
      type: '1:1 멘토링',
      mentors: [
        {
          name: '박인사',
          position: 'HR 이사',
          company: '피플파트너스',
          expertise: ['인사제도', '채용', '조직문화']
        }
      ]
    },
    process: {
      steps: [
        {
          title: '기초 교육',
          description: 'HR 기초 이론 및 실습',
          duration: '4주'
        },
        {
          title: '실무 진행',
          description: '실제 채용 프로세스 참여',
          duration: '8주'
        }
      ],
      selectionProcess: [
        '서류 심사',
        'HR 과제',
        '실무 면접',
        '임원 면접',
        '최종 합격'
      ]
    }
  }
]

export const getReturnshipById = (id: string): ReturnshipProgram | undefined => {
  return returnshipPrograms.find(program => program.id === id)
}