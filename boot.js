function sendMail(e) {
  e.preventDefault(); // prevents page refresh

  var params = {
    name: document.getElementById("name").value,
    message: document.getElementById("message").value,
    email: document.getElementById("email").value
  };

  const serviceID = "service_82rd2vf";
  const templateID = "template_lxaiye8";

  emailjs.send(serviceID, templateID, params).then(res => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Data Transferred Successfully");
  }).catch(err => console.log(err));
}
