import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars, Text3D, Center } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Cloud, ShieldCheck, Network, Cpu, ExternalLink } from "lucide-react";
import "./styles.css";

const people = [
  {
    name:"Dhanush P", role:"Cloud Engineer • AWS / Azure",
    photo:"/images/dhanush.png", initials:"DP", email:"dhanushprakasan2005@gmail.com",
    linkedin:"https://linkedin.com/in/dhanush-prakasan-155017387", github:"https://github.com/dhanush-tech04",
    summary:"B.Tech Information Technology student (CGPA 8.3) with hands-on AWS internship experience across IAM, S3, EC2, VPC and Elastic Load Balancing.",
    skills:["AWS","Azure Fundamentals","Docker","Linux","Python","Java","JavaScript","MySQL","TCP/IP"],
    interests:["Cloud Infrastructure","DevOps Fundamentals","Cloud Automation","Serverless Computing"],
    languages:"Tamil (Native), English (Professional)",
    accent:"cyan"
  },
  {
    name:"Kabir Ahmed Khan", role:"Cloud Engineer • AWS / Azure",
    photo:"/images/kabir.png", initials:"KA", email:"kabirahmedkhan703@gmail.com",
    linkedin:"https://linkedin.com/in/kabir-khan-9b297b268", github:"https://github.com/kabirahmedkhan703-debug",
    summary:"B.Tech Information Technology student (CGPA 8.3) with hands-on AWS internship experience across IAM, S3, EC2, VPC and Elastic Load Balancing.",
    skills:["AWS","Azure Fundamentals","Docker","Linux","Python","Java","JavaScript","MySQL","Network Security"],
    interests:["Cloud Infrastructure","DevOps Fundamentals","Cloud Automation","Serverless Computing"],
    languages:"English, Tamil, Hindi (Fluent)",
    accent:"violet"
  }
];

function CloudScene(){
  const ref=useRef();
  useFrame((_,d)=>{if(ref.current) ref.current.rotation.y += d*.08});
  return <group ref={ref}>
    <Float speed={1.5} rotationIntensity={.4} floatIntensity={.8}>
      <mesh><icosahedronGeometry args={[2.25,2]}/><meshStandardMaterial color="#86f7ff" wireframe emissive="#1bd5ff" emissiveIntensity={1.8}/></mesh>
      <mesh scale={.72}><icosahedronGeometry args={[2.25,2]}/><meshStandardMaterial color="#b9a5ff" transparent opacity={.12} emissive="#7c4dff" emissiveIntensity={2}/></mesh>
    </Float>
    {[[-3,1,0],[3,-1,-1],[0,2,-2]].map((p,i)=><Float key={i} speed={1+i*.3} floatIntensity={1}><mesh position={p} scale={.18+i*.07}><sphereGeometry args={[1,16,16]}/><meshStandardMaterial color={i===1?"#a889ff":"#62eaff"} emissive={i===1?"#7c4dff":"#00c8ff"} emissiveIntensity={3}/></mesh></Float>)}
  </group>
}

function Scene(){
  return <Canvas camera={{position:[0,0,8], fov:45}} dpr={[1,2]}>
    <ambientLight intensity={1}/><pointLight position={[4,4,4]} intensity={25} color="#4de9ff"/><pointLight position={[-4,-2,3]} intensity={20} color="#8c5cff"/>
    <Stars radius={60} depth={35} count={1800} factor={2} saturation={0}/>
    <CloudScene/><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.45}/>
  </Canvas>
}

const fade={hidden:{opacity:0,y:30},show:{opacity:1,y:0,transition:{duration:.7}}};

function App(){
  return <main>
    <nav><div className="brand"><span className="brand-dot"/>CLOUD<span>DUO</span></div><div className="navlinks"><a href="#duo">Duo</a><a href="#stack">Stack</a><a href="#work">Work</a><a href="#contact">Contact</a></div></nav>

    <section className="hero">
      <div className="hero-copy">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="eyebrow">TWO MINDS · ONE CLOUD</motion.div>
        <motion.h1 initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{delay:.15}}><span>BUILDING</span><br/><em>ABOVE.</em></motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.35}}>An interactive portfolio for two emerging cloud engineers turning infrastructure, security and automation into real-world systems.</motion.p>
        <motion.a className="cta" href="#duo">Explore the duo <ArrowDown size={18}/></motion.a>
      </div>
      <div className="scene"><Scene/><div className="cloud-photo photo-dhanush"><img src={people[0].photo} alt="Dhanush P"/><div><b>Dhanush P</b><small>Cloud Engineer (Entry-Level)</small><span></span></div></div><div className="cloud-photo photo-kabir"><img src={people[1].photo} alt="Kabir Ahmed Khan"/><div><b>Kabir Ahmed Khan</b><small>Cloud Engineer (Entry-Level)</small><span></span></div></div><div className="orbit-label l1">AWS</div><div className="orbit-label l2">AZURE</div><div className="orbit-label l3">DEVOPS</div></div>
    </section>

    <section id="duo" className="section">
      <div className="section-head"><span>01 / THE DUO</span><h2>Two engineers.<br/><i>One direction.</i></h2></div>
      <div className="people">{people.map((p,i)=><motion.article className={"person "+p.accent} variants={fade} initial="hidden" whileInView="show" viewport={{once:true}} key={p.name}>
        <div className="person-top"><div className="avatar"><img src={p.photo} alt={p.name}/></div><span>0{i+1}</span></div>
        <h3>{p.name}</h3><p className="role">{p.role}</p><p>{p.summary}</p>
        <div className="links"><a href={p.github} target="_blank"><Github size={17}/> GitHub</a><a href={p.linkedin} target="_blank"><Linkedin size={17}/> LinkedIn</a><a href={"mailto:"+p.email}><Mail size={17}/> Email</a></div>
      </motion.article>)}</div>
    </section>

    <section id="stack" className="section dark">
      <div className="section-head"><span>02 / CAPABILITIES</span><h2>Infrastructure<br/><i>as a mindset.</i></h2></div>
      <div className="cap-grid">
        {[["Cloud Architecture",Cloud,"AWS · EC2 · S3 · VPC · ELB · Azure"],["Security",ShieldCheck,"IAM · MFA · Least Privilege · Network Security"],["Networking",Network,"Subnets · NAT Gateways · TCP/IP · IP Addressing"],["Engineering",Cpu,"Docker · Git · Linux · Python · JavaScript"]].map(([t,I,d],i)=><motion.div className="cap" variants={fade} initial="hidden" whileInView="show" viewport={{once:true}} key={t}><I/><small>0{i+1}</small><h3>{t}</h3><p>{d}</p></motion.div>)}
      </div>
      <div className="skills-row">{[...new Set(people.flatMap(p=>p.skills))].map(s=><span key={s}>{s}</span>)}</div>
    </section>

    <section id="work" className="section">
      <div className="section-head"><span>03 / FEATURED WORK</span><h2>From sensor<br/><i>to response.</i></h2></div>
      <motion.article className="project" variants={fade} initial="hidden" whileInView="show" viewport={{once:true}}>
        <div className="project-num">01</div><div><div className="status">IN PROGRESS</div><h3>Smart Guardian</h3><p>IoT Accident Detection & Emergency Response System. A collision-detection module using ESP32 and accelerometer sensors triggers real-time accident alerts, while GPS tracking aims to pinpoint the accident location and transmit emergency alerts.</p><div className="tags">{["IoT","ESP32","GPS","Accelerometer","Cloud Computing"].map(x=><span key={x}>{x}</span>)}</div></div>
        <div className="project-icon"><Cpu size={54}/><ExternalLink size={18}/></div>
      </motion.article>
      <p className="note">The project is currently marked “In Progress” in both resumes; no additional project claims have been added.</p>
    </section>

    <section className="section education"><div className="edu-card"><span>EDUCATION</span><h2>B.Tech · Information Technology</h2><p>Er. Perumal Manimekalai College of Engineering, Hosur</p><strong>3rd Year · 5th Semester · CGPA 8.3</strong></div><div className="edu-card"><span>SHARED FOCUS</span><h2>Cloud · DevOps · Automation</h2><p>Career interests across cloud infrastructure, DevOps fundamentals, cloud automation and serverless computing.</p></div></section>

    <section id="contact" className="contact"><div className="contact-glow"/><span>04 / LET'S CONNECT</span><h2>Ready to build<br/><i>what's next?</i></h2><p>Explore the work, connect with either engineer, or start a conversation.</p><div className="contact-links">{people.map(p=><a href={"mailto:"+p.email} key={p.name}>{p.name} <Mail size={18}/></a>)}</div></section>
    <footer><span>© 2026 CLOUDDUO</span><span>DHANUSH P × KABIR AHMED KHAN</span></footer>
  </main>
}
createRoot(document.getElementById("root")).render(<App/>);