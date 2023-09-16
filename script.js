function kirimEmail(){
    
    var params = {
        nama: document.getElementById("nama").value,
        email: document.getElementById("email").value,
        pesan: document.getElementById("pesan").value,  
    };
    
    const serviceID = "service_a64o6a8";
    const templateID = "template_f8kildc";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("nama").value = "";
            document.getElementById("email").value = "";
            document.getElementById("pesan").value = "";
            console.log(res);
            alert("your message sent successfully");
        })
        .catch((err) => console.log(err));
}