import React from 'react'
import { SkillWrap } from '../../components';

export function Skills() {
  const skills = [
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

  return <SkillWrap skills={skills} />
}