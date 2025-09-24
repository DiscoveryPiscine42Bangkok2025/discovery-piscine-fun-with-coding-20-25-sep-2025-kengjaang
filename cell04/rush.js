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
    role: 'Game Designer',
    photo: 'eren.jpg',
    about: 'Name : Jirat Lorvitayapan Nickname : Keng',
    meta: ['UI/UX','Illustrator','Photoshop','Figma'],
    work: [
      {title:'งาน 1',desc:'รายละเอียดงาน 1'},
      {title:'งาน 2',desc:'รายละเอียดงาน 2'},
      {title:'งาน 3',desc:'รายละเอียดงาน 3'},
    ],
    contact: {
      github: 'https://github.com/kengjaang',
      facebook: 'https://www.facebook.com/Kengkung12Keng',
      ig: 'https://www.instagram.com/kj.chiratt/',
      
    }
  },
  person2: {
    name: 'Atthakorn Kowing',
    role: 'นักพัฒนาเว็บ',
    photo: 'mikasa.jpg',
    about: 'ข้อความยาวๆ ของสมหญิง (About)...',
    meta: ['HTML','CSS','JavaScript','React'],
    work: [
      {title:'โปรเจกต์ A',desc:'รายละเอียดโปรเจกต์ A'},
      {title:'โปรเจกต์ B',desc:'รายละเอียดโปรเจกต์ B'},
      {title:'โปรเจกต์ C',desc:'รายละเอียดโปรเจกต์ C'},
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

    about.textContent = info.about;

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