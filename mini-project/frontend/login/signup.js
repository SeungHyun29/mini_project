// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  const number1 = document.getElementById("PhoneNumber01").value
  const number2 = document.getElementById("PhoneNumber02").value
  const number3 = document.getElementById("PhoneNumber03").value
  const myphone = number1 + number2 + number3

  await axios.post ('http://localhost:3000/tokens/phone',{
    myphone : myphone
}).then((res)=>{
  console.log(res)
})
  console.log('인증 번호 전송')
}

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  console.log('핸드폰 인증 완료')
}

// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.getElementById("SignupName").value
  const email = document.getElementById("SignupEmail").value
  const personal = document.getElementById("SignupPersonal").value
  const prefer = document.getElementById("SignupPrefer").value
  const pwd = document.getElementById("SignupPwd").value
  const number1 = document.getElementById("PhoneNumber01").value
  const number2 = document.getElementById("PhoneNumber02").value
  const number3 = document.getElementById("PhoneNumber03").value
  const myphone = number1 + number2 + number3

  await axios.post ('http://localhost:3000/users', {
    myuser : {
      name: name,
      email: email,
      personal: personal,
      prefer: prefer,
      pwd: pwd,
      myphone: myphone
    }
  }).then((res) => {
    console.log(res)
  })
  console.log('회원 가입 완료')
}