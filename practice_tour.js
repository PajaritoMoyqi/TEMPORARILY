const problemArr = [
  ["입회금 반환", "10일"],
  ["카지노사업 납부금", "10일"],
  ["카지노 전산실 신규 및 교체 후 검사", "15일"],
  ["분담금 및 가산금 이의 심의", "15일"],
  ["과징금", "20일"],
  ["협의요청", "30일"],
  ["변경등록", "30일"],
  ["휴폐업", "30일"],
  ["회원모집", "30일"],
  ["분담금 이의", "30일"],
  ["가산금 이의", "30일"],
  ["승계", "1개월"],
  ["특구 평가 보고", "1개월"],
  ["등급결정 보류", "60일"],
  ["대여금/보조금 반환", "60일"],
  ["결격사유", "3개월"],
  ["회원증 확인자 통보", "6개월"],
  ["호텔 등급 유효기간", "3년"],
  ["카지노검사 유효기간", "3년"],
  ["관광진흥에 관한 기본계획", "5년"],
  ["국제회의산업육성기본계획", "5년"],
  ["권역별관광개발계획", "5년"],
  ["유원시설업 설비 갖춰라", "5년"],
  ["관광개발기본계획", "10년"],
];
const problemArr2 = [
  ["최초 지정 국립공원", "지리산 국립공원"],
  ["최대 국립공원", "다도해해상 국립공원"],
  ["최대 국립공원(해상 제외)", "지리산 국립공원"],
  ["가장 최근 지정 국립공원", "태백산 국립공원"],
  ["최초 지정 해상국립공원", "한려해상 국립공원"],
  ["최초 지정 도립공원", "금오산 도립공원"],
  ["가장 최근 지정 도립공원", "불갑산 도립공원"],
  ["최초 지정 군립공원", "강천산 군립공원"],
  ["가장 최근 지정 군립공원", "병방산 군립공원"],
  ["최초 다목적댐", "섬진강댐"],
  ["최대 규모 댐", "소양강댐"],
  ["최초 지정 국보", "숭례문"],
  ["최초 지정 보물", "흥인지문"],
  ["최초 지정 국가무형문화재", "종묘제례악"],
  ["최초 지정 사적", "경주 포석정지"],
  ["최초 지정 명승", "소금강"],
  ["최초 지정 천연기념물", "측백나무 숲"],
]

const timer = 5000;

const init = (arr) => {
  if(!arr) return;

  const randomNumber = Math.floor(Math.random()*(arr.length));
  const randomIdx = Math.floor(Math.random()*2);

  if(arr.length === problemArr.length){
    console.log(arr[randomNumber][0]);

    setTimeout(()=>{
      console.log(arr[randomNumber][1]);
    }, timer)
  }else if(arr.length === problemArr2.length){
    const anotherIdx = (randomIdx === 1) ? 0 : 1;
    
    console.log(arr[randomNumber][randomIdx]);

    setTimeout(()=>{
      console.log(arr[randomNumber][anotherIdx]);
    }, timer)
  }
}

init(problemArr2);