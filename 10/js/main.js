// 아이디가 circle인 요소를 찾아서 저장
const circle = document.querySelector("#circle");

// 태그명이 article 인 요소를 찾아서 저장
const article = circle.querySelectorAll("article")

// article의 전체 개수만큼 반복하면서 mouseenter, moseleave 이벤트 연결
for(let el of article) {
    // article에 마우스 포인트를 올리면
    // 부모인 #circle의 animation-play-state값을 "paused"값으로 변경
    el.addEventListener("mouseenter", e=>{
        circle.style.animationPlayState = "paused";
    });
    
    // article에 마우스 포인트가 떠나가면
    // 부모인 #circle의 animation-play-state값을 "running"값으로 변경
    el.addEventListener("mouseleave",e=>{
        circle.style.animationPlayState = "running";
    });
}