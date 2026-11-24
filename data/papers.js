// OrbitCraft 연구 데이터: 메인 페이지와 소논문 페이지가 함께 씁니다.
// 상태(s): "done" 완성 / "doing" 진행 중 / "plan" 준비 중
// 분야(f): FIELDS의 name 중 하나
// 분류(k): "논문" 또는 "소논문"
// 논문이 완성되면 s를 "done"으로 바꾸고 date와 pdf(예: "papers/파일이름.pdf")를 채우면 됩니다.
// 분야 사진(img)과 설명(alt), 출처(cap)는 메인 페이지 연구 칸에 나옵니다. 사진은 모두 NASA 퍼블릭 도메인입니다.
window.ORBIT_FIELDS = [
  { name: "발사체", en: "Launch Vehicles", desc: "발사체가 지상에서 궤도까지 오르는 궤적과 비행 과정을 시뮬레이션합니다.",
    img: "assets/artemis1-launch.jpg", alt: "밤하늘로 솟아오르는 SLS 로켓", cap: "아르테미스 1호 발사 · 2022 · NASA/Joel Kowsky" },
  { name: "추진 · 엔진", en: "Propulsion", desc: "로켓 엔진과 제트엔진이 추력을 만드는 원리와 성능을 계산합니다.",
    img: "assets/rs25-hotfire.jpg", alt: "시험대에서 연소 시험 중인 RS-25 로켓 엔진", cap: "RS-25 엔진 연소 시험 · 2024 · NASA 스테니스 우주센터" },
  { name: "제조 · 품질", en: "Manufacturing & Quality", desc: "복합재와 금속 적층제조 부품의 결함을 찾고, 왜 생기는지 분석합니다.",
    img: "assets/am-lab.jpg", alt: "금속 3D프린터로 막 출력한 로켓 부품의 분말을 털어내는 연구원들", cap: "적층제조 실험실 · NASA 마셜 우주비행센터 · NASA/Emmett Given" },
  { name: "인공위성", en: "Spacecraft", desc: "궤도 위의 위성이 자세를 잡고 임무를 수행하는 원리를 연구합니다.",
    img: "assets/orion-moon-earth.jpg", alt: "오리온 우주선 옆으로 보이는 달과 멀리 작은 지구", cap: "오리온 우주선과 달, 지구 · 아르테미스 2호 · 2026 · NASA" }
];

window.ORBIT_PAPERS = [
  { id: "OC-L01", k: "논문", f: "발사체", s: "done", date: "2026.11", t: "누리호 2차원 궤도 진입 시뮬레이션과 실제 발사 기록 비교",
    a: "공개된 설계 제원과 2차원 질점 모델로 누리호의 상승 궤적을 계산해 4차 발사 비행 기록과 비교했습니다. 단 분리 시각은 3~6초, 궤도 진입 시각은 15초 차이로 재현했고, 2·3차 발사에서도 단 분리 시각이 3초 이내로 맞았습니다.",
    pdf: "papers/nuri-orbit-insertion-simulation.pdf" },
  { id: "OC-P01", k: "소논문", f: "추진 · 엔진", s: "plan", t: "누리호 75톤 엔진의 고도별 성능 계산",
    a: "노즐 팽창비와 고도에 따른 추력, 비추력 변화를 계산해 공개된 엔진 성능과 비교할 예정입니다." },
  { id: "OC-M01", k: "소논문", f: "제조 · 품질", s: "doing", t: "탄소섬유 3D프린팅 공정의 결함 유형 분류와 발생 메커니즘 분석",
    a: "기공, 층간 박리, 섬유 정렬 불량 같은 결함을 유형별로 정리하고 각 결함이 생기는 원인과 해결 방법을 분석합니다." },
  { id: "OC-M02", k: "소논문", f: "제조 · 품질", s: "plan", t: "층별 영상 기반 금속적층제조 이상 탐지 및 검사 지원 에이전트 개발",
    a: "적층 과정에서 촬영한 층별 영상으로 이상을 찾아내고, 검사자를 돕는 AI 에이전트를 만들 예정입니다." }
];

window.ORBIT_KINDS = ["논문", "소논문"];
window.ORBIT_STATUS = { done: "완성", doing: "진행 중", plan: "준비 중" };
