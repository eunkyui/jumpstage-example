export type JobListing = {
  id: string
  title: string
  company: string
  location: string
  type: string
  workHours: string
  salary: string
  deadline: string
  badges: string[]
  // 상세 페이지용 추가 데이터
  description: string
  requirements: string[]
  preferreds: string[]
  benefits: string[]
  companyInfo: {
    name: string
    size: string
    industry: string
    description: string
    benefits: string[]
    culture: string[]
  }
  workDetail: {
    responsibilities: string[]
    environment: string[]
    schedule: string
    location_detail: string
  }
}

export const jobListings: JobListing[] = [
  {
    id: '1',
    title: '프로덕트 매니저',
    company: '테크스타트',
    location: '서울 강남구',
    type: '정규직',
    workHours: '주 40시간(풀타임)',
    salary: '5,000~7,000만원',
    deadline: 'D-7',
    badges: ['여성친화기업', '유연근무'],
    description: '테크스타트는 혁신적인 제품을 만들어갈 열정적인 프로덕트 매니저를 찾고 있습니다.',
    requirements: [
      '5년 이상의 프로덕트 매니 경력',
      '데이터 기반 의사결정 경험',
      '우수한 커뮤니케이션 능력',
      'IT 서비스 기획 경험'
    ],
    preferreds: [
      'SaaS 제품 기획 경험',
      'SQL 활용 가능자',
      'Agile/Scrum 경험',
      '스타트업 근무 경험'
    ],
    benefits: [
      '유연근무제 운영',
      '자기개발비 지원',
      '건강검진 지원',
      '경조사 지원',
      '육아휴직 보장',
      '성과급 지급'
    ],
    companyInfo: {
      name: '테크스타트',
      size: '50-100명',
      industry: 'IT/소프트웨어',
      description: '혁신적인 기술 솔루션을 제공하는 스타트업입니다.',
      benefits: [
        '탄력근무제',
        '자기개발비',
        '건강검진',
        '동호회 지원'
      ],
      culture: [
        '수평적인 문화',
        '자율적인 업무환경',
        '지속적인 성장 추구',
        '워라밸 존중'
      ]
    },
    workDetail: {
      responsibilities: [
        '제품 전략 수립 및 로드맵 구축',
        '데이터 분석 및 인사이트 도출',
        '유관부서와의 협업',
        '제품 성과 분석 및 개선'
      ],
      environment: [
        '맥북 프로 지급',
        '듀얼 모니터',
        '탠딩 데스크',
        '카페테리아'
      ],
      schedule: '유연근무제 (코어타임 13:00-16:00)',
      location_detail: '강남역 2번 출구 도보 5분'
    }
  },
  {
    id: '13',
    title: '브랜드 디자이너',
    company: '크리에이티브랩',
    location: '서울 성수동',
    type: '정규직',
    workHours: '주 32시간',
    salary: '4,500~6,000만원',
    deadline: 'D-13',
    badges: ['여성친화기업', '재택근무', '육아지원'],
    description: '브랜드 아이덴티티 구축과 디자인 시스템을 만들어갈 열정적인 디자이너를 찾습니다.',
    requirements: [
      '브랜드 디자인 3년 이상 경력',
      'Adobe Creative Suite 능숙한 사용',
      '포트폴리오 필수',
      '브랜드 가이드라인 제작 경험'
    ],
    preferreds: [
      '스타트업 브랜딩 경험',
      'UI/UX 디자인 경험',
      '디자인 팀 리드 경험',
      'Figma 활용 능력'
    ],
    benefits: [
      '4.5일 근무제',
      '자유로운 재택근무',
      '디자인 교육비 지원',
      '육아휴직 2년',
      '사내 어린이집 운영',
      '생일자 조기퇴근'
    ],
    companyInfo: {
      name: '크리에이티브랩',
      size: '30-50명',
      industry: '디자인/브랜딩',
      description: '디지털 시대의 혁신적인 브랜드 경험을 만드는 크리에이티브 에이전시입니다.',
      benefits: [
        '자율 출퇴근',
        '교육비 지원',
        '장비 지원',
        '간식 무제한'
      ],
      culture: [
        '창의적인 환경',
        '수평적 소통',
        '자율적 업무방식',
        '협업 중심'
      ]
    },
    workDetail: {
      responsibilities: [
        '브랜드 아이덴티티 개발',
        '디자인 시스템 구축',
        '마케팅 디자인 제작',
        '브랜드 가이드라인 제작'
      ],
      environment: [
        'M1 맥북 프로 지급',
        '듀얼 모니터',
        '전자 스탠딩 데스크',
        '프리미엄 사무실'
      ],
      schedule: '자율 출퇴근 (코어타임 11:00-16:00)',
      location_detail: '성수역 3번 출구 도보 1분'
    }
  },
  {
    id: '14',
    title: '데이터 사이언티스트',
    company: 'AI테크놀로지',
    location: '서울 서초구',
    type: '정규직',
    workHours: '시간 협의가능',
    salary: '6,500~8,500만원',
    deadline: 'D-16',
    badges: ['여성친화기업', '유연근무', '자기개발지원'],
    description: '머신러닝 모델 개발과 데이터 분석을 통해 비즈니스 인사이트를 도출할 데이터 사이언티스트를 모십니다.',
    requirements: [
      '데이터 사이언스 관련 3년 이상 경력',
      'Python, R 중 하나 이상 능숙',
      '통계학/수학/컴퓨터공학 관련 전공',
      'SQL 활용 능력'
    ],
    preferreds: [
      '박사학위 소지자',
      'Kaggle 수상 경험',
      '논문 실적',
      '클라우드 플랫폼 경험'
    ],
    benefits: [
      '자율 출퇴근제',
      '연구개발비 지원',
      '컨퍼런스 참가비',
      '논문 게재 지원',
      '자기개발비',
      '건강검진 패키지'
    ],
    companyInfo: {
      name: 'AI테크놀로지',
      size: '100-200명',
      industry: 'AI/머신러닝',
      description: '최첨단 AI 기술을 통해 산업의 혁신을 이끄는 기술 중심 기업입니다.',
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
    workDetail: {
      responsibilities: [
        '머신러닝 모델 개발',
        '데이터 분석 및 인사이트 도출',
        '비즈니스 솔루션 제안',
        '연구 프로젝트 수행'
      ],
      environment: [
        '고성능 워크스테이션',
        '듀얼 모니터',
        'GPU 서버 제공',
        '수면실'
      ],
      schedule: '자율 출퇴근 (주 40시간 기준)',
      location_detail: '강남역 4번 출구 도보 7분'
    }
  },
  {
    id: '15',
    title: '온라인 마케팅 매니저',
    company: '이커머스허브',
    location: '서울 송파구',
    type: '계약직',
    workHours: '주 30시간',
    salary: '4,000~5,000만원',
    deadline: 'D-3',
    badges: ['유연근무', '육아지원', '재택가능'],
    description: '디지털 마케팅 전략 수립부터 실행까지 리드할 수 있는 마케팅 전문가를 찾습니다.',
    requirements: [
      '디지털 마케팅 3년 이상 경력',
      '이커머스 마케팅 경험',
      'Google Analytics 활용 능력',
      '데이터 기반 의사결정 경험'
    ],
    preferreds: [
      'SNS 채널 운영 경험',
      '콘텐츠 제작 능력',
      '광고 집행 경험',
      'SQL 기본 지식'
    ],
    benefits: [
      '유연근무제',
      '주 4일 근무 가능',
      '육아수당 지원',
      '마케팅 교육비',
      '성과급 제도',
      '자유로운 연차'
    ],
    companyInfo: {
      name: '이커머스허브',
      size: '50-100명',
      industry: '이커머스/리테일',
      description: '새로운 쇼핑 경험을 만들어가는 이커머스 전문 기업입니다.',
      benefits: [
        '자율출퇴근',
        '육아지원',
        '교육지원',
        '건강검진'
      ],
      culture: [
        '성과중심',
        '유연한 조직',
        '빠른 실행',
        '데이터 기반'
      ]
    },
    workDetail: {
      responsibilities: [
        '마케팅 전략 수립',
        '성과 분석 및 개선',
        '콘텐츠 기획',
        '광고 캠페인 운영'
      ],
      environment: [
        '최신형 노트북',
        '듀얼 모니터',
        '카페테리아',
        '휴게실'
      ],
      schedule: '자율 출퇴근 (코어타임 13:00-17:00)',
      location_detail: '잠실역 2번 출구 도보 5분'
    }
  },
  {
    id: '16',
    title: '회계/재무 매니저',
    company: '파이낸스그룹',
    location: '서울 영등포구',
    type: '시간제',
    workHours: '주 20시간',
    salary: '시급 35,000원',
    deadline: 'D-17',
    badges: ['유연근무', '경력단절우대', '자기개발지원'],
    description: '회계 및 재무 관리 업무를 담당할 전문가를 모십니다. 경력 단절 여성을 우대합니다.',
    requirements: [
      '회계/재무 분야 3년 이상 경력',
      '재무제표 분석 능력',
      '회계 프로그램 활용 능력',
      '엑셀 고급 활용'
    ],
    preferreds: [
      '공인회계사/세무사 자격증',
      'ERP 시스템 경험',
      '재무 분석 보고서 작성 경험',
      '영문 회계 처리 경험'
    ],
    benefits: [
      '자격증 취득 지원',
      '탄력근무제',
      '교육비 지원',
      '경조사 지원',
      '명절 선물',
      '자기개발비'
    ],
    companyInfo: {
      name: '파이낸스그룹',
      size: '100-200명',
      industry: '금융/회계',
      description: '혁신적인 금융 서비스를 제공하는 금융 전문 기업입니다.',
      benefits: [
        '유연근무',
        '자기개발',
        '의료지원',
        '복지포인트'
      ],
      culture: [
        '전문성 존중',
        '워라밸 중시',
        '소통과 협력',
        '지속 성장'
      ]
    },
    workDetail: {
      responsibilities: [
        '재무제표 작성',
        '세무 신고 지원',
        '회계 감사 대응',
        '재무 분석'
      ],
      environment: [
        '개인 노트북',
        '스탠딩 데스크',
        '회의실',
        '사내 카페'
      ],
      schedule: '탄력근무제 (오전/오후 선택)',
      location_detail: '여의도역 1번 출구 도보 3분'
    }
  },
  {
    id: '17',
    title: '프로젝트 매니저',
    company: '소프트웨어허브',
    location: '서울 강남구',
    type: '정규직',
    workHours: '주 35시간',
    salary: '5,500~7,000만원',
    deadline: 'D-5',
    badges: ['여성친화기업', '유연근무', '재택가능'],
    description: '소프트웨어 개발 프로젝트를 리드할 PM을 찾습니다.',
    requirements: [
      '소프트웨어 개발 3년 이상 경력',
      '프로젝트 관리 경험',
      '팀 리드 경험',
      '소프트웨어 개발 경험'
    ],
    preferreds: [
      '스타트업 경험',
      '프로젝트 관리 교육',
      '소프트웨어 개발 교육',
      '클라우드 플랫폼 경험'
    ],
    benefits: [
      '자율 출퇴근제',
      '연구개발비 지원',
      '컨퍼런스 참가비',
      '논문 게재 지원',
      '자기개발비',
      '건강검진 패키지'
    ],
    companyInfo: {
      name: '소프트웨어허브',
      size: '50-100명',
      industry: '소프트웨어/IT',
      description: '최첨단 소프트웨어 개발을 위한 전문 기업입니다.',
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
    workDetail: {
      responsibilities: [
        '프로젝트 관리',
        '팀 리드',
        '소프트웨어 개발 지원',
        '연구 프로젝트 수행'
      ],
      environment: [
        '고성능 워크스테이션',
        '듀얼 모니터',
        'GPU 서버 제공',
        '수면실'
      ],
      schedule: '자율 출퇴근 (주 40시간 기준)',
      location_detail: '강남역 4번 출구 도보 7분'
    }
  },
  {
    id: '18',
    title: '인사 매니저',
    company: '피플파트너스',
    location: '서울 서초구',
    type: '시간제',
    workHours: '주 25시간',
    salary: '시급 40,000원',
    deadline: 'D-8',
    badges: ['육아지원', '경력단절우대', '유연근무'],
    description: '채용과 인사관리를 담당할 HR 매니저를 모십니다.',
    requirements: [
      '인사 관련 3년 이상 경력',
      '채용 경험',
      '인사 시스템 활용 능력',
      '엑셀 고급 활용'
    ],
    preferreds: [
      '인사 전문가 자격증',
      '인사 관리 교육',
      '채용 교육',
      '영문 인사 처리 경험'
    ],
    benefits: [
      '자격증 취득 지원',
      '탄력근무제',
      '교육비 지원',
      '경조사 지원',
      '명절 선물',
      '자기개발비'
    ],
    companyInfo: {
      name: '피플파트너스',
      size: '100-200명',
      industry: '인사/채용',
      description: '인사 전문 기업입니다.',
      benefits: [
        '유연근무',
        '자기개발',
        '의료지원',
        '복지포인트'
      ],
      culture: [
        '전문성 존중',
        '워라밸 중시',
        '소통과 협력',
        '지속 성장'
      ]
    },
    workDetail: {
      responsibilities: [
        '채용 공고 작성',
        '이력서 분석',
        '인사 시스템 관리',
        '인사 관리 보고서 작성'
      ],
      environment: [
        '개인 노트북',
        '스탠딩 데스크',
        '회의실',
        '사내 카페'
      ],
      schedule: '탄력근무제 (오전/오후 선택)',
      location_detail: '여의도역 1번 출구 도보 3분'
    }
  },
  {
    id: '19',
    title: '콘텐츠 기획자',
    company: '미디어그룹',
    location: '서울 마포구',
    type: '정규직',
    workHours: '시간 협의가능',
    salary: '4,500~6,000만원',
    deadline: 'D-12',
    badges: ['재택근무', '자기개발지원', '유연근무'],
    description: '디지털 콘텐츠 기획 및 제작을 주도할 기획자를 찾습니다.',
    requirements: [
      '콘텐츠 기획 3년 이상 경력',
      '콘텐츠 제작 능력',
      '기획 교육',
      '영문 콘텐츠 처리 경험'
    ],
    preferreds: [
      '콘텐츠 마케팅 경험',
      '콘텐츠 분석 경험',
      '콘텐츠 기획 교육',
      '콘텐츠 제작 교육'
    ],
    benefits: [
      '자율 출퇴근제',
      '연구개발비 지원',
      '컨퍼런스 참가비',
      '논문 게재 지원',
      '자기개발비',
      '건강검진 패키지'
    ],
    companyInfo: {
      name: '미디어그룹',
      size: '50-100명',
      industry: '미디어/콘텐츠',
      description: '디지털 콘텐츠 전문 기업입니다.',
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
    workDetail: {
      responsibilities: [
        '콘텐츠 기획',
        '콘텐츠 제작',
        '콘텐츠 마케팅',
        '콘텐츠 분석'
      ],
      environment: [
        '최신형 노트북',
        '듀얼 모니터',
        '카페테리아',
        '휴게실'
      ],
      schedule: '자율 출퇴근 (코어타임 13:00-17:00)',
      location_detail: '잠실역 2번 출구 도보 5분'
    }
  }
]

export const getJobById = (id: string): JobListing | undefined => {
  return jobListings.find(job => job.id === id)
}