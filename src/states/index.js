export const skills = [
  {
    id: 1,
    name: "javascript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    rate: "3.0",
    descriptions: [
      "javascript를 활용해 webPage 제작 가능",
    ],
  },
  {
    id: 2,
    name: "react",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    rate: "1.5",
    descriptions: [
      "javascript의 수준으로 활용 가능",
      "해당 블로그를 react로 제작"
    ],
  },
  {
    id: 3,
    name: "flutter",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    rate: "2.5",
    descriptions: [
      "라이브러리를 활용하여 앱 제작 가능",
      "getX 활용 가능",
    ],
  },
  {
    id: 4,
    name: "android",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    rate: "2.0",
    descriptions: [
      "기본적인 앱 기능 구현 가능",
      "구글스토어 배포 가능",
    ],
  },
  {
    id: 5,
    name: "swift",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    rate: "1.5",
    descriptions: [
      "스토리보드를 활용하여 기본적인 앱 플로우 구현 가능",
      "앱스토어 배포 경험",
    ],
  },
  {
    id: 6,
    name: "nodejs",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    rate: "1.5",
    descriptions: [
      "기본적인 rest api 구현 가능",
    ],
  },
  {
    id: 7,
    name: "expressjs",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    rate: "1.5",
    descriptions: [
      "기본적인 rest api 구현 가능",
    ],
  },
  {
    id: 8,
    name: "spring",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    rate: "2.0",
    descriptions: [
      "기본적인 rest api 구현 가능",
    ],
  },
  {
    id: 9,
    name: "git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    rate: "2.0",
    descriptions: [
      "sourceTree 활용 가능",
      "git 명령어를 활용해 기본적인 기능 활용 가능",
    ],
  },
  {
    id: 10,
    name: "linux",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    rate: "2.0",
    descriptions: [
      "기본적인 파일 편집 및 기능 활용 가능",
    ],
  },
  {
    id: 11,
    name: "sass(scss)",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    rate: "2.0",
    descriptions: [
      "css를 대신하여 활용",
    ],
  },
];

export const careers = [
  {
    id: 1,
    company: "포씨게이트",
    careerStart: "2021-1-25",
    careerEnd: "2021-12-31",
    mainTask: "모바일 앱 개발",
    projects: [
      {
        id: 1,
        name: "용인세브란스병원 EMS",
        projectStart: "2021-1",
        projectEnd: "2021-6",
        descriptions: [
          "병원 내 환자들의 모바일 사용에 따른 누적된 데이터를 병원 관계자가 파악하기 쉽도록 제작된 웹페이지",
          "PC 및 모바일에 따른 반응형으로 제작",
        ],
        usedSkills: [
          "spring boot",
          "javascript",
          "jQuery",
          "scss",
        ],
      },
      {
        id: 2,
        name: "용인세브란스병원 앱 내 기능 추가",
        projectStart: "2021-6",
        projectEnd: "2021-7",
        descriptions: [
          "약 처방 내역 및 수납 내역 조회 기능",
          "혈압, 혈당 등 정보를 기록하는 건강 수첩 기능",
        ],
        usedSkills: [
          "android",
          "javascript",
          "spring boot",
          "jQuery",
          "scss",
        ],
      },
      {
        id: 3,
        name: "용인세브란스병원 유지보수 등",
        projectStart: "2021-6",
        projectEnd: "2021-12",
        descriptions: [
          "병원에서 요청하는 기능 수정 및 오류 수정 작업",
        ],
        usedSkills: [
          "android",
          "swift",
          "javascript",
          "spring boot",
          "scss",
          "linux",
        ],
      },
      {
        id: 4,
        name: "이화의료원 유지보수 등",
        projectStart: "2021-7",
        projectEnd: "2021-12",
        descriptions: [
          "환자들의 앱 기능 관련 민원 대응 및 해결",
          "병원에서 요청하는 기능 수정 및 오류 수정 작업"
        ],
        usedSkills: [
          "android",
          "javascript",
          "spring boot",
          "scss",
          "linux",
        ],
      },
      {
        id: 5,
        name: "일산차병원 신규 기능 추가",
        projectStart: "2021-9",
        projectEnd: "2021-9",
        descriptions: [
          "시술/수술 동영상 페이지 로직 변경 및 추가",
          "아기 면회 및 모유수유 폐이지 front 제작",
        ],
        usedSkills: [
          "android",
          "javascript",
          "spring boot",
          "scss",
        ],
      },
      {
        id: 6,
        name: "분당제일여성병원 리뉴얼",
        projectStart: "2021-5",
        projectEnd: "2021-6",
        descriptions: [
          "native 및 webview로 구현되어 있던 앱을 react로 리뉴얼 작업",
          "사내 사정으로 인해 작업 중 중단됨",
        ],
        usedSkills: [
          "react",
          "scss",
        ],
      },
      {
        id: 7,
        name: "용인세브란스병원 자녀진료카드 변경 기능 추가",
        projectStart: "2021-10",
        projectEnd: "2021-11",
        descriptions: [
          "본인 외 만 14세 미만 자녀의 진료카드를 등록하여 관리하는 기능 추가",
          "자녀 정보 검색 및 카드 추가, 삭제",
        ],
        usedSkills: [
          "android",
          "swift",
          "spring boot",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "레버티",
    careerStart: "2022-1-3",
    careerEnd: null,
    mainTask: "병원의 환자용 앱 및 의료진용 웹과 앱 신규 개발 및 유지보수",
    projects: [
      {
        id: 1,
        name: "덴탈보다 flutter 앱 제작",
        projectStart: "2022-1",
        projectEnd: "2022-2",
        descriptions: [
          "치기공사들의 교육을 위해 제작된 앱",
          "getX 사용하여 상태관리, routing 등 구현",
        ],
        usedSkills: [
          "flutter",
        ],
      },
    ],
  }
];