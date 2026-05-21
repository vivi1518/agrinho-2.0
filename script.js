/* ======================================== */
/* RESET */
/* ======================================== */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

:root{

  --blue:#0b4d91;
  --light-blue:#4fc3f7;
  --metallic:#2b6cb0;
  --green:#2e8b57;
  --moss:#3f5f45;
  --gold:#d4af37;
  --black:#0d1117;
  --white:#ffffff;

  --bg:#07121f;
  --card:#101c2b;
  --text:#f4f4f4;

  --radius:20px;

  --shadow:
  0 10px 30px rgba(0,0,0,0.25);

  --transition:0.3s ease;

  font-size:16px;
}

body.light{
  --bg:#f5f9ff;
  --card:#ffffff;
  --text:#1b1b1b;
}

html{
  scroll-behavior:smooth;
}

body{
  font-family:'Poppins',sans-serif;
  background:var(--bg);
  color:var(--text);
  line-height:1.7;
  overflow-x:hidden;
  transition:var(--transition);
}

/* ======================================== */
/* HEADER */
/* ======================================== */

.header{
  width:100%;
  position:fixed;
  top:0;
  z-index:999;

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:1rem 5%;

  backdrop-filter:blur(12px);

  background:rgba(0,0,0,0.3);
}

.logo{
  display:flex;
  align-items:center;
  gap:0.8rem;
}

.logo span{
  font-size:2rem;
}

.logo h2{
  font-size:1.2rem;
}

.nav{
  display:flex;
  gap:2rem;
}

.nav a{
  color:var(--white);
  text-decoration:none;
  font-weight:500;
  transition:var(--transition);
}

.nav a:hover{
  color:var(--gold);
}

/* ======================================== */
/* HERO */
/* ======================================== */

.hero{
  min-height:100vh;

  display:flex;
  justify-content:center;
  align-items:center;

  position:relative;

  background:
  linear-gradient(
  135deg,
  rgba(11,77,145,0.9),
  rgba(46,139,87,0.85),
  rgba(13,17,23,0.95)
  );

  padding:2rem;
}

.hero-overlay{
  position:absolute;
  inset:0;

  background:
  radial-gradient(circle at top right,
  rgba(79,195,247,0.25),
  transparent 40%);
}

.hero-content{
  max-width:900px;
  text-align:center;
  z-index:2;
}

.tag{
  display:inline-block;
  background:rgba(255,255,255,0.1);
  padding:0.7rem 1.2rem;
  border-radius:999px;
  margin-bottom:2rem;
  backdrop-filter:blur(10px);
}

.hero h1{
  font-size:clamp(2.8rem,7vw,6rem);
  line-height:1.1;
  margin-bottom:1.5rem;
}

.hero h1 span{
  color:var(--gold);
}

.hero p{
  font-size:clamp(1rem,2vw,1.3rem);
  margin-bottom:2rem;
}

.hero-btn{
  display:inline-block;
  padding:1rem 2rem;
  background:linear-gradient(
  135deg,
  var(--light-blue),
  var(--green)
  );

  color:white;
  text-decoration:none;
  border-radius:999px;
  font-weight:600;

  transition:var(--transition);
  box-shadow:var(--shadow);
}

.hero-btn:hover{
  transform:translateY(-4px);
}

/* ======================================== */
/* SECTION */
/* ======================================== */

.section{
  padding:6rem 5%;
}

.section-title{
  text-align:center;
  margin-bottom:4rem;
}

.section-title.left{
  text-align:left;
}

.section-title h2{
  font-size:clamp(2rem,4vw,3rem);
  margin-bottom:1rem;
}

.section-title p{
  color:#cfd8dc;
}

/* ======================================== */
/* CARDS */
/* ======================================== */

.content-grid,
.benefits-grid{

  display:grid;

  grid-template-columns:
  repeat(auto-fit,minmax(280px,1fr));

  gap:2rem;
}

.content-card,
.benefit-card{

  background:var(--card);

  border-radius:var(--radius);

  padding:2rem;

  box-shadow:var(--shadow);

  border:1px solid rgba(255,255,255,0.05);

  transition:var(--transition);
}

.content-card:hover,
.benefit-card:hover{

  transform:translateY(-8px);
}

.content-card h3,
.benefit-card h3{

  margin-bottom:1rem;
  color:var(--gold);
}

.highlight{
  color:var(--light-blue);
  font-weight:600;
}

/* ======================================== */
/* IMAGENS */
/* ======================================== */

.image-grid{

  display:grid;

  grid-template-columns:
  repeat(auto-fit,minmax(250px,1fr));

  gap:2rem;
}

.imagem{
  overflow:hidden;
  border-radius:25px;
  box-shadow:var(--shadow);
  background:var(--card);
}

.imagem img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;

  transition:transform 0.5s ease;
}

.imagem:hover img{
  transform:scale(1.05);
}

/* ======================================== */
/* ACCORDION */
/* ======================================== */

.accordion-container{
  display:flex;
  flex-direction:column;
  gap:1rem;
}

.accordion-item{
  background:var(--card);
  border-radius:var(--radius);
  overflow:hidden;
  box-shadow:var(--shadow);
}

.accordion-header{

  width:100%;
  border:none;

  background:none;

  color:var(--text);

  padding:1.5rem;

  text-align:left;

  font-size:1rem;
  font-weight:600;

  cursor:pointer;
}

.accordion-content{

  max-height:0;
  overflow:hidden;

  transition:max-height 0.4s ease;

  padding:0 1.5rem;
}

.accordion-content p{
  padding-bottom:1.5rem;
}

/* ======================================== */
/* FORM */
/* ======================================== */

.form-section{

  display:grid;

  grid-template-columns:
  1.5fr 1fr;

  gap:3rem;
}

.comment-box,
.seminar-form{

  background:var(--card);

  padding:2rem;

  border-radius:var(--radius);

  box-shadow:var(--shadow);
}

.comment-box textarea{

  width:100%;
  min-height:180px;

  resize:none;

  border:none;

  border-radius:15px;

  padding:1rem;

  margin-bottom:1rem;

  background:#0f1724;

  color:white;
}

.comment-box button,
.seminar-form button{

  border:none;

  padding:1rem 2rem;

  border-radius:999px;

  background:linear-gradient(
  135deg,
  var(--light-blue),
  var(--green)
  );

  color:white;

  font-weight:600;

  cursor:pointer;

  transition:var(--transition);
}

.comment-box button:hover,
.seminar-form button:hover{
  transform:translateY(-3px);
}

.seminar-form form{
  display:flex;
  flex-direction:column;
  gap:1rem;
  margin-top:1.5rem;
}

.seminar-form input{

  padding:1rem;

  border:none;

  border-radius:12px;

  background:#0f1724;

  color:white;
}

/* ======================================== */
/* FOOTER */
/* ======================================== */

.footer{

  background:#02060d;

  padding:3rem 5%;
}

.footer-content{

  display:flex;
  justify-content:space-between;
  gap:2rem;
  flex-wrap:wrap;
}

.footer h3{
  margin-bottom:1rem;
  color:var(--gold);
}

.footer p{
  margin-bottom:0.5rem;
}

.footer-phrase{
  max-width:400px;
}

/* ======================================== */
/* ACESSIBILIDADE */
/* ======================================== */

.accessibility-box{

  position:fixed;

  right:20px;
  bottom:20px;

  z-index:9999;

  display:flex;
  flex-direction:column;

  gap:0.5rem;

  background:rgba(0,0,0,0.75);

  backdrop-filter:blur(10px);

  padding:1rem;

  border-radius:20px;

  box-shadow:var(--shadow);
}

.accessibility-box h3{
  font-size:0.9rem;
  margin-bottom:0.5rem;
}

.accessibility-box button{

  border:none;

  padding:0.8rem;

  border-radius:10px;

  cursor:pointer;

  background:linear-gradient(
  135deg,
  var(--blue),
  var(--green)
  );

  color:white;

  font-weight:600;

  transition:var(--transition);
}

.accessibility-box button:hover{
  transform:scale(1.05);
}

/* ======================================== */
/* RESPONSIVO */
/* ======================================== */

@media(max-width:980px){

  .form-section{
    grid-template-columns:1fr;
  }

  .nav{
    display:none;
  }
}

@media(max-width:768px){

  .section{
    padding:4rem 6%;
  }

  .hero{
    padding-top:8rem;
  }

  .hero h1{
    font-size:2.8rem;
  }
}

@media(max-width:480px){

  .hero-btn{
    width:100%;
  }

  .accessibility-box{
    right:10px;
    bottom:10px;
  }
}
