//assignment 2
console.log("OTP sent successfully")
let seconds=5;
let intervalId=setInterval(()=>{
    seconds--;
    console.log(`allow resend ater ${seconds} secs`);
    if(seconds==0){
console.log("Resend OTP")
clearInterval(intervalId)
    }
},1000);
