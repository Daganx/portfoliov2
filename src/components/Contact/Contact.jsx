import { useEffect, useRef } from "react";
import "./contact.css";

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div className="contact" id="contact" ref={contactRef}>
      <p>INTERESTED IN</p>
      <p>WORKING TOGETHER ?</p>
      <p>Contact me:</p>
      <a href="mailto:dagan.letot@icloud.com">dagan.letot@icloud.com</a>
    </div>
  );
}
