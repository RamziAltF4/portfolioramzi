import React from "react";
import styled from "styled-components";
import { FaGithub, FaTelegram, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SocialButtons = () => {
  return (
    <StyledWrapper>
      <div className="main">

        <a 
  href="https://github.com/usernamekamu" 
  target="_blank" 
  rel="noreferrer"
  className="card github"
>
  <FaGithub size={28} />
</a>

        <a 
  href="https://t.me/ramzialthf" 
  target="_blank" 
  rel="noreferrer"
  className="card telegram"
   onClick={() => toast.success("Membuka Telegram...")}
>
  <FaTelegram size={28} />
</a>

        <a 
  href="https://instagram.com/ramzialthf_/" 
  target="_blank" 
  rel="noreferrer"
  className="card instagram"
   onClick={() => toast.success("Membuka Instagram...")}
>
  <FaInstagram size={28} />
</a>

         <a 
  href="https://www.linkedin.com/in/ramzi-althaf-putra-hermawan-71677b311" 
  target="_blank" 
  rel="noreferrer"
  className="card linkedin"
   onClick={() => toast.success("Membuka LinkedIn...")}
>
  <FaLinkedin size={28} />
</a>

  <button 
  className="card discord"
  onClick={() => {
    const text = "1ce_blu3";

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => toast.success("Username Discord copied!"))
        .catch(() => toast.error("Gagal copy ❌"));
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      toast.success("Username Discord copied!");
    }
  }}
>
  <FaDiscord size={28} />
</button>


      </div>
    <ToastContainer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`

display:flex;
justify-content:center;
align-items:center;
width:100%;
margin-top:40px;

.main{
width:220px;
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
gap:10px;
}

.card{
width:60px;
height:60px;
background:white;
border-radius:12px;
display:flex;
justify-content:center;
align-items:center;
transition:0.3s;
cursor:pointer;
box-shadow:0 4px 10px rgba(0,0,0,0.1);
}

.card:hover{
transform:translateY(-6px) scale(1.05);
}

/* Hover Colors */

.github:hover{
background:black;
color:white;
}

.telegram:hover{
background:#29b6f6;
color:white;
}

.gmail:hover{
background:#ea4335;
color:white;
}

.instagram:hover{
background:#cc39a4;
color:white;
}

.linkedin:hover{
background:#0077b5;
color:white;
}

.discord:hover{
background:#5865f2;
color:white;
}

`;

export default SocialButtons;