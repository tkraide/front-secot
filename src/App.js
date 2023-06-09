import "./styles.css";
import menino from "./img/Menino.png";
import instagram from "./img/instagram.png";
import linkedin from "./img/linkedin.png";
import youtube from "./img/youtube.png";
import ytBordaBranca from "./img/ytBordaBranca.png";
import catho from "./img/catho.png";
import { useState, useEffect } from "react";
import Modal from './Components/Modal/Modal';
import moment from 'moment-timezone';
import 'moment-range';
import { isBetween } from 'moment-range';
import CA from "./img/CA_patabisao.png";
import dcomp from "./img/dcomp.png";
import ufscar_logo from "./img/ufscar_logo.png";
import hamburguer from "./img/Icon_hamburguer.png";

export default function App() {
  const [cards] = useState([
    {
      titulo: 'Ericsson - Metaverso como tecnologia potencial transformadora para os negócios e a sociedade',
      palestrante: 'Karam Takieddine',
      estado: 'Inscreva-se',
      data: '30/06/2023',
      diaSemana: 'seg',
      horario: '12:00',
      horarioInicio: '08:00',
      horarioFim: '23:00',
      local: 'Núcleo ETC - UFSCar Sorocaba',
      descricao: `Ut aliqua et cillum dolore deserunt aute non do occaecat duis non id. Voluptate exercitation nisi nulla eiusmod voluptate aliquip id irure aute ipsum laborum officia reprehenderit. Nulla sit proident esse velit pariatur fugiat ipsum. Reprehenderit anim cillum occaecat veniam eu est qui amet id occaecat laboris cillum ex cillum. Officia nisi velit do voluptate nostrud.`,
      linkLocal: 'https://www.google.com/maps/place/N%C3%BAcleo+ETC+-+UFSCar+Sorocaba/@-23.4884977,-47.4439966,15z/data=!4m2!3m1!1s0x0:0x1cc3c6cc6819b0ea?sa=X&amp;ved=2ahUKEwiuxvaRoKL7AhXRqJUCHXjYB9sQ_BJ6BAhpEAU'
    },
    {
      titulo: 'BUILD - DESENVOLVIMENTO NATIVO X HIBRIDO',
      palestrante: 'Karam Takieddine',
      estado: 'Inscreva-se',
      data: '30/06/2023',
      diaSemana: 'seg',
      horario: '12:00',
      horarioInicio: '08:00',
      horarioFim: '23:00',
      local: 'Núcleo ETC - UFSCar Sorocaba',
      descricao: `Ut aliqua et cillum dolore deserunt aute non do occaecat duis non id. Voluptate exercitation nisi nulla eiusmod voluptate aliquip id irure aute ipsum laborum officia reprehenderit. Nulla sit proident esse velit pariatur fugiat ipsum. Reprehenderit anim cillum occaecat veniam eu est qui amet id occaecat laboris cillum ex cillum. Officia nisi velit do voluptate nostrud.`,
      linkLocal: 'https://www.google.com/maps/place/N%C3%BAcleo+ETC+-+UFSCar+Sorocaba/@-23.4884977,-47.4439966,15z/data=!4m2!3m1!1s0x0:0x1cc3c6cc6819b0ea?sa=X&amp;ved=2ahUKEwiuxvaRoKL7AhXRqJUCHXjYB9sQ_BJ6BAhpEAU'
    },
    {
      titulo: 'BUILD - DESENVOLVIMENTO NATIVO X HIBRIDO',
      palestrante: 'Karam Takieddine',
      estado: 'Inscreva-se',
      data: '30/06/2023',
      diaSemana: 'seg',
      horario: '12:00',
      horarioInicio: '08:00',
      horarioFim: '23:00',
      local: 'YouTube',
      descricao: `Ut aliqua et cillum dolore deserunt aute non do occaecat duis non id. Voluptate exercitation nisi nulla eiusmod voluptate aliquip id irure aute ipsum laborum officia reprehenderit. Nulla sit proident esse velit pariatur fugiat ipsum. Reprehenderit anim cillum occaecat veniam eu est qui amet id occaecat laboris cillum ex cillum. Officia nisi velit do voluptate nostrud.`,
      linkLocal: 'https://www.youtube.com/channel/UCmbNxHgz6oJ8s8t9iwHV9Fw'
    },
    {
      titulo: 'BUILD - DESENVOLVIMENTO NATIVO X HIBRIDO',
      palestrante: 'Karam Takieddine',
      estado: 'Inscreva-se',
      data: '30/06/2023',
      diaSemana: 'seg',
      horario: '12:00',
      horarioInicio: '08:00',
      horarioFim: '23:00',
      local: 'YouTube',
      descricao: `Ut aliqua et cillum dolore deserunt aute non do occaecat duis non id. Voluptate exercitation nisi nulla eiusmod voluptate aliquip id irure aute ipsum laborum officia reprehenderit. Nulla sit proident esse velit pariatur fugiat ipsum. Reprehenderit anim cillum occaecat veniam eu est qui amet id occaecat laboris cillum ex cillum. Officia nisi velit do voluptate nostrud.`,
      linkLocal: 'https://www.youtube.com/channel/UCmbNxHgz6oJ8s8t9iwHV9Fw'
    },


    {
      titulo: 'Ericsson - Metaverso como tecnologia potencial transformadora para os negócios e a sociedade',
      palestrante: 'Karam Takieddine',
      estado: 'Inscreva-se',
      data: '01/07/2023',
      diaSemana: 'seg',
      horario: '12:00',
      horarioInicio: '08:00',
      horarioFim: '23:00',
      local: 'Núcleo ETC - UFSCar Sorocaba',
      descricao: `Ut aliqua et cillum dolore deserunt aute non do occaecat duis non id. Voluptate exercitation nisi nulla eiusmod voluptate aliquip id irure aute ipsum laborum officia reprehenderit. Nulla sit proident esse velit pariatur fugiat ipsum. Reprehenderit anim cillum occaecat veniam eu est qui amet id occaecat laboris cillum ex cillum. Officia nisi velit do voluptate nostrud.`,
      linkLocal: 'https://www.google.com/maps/place/N%C3%BAcleo+ETC+-+UFSCar+Sorocaba/@-23.4884977,-47.4439966,15z/data=!4m2!3m1!1s0x0:0x1cc3c6cc6819b0ea?sa=X&amp;ved=2ahUKEwiuxvaRoKL7AhXRqJUCHXjYB9sQ_BJ6BAhpEAU'
    },
    {
      titulo: 'BUILD - DESENVOLVIMENTO NATIVO X HIBRIDO',
      palestrante: 'Karam Takieddine',
      estado: 'Inscreva-se',
      data: '01/07/2023',
      diaSemana: 'seg',
      horario: '12:00',
      horarioInicio: '08:00',
      horarioFim: '23:00',
      local: 'Núcleo ETC - UFSCar Sorocaba',
      descricao: `Ut aliqua et cillum dolore deserunt aute non do occaecat duis non id. Voluptate exercitation nisi nulla eiusmod voluptate aliquip id irure aute ipsum laborum officia reprehenderit. Nulla sit proident esse velit pariatur fugiat ipsum. Reprehenderit anim cillum occaecat veniam eu est qui amet id occaecat laboris cillum ex cillum. Officia nisi velit do voluptate nostrud.`,
      linkLocal: 'https://www.google.com/maps/place/N%C3%BAcleo+ETC+-+UFSCar+Sorocaba/@-23.4884977,-47.4439966,15z/data=!4m2!3m1!1s0x0:0x1cc3c6cc6819b0ea?sa=X&amp;ved=2ahUKEwiuxvaRoKL7AhXRqJUCHXjYB9sQ_BJ6BAhpEAU'
    },
    {
      titulo: 'BUILD - DESENVOLVIMENTO NATIVO X HIBRIDO',
      palestrante: 'Karam Takieddine',
      estado: 'Inscreva-se',
      data: '01/07/2023',
      diaSemana: 'seg',
      horario: '12:00',
      horarioInicio: '08:00',
      horarioFim: '23:00',
      local: 'YouTube',
      descricao: `Ut aliqua et cillum dolore deserunt aute non do occaecat duis non id. Voluptate exercitation nisi nulla eiusmod voluptate aliquip id irure aute ipsum laborum officia reprehenderit. Nulla sit proident esse velit pariatur fugiat ipsum. Reprehenderit anim cillum occaecat veniam eu est qui amet id occaecat laboris cillum ex cillum. Officia nisi velit do voluptate nostrud.`,
      linkLocal: 'https://www.youtube.com/channel/UCmbNxHgz6oJ8s8t9iwHV9Fw'
    },
    {
      titulo: 'BUILD - DESENVOLVIMENTO NATIVO X HIBRIDO',
      palestrante: 'Karam Takieddine',
      estado: 'Inscreva-se',
      data: '01/07/2023',
      diaSemana: 'seg',
      horario: '12:00',
      horarioInicio: '08:00',
      horarioFim: '23:00',
      local: 'YouTube',
      descricao: `Ut aliqua et cillum dolore deserunt aute non do occaecat duis non id. Voluptate exercitation nisi nulla eiusmod voluptate aliquip id irure aute ipsum laborum officia reprehenderit. Nulla sit proident esse velit pariatur fugiat ipsum. Reprehenderit anim cillum occaecat veniam eu est qui amet id occaecat laboris cillum ex cillum. Officia nisi velit do voluptate nostrud.`,
      linkLocal: 'https://www.youtube.com/channel/UCmbNxHgz6oJ8s8t9iwHV9Fw'
    }
  ])

  const targetTimezone = 'America/Sao_Paulo';

  const [currentDateTime, setCurrentDateTime] = useState({ date: '', time: '' });
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const fetchCurrentDateTime = () => {
      const currentDateTime = moment().tz(targetTimezone);
      const formattedDate = currentDateTime.format('DD/MM/YYYY');
      const formattedTime = currentDateTime.format('HH:mm');
      setCurrentDateTime({ date: formattedDate, time: formattedTime });

      const filteredCards = cards.filter(card => card.data === formattedDate);
      setVisibleCards(filteredCards);

      const isButtonVisible = filteredCards.some(card => {
        const horarioInicio = moment().tz(targetTimezone).hour(card.horarioInicio).startOf('hour');
        const horarioFim = moment().tz(targetTimezone).hour(card.horarioFim).endOf('hour');
        return currentDateTime >= horarioInicio && currentDateTime <= horarioFim;
      });

      setIsButtonVisible(isButtonVisible);
    };

    fetchCurrentDateTime(); // Chamada inicial

    const intervalId = setInterval(fetchCurrentDateTime, 1000); // Atualizar a cada 1 segundo

    // Limpar o intervalo quando o componente for desmontado
    return () => {
      clearInterval(intervalId);
    };
  }, [cards]);

  return (
    <div className="App">
      <div className="header-container">
        <header className="header">
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet" />
          <div className="header-icon">
            <svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5695 0.0981598C17.3379 0.396536 16.3412 1.41863 16.0809 2.65658C15.9349 3.34856 15.9412 21.0861 16.0809 21.7019C16.3856 22.9843 17.4013 23.9937 18.6329 24.2476C19.1154 24.3492 20.055 24.2921 20.4295 24.146C21.5469 23.6953 22.3595 22.7748 22.5817 21.7209C22.6832 21.2448 22.6832 3.06288 22.5817 2.58675C22.461 1.99634 22.1563 1.46307 21.6675 0.980593C20.8232 0.142599 19.7058 -0.181171 18.5695 0.0981598Z" fill="#AF0000" />
              <path d="M23.2927 13.3029C23.2863 19.5371 23.2673 22.5653 23.2165 22.8256C23.0007 24.0318 22.0357 25.0666 20.7851 25.4221C20.2454 25.5808 19.2741 25.5237 18.7345 25.3078C18.0806 25.0412 17.5093 24.5714 17.0966 23.962C16.8808 23.6445 16.9316 23.854 17.2172 24.4381C17.6045 25.2507 18.5441 25.9681 19.4582 26.1522C19.9407 26.2537 20.8803 26.1966 21.2548 26.0506C22.3912 25.5935 23.2102 24.6603 23.4133 23.581C23.5149 23.0287 23.4768 4.53573 23.3689 4.31354C23.3117 4.19291 23.2927 6.19267 23.2927 13.3029Z" fill="#AF0000" />
              <path d="M27.4446 6.33233C26.4859 6.64975 25.8257 7.29729 25.5083 8.21782C25.3432 8.7003 25.3369 9.49385 25.4956 9.97634C25.7495 10.7382 26.1177 11.1825 26.943 11.7412C28.4857 12.776 29.8379 14.179 30.8029 15.7344C31.1647 16.3248 31.4949 16.9469 31.4441 16.9469C31.4314 16.9469 31.2727 16.7311 31.0949 16.4708C30.2061 15.1567 28.9237 13.8806 27.5461 12.9538C27.0192 12.5919 26.6574 12.2618 26.4352 11.9317C26.2447 11.646 26.3145 11.9761 26.5367 12.3887C26.797 12.8776 27.1271 13.214 27.762 13.6394C29.311 14.6805 30.6823 16.0962 31.6218 17.6326C31.9964 18.242 32.1932 18.6864 32.3329 19.2387C33.0629 22.0574 32.8915 24.946 31.825 27.6123C30.2696 31.5229 26.8605 34.5511 22.7785 35.6431C21.4897 35.9859 20.7597 36.0748 19.2551 36.0811C17.6553 36.0811 16.8363 35.9732 15.4905 35.5796C13.2748 34.9384 11.5036 33.9036 9.83399 32.2784C8.71032 31.1865 7.84693 29.9739 7.1613 28.5328C6.29156 26.7172 5.89161 24.9333 5.89161 22.9145C5.89161 20.9147 6.31696 19.0038 7.15495 17.2326C8.22149 14.9916 9.78955 13.1696 11.8718 11.7476C12.6146 11.246 12.9892 10.7826 13.2304 10.0906C13.3891 9.61448 13.3891 8.71935 13.2241 8.2813C12.5829 6.56723 10.7101 5.80541 9.12932 6.59897C8.22784 7.05606 6.64073 8.33209 5.44722 9.55734C4.23467 10.808 3.38398 11.9317 2.52694 13.4235C0.558923 16.839 -0.336207 21.1052 0.114532 24.8825C0.311334 26.5077 0.590665 27.7774 1.03506 29.0724C1.33978 29.9485 2.29839 32.1832 2.83801 33.2624C4.14579 35.8907 6.06937 38.2078 8.39925 39.96C13.916 44.1119 21.2485 45.0197 27.6033 42.328C33.3423 39.8965 37.5195 34.9955 38.9543 29.009C39.4558 26.933 39.6018 24.7301 39.3796 22.6288C39.2844 21.7336 39.1193 20.6988 39.0622 20.6417C39.0114 20.5846 39.0241 20.7623 39.1384 21.4924C39.2907 22.5018 39.2907 25.2062 39.1384 26.2474C38.9035 27.7964 38.6876 28.7233 38.2623 29.9866C36.2372 35.9668 31.3869 40.5885 25.2544 42.3788C23.4323 42.912 21.8389 43.1342 19.8582 43.1342C18.4171 43.1342 17.6807 43.0707 16.4046 42.8486C11.0529 41.8899 6.37409 38.7411 3.49825 34.1512C3.14274 33.5862 2.57773 32.5641 2.62217 32.5641C2.62851 32.5641 2.88245 32.9259 3.18083 33.3703C6.03128 37.6301 10.3546 40.5504 15.319 41.5471C19.236 42.3407 23.1594 41.9534 26.778 40.4234C32.9804 37.7952 37.3799 32.234 38.421 25.676C38.7384 23.689 38.7194 21.2639 38.3702 19.3212C37.8116 16.2169 36.3514 13.0744 34.339 10.6302C33.2788 9.34784 31.8377 8.00832 30.5236 7.10049C29.4888 6.38312 29.0634 6.21806 28.2699 6.22441C27.9842 6.23076 27.6223 6.2752 27.4446 6.33233Z" fill="#AF0000" />
              <path d="M13.9732 10.6747C13.8906 11.2524 13.7002 11.7475 13.4145 12.1348C13.186 12.4459 13.0907 12.5221 11.9226 13.3791C9.08486 15.455 7.20572 18.5785 6.65341 22.1526C6.482 23.2382 6.482 24.9967 6.64706 26.076C6.71689 26.5077 6.78673 26.8822 6.81212 26.9013C6.83751 26.9267 6.84386 26.7997 6.81847 26.6283C6.79942 26.4505 6.76133 25.8538 6.73594 25.2951C6.65341 23.1049 7.06606 21.0734 7.98023 19.1371C9.04677 16.8961 10.6148 15.0741 12.6971 13.6521C13.7637 12.9347 14.1763 12.1919 14.17 11.0429C14.1636 10.2303 14.062 10.0398 13.9732 10.6747Z" fill="#AF0000" />
              <path d="M38.9797 20.4385C38.9797 20.5274 38.9924 20.5592 39.0114 20.5147C39.0241 20.4766 39.0241 20.4005 39.0114 20.356C38.9924 20.3179 38.9797 20.3497 38.9797 20.4385Z" fill="#AF0000" />
              <path d="M6.85657 27.1044C6.85657 27.1933 6.86926 27.2251 6.88831 27.1806C6.90101 27.1425 6.90101 27.0663 6.88831 27.0219C6.86926 26.9838 6.85657 27.0156 6.85657 27.1044Z" fill="#AF0000" />
            </svg>
            <h2><span id="red-S">S</span>eCoT</h2>
          </div>
          <div className="header-menu">
            <ul className="header-menu-list">
              <li id="inicio">Início</li>
              <li id="programacao">Programação</li>
              <li id="sobre">Sobre</li>
              <li id="patrocinadores">Patrocinadores</li>
            </ul>
          </div>
          <div className="header-login">
            <a href="./" className="login-link">Log In</a>
            <a href="./" className="create-acc">CRIAR CONTA</a>
          </div>
        </header>
      </div>

      <section className="inicio">
        <div className="inicio-texto">
          <h1>Boas-Vindas a SeCoT</h1>
          <h2>O maior evento de tecnologia da região</h2>
          <h3>Evento gratuito e online com palestras, debates e aprendizados sobre as diversas áreas da computação</h3>
          <button><img src={ytBordaBranca} alt="Youtube" />Inscreva-se</button>
        </div>
        <div className="inicio-imagens">
          <div className="menino"><img src={menino} alt="Menino" /></div>
          <div className="redes-inicio">
            <div id="linha-vertical">
              <div className="redesImg"><a href="https://www.youtube.com/channel/UCmbNxHgz6oJ8s8t9iwHV9Fw" target="_blank"><img src={youtube} alt="Youtube" /></a></div>
              <div className="redesImg"><a href="https://www.instagram.com/secot.ufscar/" target="_blank"><img src={instagram} alt="Instagram" /></a></div>
              <div className="redesImg"><a href="https://www.linkedin.com/company/secot-ufscar" target="_blank"><img src={linkedin} alt="Linkedin" /></a></div>
            </div>
          </div>
        </div>
      </section>
      <section className="inicioMobile">
        <img className="imgMenino" src={menino} alt="Menino" />
        <div className="inicio-textoMobile">
          <h1>Boas-Vindas a SeCoT</h1>
          <h2>O maior evento de tecnologia da região</h2>
          <h3>Evento gratuito e online com palestras, debates e aprendizados sobre as diversas áreas da computação</h3>
          <button><img src={ytBordaBranca} alt="Youtube" />Inscreva-se</button>
        </div>
      </section>
      <section className="palestras">
        <div className="container">
          <h2>Hoje teremos!</h2>
          <div className="cards">
          {
            visibleCards.map((card, i) => {
              const horarioInicio = moment().tz(targetTimezone).hour(card.horarioInicio).startOf('hour');
              const horarioFim = moment().tz(targetTimezone).hour(card.horarioFim).endOf('hour');
              const isButtonVisible = moment(currentDateTime.date).isBetween(horarioInicio, horarioFim);

              return (
                <div key={i} className="card">
                  <h3>{card.titulo}</h3>
                  <Modal
                    titulo={card.titulo}
                    palestrante={card.palestrante}
                    data={card.data}
                    horario={card.horario}
                    descricao={card.descricao}
                    estado={card.estado}
                    visiBotao={isButtonVisible}
                    diaSemana={card.diaSemana}
                  />
                  <span className="horario">{card.diaSemana}, {card.data} às {card.horario}</span>
                  <span className="local"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>&nbsp;<a href={card.linkLocal} target="_blank">{card.local}</a></span>
                </div>
              );
            })
          }
          </div>
        </div>
      </section>
      <section className="quem-somos-container">
        <div className="secot-quem-somos">
          <div className="img-secot">
          </div>
          <div className="conteudo-quem-somos">
            <h2>Você conhece a SeCoT?</h2>
            <p>A 13ª edição da Semana da Computação e Tecnologia (SeCoT XIII) é um evento organizado pelos alunos de Ciência da Computação da UFSCar Sorocaba. O objetivo da SeCoT é proporcionar um evento gratuito e online de apresentação, debate e aprendizado sobre as diversas áreas da computação, contando com palestras de variados assuntos que podem atender tanto estudantes quanto profissionais do mercado.</p>

            <h3>Em 2021, a SeCoT ocorrerá entre os dias 23 a 26 de agosto.</h3>

            <p>A partir do dia 15 de julho de 2021, teremos a SeCoT Carreiras, uma série de encontros com empresas para discutir aspectos bastante importantes da vida profissional. Assim, será possível entender as diferentes carreiras que cada instituição tem e, também, aprender sobre temas como LinkedIn, dinâmica, inovação e entrevista.</p>
          </div>
        </div>
      </section>
      <section className="patrocinadores">
        <div className="containerPatrocinadores">
          <h2>Patrocinadores</h2>
          <div className="grid-patrocinadores">
            <a href="#" target="_blank"><img src={catho} className="patrocinador" alt="Patrocinador"></img></a>
            <a href="#" target="_blank"><img src={catho} className="patrocinador" alt="Patrocinador"></img></a>
            <a href="#" target="_blank"><img src={catho} className="patrocinador" alt="Patrocinador"></img></a>
            <a href="#" target="_blank"><img src={catho} className="patrocinador" alt="Patrocinador"></img></a>

            <a href="#" target="_blank"><img src={catho} className="patrocinador" alt="Patrocinador"></img></a>
            <a href="#" target="_blank"><img src={catho} className="patrocinador" alt="Patrocinador"></img></a>
            <a href="#" target="_blank"><img src={catho} className="patrocinador" alt="Patrocinador"></img></a>
            <a href="#" target="_blank"><img src={catho} className="patrocinador" alt="Patrocinador"></img></a>
          </div>
        </div>
      </section>
      <footer className="footer-bg">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="grid-1">
              <div className="grid-1-title-secot">
                <svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5695 0.0980377C17.3379 0.396414 16.3412 1.41851 16.0809 2.65646C15.9349 3.34844 15.9412 21.086 16.0809 21.7018C16.3856 22.9842 17.4013 23.9936 18.6329 24.2475C19.1154 24.3491 20.055 24.2919 20.4295 24.1459C21.5469 23.6952 22.3595 22.7747 22.5817 21.7208C22.6832 21.2447 22.6832 3.06276 22.5817 2.58663C22.461 1.99622 22.1563 1.46295 21.6675 0.980471C20.8232 0.142477 19.7058 -0.181293 18.5695 0.0980377Z" fill="white" />
                  <path d="M23.2927 13.3028C23.2863 19.537 23.2673 22.5652 23.2165 22.8255C23.0007 24.0317 22.0357 25.0665 20.7851 25.422C20.2454 25.5807 19.2741 25.5235 18.7345 25.3077C18.0806 25.0411 17.5093 24.5713 17.0966 23.9618C16.8808 23.6444 16.9316 23.8539 17.2172 24.438C17.6045 25.2506 18.5441 25.9679 19.4582 26.152C19.9407 26.2536 20.8803 26.1965 21.2548 26.0505C22.3912 25.5934 23.2102 24.6602 23.4133 23.5809C23.5149 23.0286 23.4768 4.53561 23.3689 4.31341C23.3117 4.19279 23.2927 6.19255 23.2927 13.3028Z" fill="white" />
                  <path d="M27.4446 6.33227C26.4859 6.64969 25.8257 7.29723 25.5083 8.21776C25.3432 8.70024 25.3369 9.49379 25.4956 9.97628C25.7495 10.7381 26.1177 11.1825 26.943 11.7411C28.4857 12.7759 29.8379 14.1789 30.8029 15.7343C31.1647 16.3247 31.4949 16.9469 31.4441 16.9469C31.4314 16.9469 31.2727 16.731 31.0949 16.4707C30.2061 15.1566 28.9237 13.8806 27.5461 12.9537C27.0192 12.5918 26.6574 12.2617 26.4352 11.9316C26.2447 11.6459 26.3145 11.976 26.5367 12.3887C26.797 12.8775 27.1271 13.214 27.762 13.6393C29.311 14.6805 30.6823 16.0962 31.6218 17.6325C31.9964 18.2419 32.1932 18.6863 32.3329 19.2386C33.0629 22.0574 32.8915 24.9459 31.825 27.6122C30.2696 31.5229 26.8605 34.5511 22.7785 35.643C21.4897 35.9858 20.7597 36.0747 19.2551 36.0811C17.6553 36.0811 16.8363 35.9731 15.4905 35.5795C13.2748 34.9383 11.5036 33.9035 9.83399 32.2783C8.71032 31.1864 7.84693 29.9739 7.1613 28.5328C6.29156 26.7171 5.89161 24.9332 5.89161 22.9144C5.89161 20.9146 6.31696 19.0038 7.15495 17.2325C8.22149 14.9915 9.78955 13.1695 11.8718 11.7475C12.6146 11.246 12.9892 10.7825 13.2304 10.0905C13.3891 9.61441 13.3891 8.71928 13.2241 8.28124C12.5829 6.56717 10.7101 5.80535 9.12932 6.59891C8.22784 7.056 6.64073 8.33203 5.44722 9.55728C4.23467 10.8079 3.38398 11.9316 2.52694 13.4235C0.558923 16.8389 -0.336207 21.1051 0.114532 24.8824C0.311334 26.5076 0.590665 27.7773 1.03506 29.0724C1.33978 29.9485 2.29839 32.1831 2.83801 33.2623C4.14579 35.8906 6.06937 38.2078 8.39925 39.96C13.916 44.1118 21.2485 45.0197 27.6033 42.3279C33.3423 39.8965 37.5195 34.9955 38.9543 29.0089C39.4558 26.933 39.6018 24.73 39.3796 22.6287C39.2844 21.7336 39.1193 20.6988 39.0622 20.6417C39.0114 20.5845 39.0241 20.7623 39.1384 21.4923C39.2907 22.5017 39.2907 25.2062 39.1384 26.2473C38.9035 27.7963 38.6876 28.7232 38.2623 29.9866C36.2372 35.9668 31.3869 40.5884 25.2544 42.3787C23.4323 42.912 21.8389 43.1342 19.8582 43.1342C18.4171 43.1342 17.6807 43.0707 16.4046 42.8485C11.0529 41.8899 6.37409 38.7411 3.49825 34.1511C3.14274 33.5861 2.57773 32.564 2.62217 32.564C2.62851 32.564 2.88245 32.9259 3.18083 33.3703C6.03128 37.6301 10.3546 40.5504 15.319 41.5471C19.236 42.3406 23.1594 41.9534 26.778 40.4234C32.9804 37.7951 37.3799 32.2339 38.421 25.676C38.7384 23.6889 38.7194 21.2638 38.3702 19.3212C37.8116 16.2168 36.3514 13.0743 34.339 10.6302C33.2788 9.34778 31.8377 8.00826 30.5236 7.10043C29.4888 6.38306 29.0634 6.218 28.2699 6.22435C27.9842 6.2307 27.6223 6.27514 27.4446 6.33227Z" fill="white" />
                  <path d="M13.9732 10.6747C13.8906 11.2524 13.7002 11.7476 13.4145 12.1348C13.186 12.4459 13.0907 12.5221 11.9226 13.3791C9.08486 15.4551 7.20572 18.5785 6.65341 22.1527C6.482 23.2383 6.482 24.9968 6.64706 26.076C6.71689 26.5077 6.78673 26.8823 6.81212 26.9013C6.83751 26.9267 6.84386 26.7997 6.81847 26.6283C6.79942 26.4506 6.76133 25.8538 6.73594 25.2951C6.65341 23.1049 7.06606 21.0734 7.98023 19.1372C9.04677 16.8962 10.6148 15.0742 12.6971 13.6521C13.7637 12.9347 14.1763 12.192 14.17 11.0429C14.1636 10.2303 14.062 10.0398 13.9732 10.6747Z" fill="white" />
                  <path d="M38.9797 20.4385C38.9797 20.5274 38.9924 20.5592 39.0114 20.5147C39.0241 20.4766 39.0241 20.4005 39.0114 20.356C38.9924 20.3179 38.9797 20.3497 38.9797 20.4385Z" fill="white" />
                  <path d="M6.85657 27.1043C6.85657 27.1932 6.86926 27.2249 6.88831 27.1805C6.90101 27.1424 6.90101 27.0662 6.88831 27.0218C6.86926 26.9837 6.85657 27.0154 6.85657 27.1043Z" fill="white" />
                </svg>
                <h2><span id="white-S">S</span>eCoT</h2>
              </div>
              <p>&copy; {new Date().getUTCFullYear()} SeCoT. Todos os direitos reservados</p>
            </div>
            <div className="grid-2">
              <h3>Realização</h3>
              <div className="grid-2-imagens">
                <img src={CA} alt="CA" />
                <img src={dcomp} alt="dcomp" />
                <img src={ufscar_logo} alt="ufscar logo" />
              </div>
            </div>
            <div className="grid-3">
              <h3>Redes Sociais</h3>
              <div className="grid-3-imagens">
                <a href="https://www.linkedin.com/company/secot-ufscar" target="_blank">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666657 3.73009C0.666657 2.91764 0.9894 2.13847 1.56389 1.56398C2.13837 0.989495 2.91754 0.666752 3.72999 0.666752H34.2667C34.6693 0.666095 35.0681 0.744857 35.4402 0.89853C35.8124 1.0522 36.1506 1.27777 36.4354 1.56231C36.7203 1.84686 36.9462 2.18479 37.1003 2.55677C37.2543 2.92875 37.3335 3.32746 37.3333 3.73009V34.2668C37.3338 34.6695 37.2548 35.0683 37.1009 35.4404C36.9471 35.8126 36.7214 36.1508 36.4367 36.4356C36.152 36.7204 35.814 36.9463 35.4419 37.1004C35.0698 37.2545 34.671 37.3336 34.2683 37.3334H3.72999C3.32757 37.3334 2.92909 37.2541 2.55732 37.1001C2.18555 36.946 1.84778 36.7202 1.5633 36.4356C1.27882 36.151 1.05321 35.8131 0.899361 35.4412C0.745512 35.0694 0.666438 34.6708 0.666657 34.2684V3.73009ZM15.18 14.6468H20.145V17.1401C20.8617 15.7068 22.695 14.4168 25.45 14.4168C30.7317 14.4168 31.9833 17.2718 31.9833 22.5101V32.2134H26.6383V23.7034C26.6383 20.7201 25.9217 19.0368 24.1017 19.0368C21.5767 19.0368 20.5267 20.8518 20.5267 23.7034V32.2134H15.18V14.6468ZM6.01332 31.9851H11.36V14.4168H6.01332V31.9834V31.9851ZM12.125 8.68675C12.1351 9.14454 12.0536 9.59973 11.8854 10.0256C11.7172 10.4515 11.4656 10.8395 11.1454 11.1668C10.8252 11.4941 10.4428 11.7542 10.0207 11.9318C9.59868 12.1093 9.14539 12.2008 8.68749 12.2008C8.22959 12.2008 7.77631 12.1093 7.35423 11.9318C6.93216 11.7542 6.5498 11.4941 6.2296 11.1668C5.90941 10.8395 5.65781 10.4515 5.48959 10.0256C5.32137 9.59973 5.23991 9.14454 5.24999 8.68675C5.26978 7.78818 5.64063 6.93307 6.28313 6.30456C6.92563 5.67605 7.7887 5.32411 8.68749 5.32411C9.58628 5.32411 10.4493 5.67605 11.0918 6.30456C11.7343 6.93307 12.1052 7.78818 12.125 8.68675Z" fill="white" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/secot.ufscar/" target="_blank">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 10.7929C13.1328 10.7929 10.793 13.1328 10.793 15.9999C10.793 18.8671 13.1328 21.207 16 21.207C18.8672 21.207 21.207 18.8671 21.207 15.9999C21.207 13.1328 18.8672 10.7929 16 10.7929ZM31.6172 15.9999C31.6172 13.8437 31.6367 11.707 31.5156 9.55463C31.3945 7.05463 30.8242 4.83588 28.9961 3.00775C27.1641 1.17572 24.9492 0.609316 22.4492 0.488222C20.293 0.367129 18.1562 0.38666 16.0039 0.38666C13.8477 0.38666 11.7109 0.367129 9.5586 0.488222C7.0586 0.609316 4.83985 1.17963 3.01172 3.00775C1.17969 4.83978 0.613283 7.05463 0.49219 9.55463C0.371096 11.7109 0.390627 13.8476 0.390627 15.9999C0.390627 18.1523 0.371096 20.2929 0.49219 22.4453C0.613283 24.9453 1.1836 27.164 3.01172 28.9921C4.84375 30.8242 7.0586 31.3906 9.5586 31.5117C11.7148 31.6328 13.8516 31.6132 16.0039 31.6132C18.1602 31.6132 20.2969 31.6328 22.4492 31.5117C24.9492 31.3906 27.168 30.8203 28.9961 28.9921C30.8281 27.1601 31.3945 24.9453 31.5156 22.4453C31.6406 20.2929 31.6172 18.1562 31.6172 15.9999ZM16 24.0117C11.5664 24.0117 7.98828 20.4335 7.98828 15.9999C7.98828 11.5663 11.5664 7.98822 16 7.98822C20.4336 7.98822 24.0117 11.5663 24.0117 15.9999C24.0117 20.4335 20.4336 24.0117 16 24.0117ZM24.3398 9.53119C23.3047 9.53119 22.4688 8.69525 22.4688 7.6601C22.4688 6.62494 23.3047 5.789 24.3398 5.789C25.375 5.789 26.2109 6.62494 26.2109 7.6601C26.2113 7.9059 26.1631 8.14935 26.0691 8.3765C25.9752 8.60365 25.8374 8.81004 25.6636 8.98385C25.4898 9.15766 25.2834 9.29547 25.0562 9.38939C24.8291 9.48331 24.5856 9.5315 24.3398 9.53119Z" fill="white" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCmbNxHgz6oJ8s8t9iwHV9Fw" target="_blank">
                  <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.7695 4.56641C34.5703 3.82437 34.1797 3.14767 33.6367 2.60405C33.0938 2.06042 32.4176 1.66893 31.6758 1.46875C28.9453 0.734375 18 0.734375 18 0.734375C18 0.734375 7.05469 0.734375 4.32422 1.46484C3.58211 1.66437 2.90556 2.05565 2.36252 2.59937C1.81948 3.1431 1.42906 3.82014 1.23047 4.5625C0.5 7.29688 0.5 13 0.5 13C0.5 13 0.5 18.7031 1.23047 21.4336C1.63281 22.9414 2.82031 24.1289 4.32422 24.5312C7.05469 25.2656 18 25.2656 18 25.2656C18 25.2656 28.9453 25.2656 31.6758 24.5312C33.1836 24.1289 34.3672 22.9414 34.7695 21.4336C35.5 18.7031 35.5 13 35.5 13C35.5 13 35.5 7.29688 34.7695 4.56641ZM14.5234 18.2344V7.76562L23.5859 12.9609L14.5234 18.2344Z" fill="white" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
