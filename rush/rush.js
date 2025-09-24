const home = document.getElementById('home');
const profile = document.getElementById('profile');
const navLinks = document.querySelector('.nav-links');
const profileName = document.querySelector('.profile-name');
const profileRole = document.querySelector('.profile-role');
const profilePhoto = document.querySelector('.profile-photo');
const meta = document.querySelector('.meta');
const workList = document.querySelector('.work-list');
const about = document.querySelector('.about-text');
const contact = document.querySelector('.contact-links');
const navHome = document.querySelector('.nav-home');

const data = {
  person1: {
    name: 'Jirat Lorvitayapan',
    role: 'Student',
    photo: 'keng.jpg',
    about: {
      fullname: 'Jirat Lorvitayapan',
      nickname: 'Keng',
      age: 19,
      major: 'Computer Science',
      talent: 'i can make the code run without leg'
    },
    meta: ['Godot','Canva','Lightroom'],
    work: [
      {title:'Premier Adventure Game',desc:'เกมแนวตะลุยด่านแบบแพลตฟอร์ม 2 มิติผสมแนว Parkour โดยมีอุปสรรคเป็นเหล่ากับดักที่คนเล่นจะต้องหาทางลบเลี่ยงให้ได้โดยมี Goal ที่เรียบง่ายคือการตะลุยไปจนถึงด่านสุดท้ายของเกมส์'},
    ],
    contact: {
      github: 'https://github.com/kengjaang',
      facebook: 'https://www.facebook.com/Kengkung12Keng',
      ig: 'https://www.instagram.com/kj.chiratt/',
      
    }
  },
  person2: {
    name: 'Atthakorn Kowing',
    role: 'Student',
    photo: 'premier.jpg',
    about: {
      fullname: 'Atthakorn Kowing',
      nickname: 'Premier',
      age: 18,
      major: 'Computer Science',
      talent: 'I can use python without snake'
    },
    meta: ['HTML','CSS','CAPCUT'],
    work: [
      {title:'Premier Adventure Game',desc:'เกมแนวตะลุยด่านแบบแพลตฟอร์ม 2 มิติผสมแนว Parkour โดยมีอุปสรรคเป็นเหล่ากับดักที่คนเล่นจะต้องหาทางลบเลี่ยงให้ได้โดยมี Goal ที่เรียบง่ายคือการตะลุยไปจนถึงด่านสุดท้ายของเกมส์'},
    ],
    contact: {
      github: 'https://github.com/Premiersss',
      facebook: 'https://www.facebook.com/atthakorn.koweing',
      ig: 'https://www.instagram.com/premiersssss/',
    }
  }
};

// เวลาเลือก Avatar
document.querySelectorAll('.avatar').forEach(el=>{
  el.addEventListener('click',()=>{
    const info = data[el.dataset.id];
    profileName.textContent = info.name;
    profileRole.textContent = info.role;

    // แสดงรูป Profile
    profilePhoto.innerHTML = `<img src="${info.photo}" alt="${info.name}">`;

      about.innerHTML = `
      <p><strong>name:</strong> ${info.about.fullname}</p>
      <p><strong>nickname:</strong> ${info.about.nickname}</p>
      <p><strong>age:</strong> ${info.about.age} ปี</p>
      <p><strong>major:</strong> ${info.about.major}</p>
      <p><strong>talent:</strong> ${info.about.talent}</p>
    `;

    meta.innerHTML='';
    info.meta.forEach(m=>{
      const span=document.createElement('span');
      span.textContent=m;
      meta.appendChild(span);
    });

    workList.innerHTML='';
    info.work.forEach(w=>{
      const div=document.createElement('div');
      div.className='work-item';
      div.innerHTML=`<h4>${w.title}</h4><p>${w.desc}</p>`;
      workList.appendChild(div);
    });

    contact.innerHTML = `
      <a href="${info.contact.github}" target="_blank">GitHub</a>
      <a href="${info.contact.facebook}" target="_blank">Facebook</a>
      <a href="${info.contact.ig}" target="_blank">Instagram</a>
    `;

    home.style.display='none';
    profile.style.display='block';
    navLinks.classList.remove('hidden');
  });
});

// กลับหน้า Home
navHome.addEventListener('click',(e)=>{
  e.preventDefault();
  profile.style.display='none';
  home.style.display='block';
  navLinks.classList.add('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
});