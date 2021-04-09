 $(window).on('load', function() {
        $('#myModal').modal('show');
    });
	
var arr = ["Use a seperate and strong password for your email address - If a hacker gets into your email, they could: reset your other account passwords or access information you have saved about yourself or your business"
, "Save your passwords in your browser. Saving your password in your browser means letting your web browser (such as Chrome, Safari or Edge) remember your password for you. This can help make sure you do not lose or forget your passwords and protect you against some cyber crime, such as fake websites"
, "Turn on two-factor authentication (2FA). Two-factor authentication (2FA) helps to stop hackers from getting into your accounts, even if they have your password."
, "Update your devices. Out-of-date software, apps, and operating systems contain weaknesses. This makes them easier to hack. Companies fix the weaknesses by releasing updates. When you update your devices and software, this helps to keep hackers out."
, "Back up your data. Backing up means creating a copy of your information and saving it to another device or to cloud storage (online). Backing up regularly means you will always have a recent version of your information saved. This will help you recover quicker if your data is lost or stolen."];

document.getElementById("result").innerHTML = arr[Math.floor(Math.random() * 5)];