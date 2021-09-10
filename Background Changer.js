const div = document.querySelector('div');
const code = document.querySelector('.code');
const button = document.querySelector('button');

button.addEventListener('click', function change () {
  function MakeHex () {
    const collection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    let string = '#';

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random () * collection.length);
      string += collection[randomIndex];
    } // for 반복문 끝

    return string;
  } // 헥스 색상 코드 생성 함수 MakeHex() 끝

  const color = MakeHex();
  // MakeHex() 함수를 호출한 후 그 값을 color라는 변수에 할당

  code.textContent = `HEX COLOR: ${color}`;
  div.style.backgroundColor = `${color}`;
});
