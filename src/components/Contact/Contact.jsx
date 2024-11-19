import { useEffect, useRef } from "react";
import "./contact.css";

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting && (
          entry.target.classList.add("visible"),
          observer.disconnect()
        );
      },
      { threshold: 0.5, root: null }
    );

    const element = contactRef.current;
    element && observer.observe(element);

    return () => element && observer.unobserve(element);
  }, []);

  return (
    <div className="contact" id="contact" ref={contactRef}>
      <>
        <p>INTERESTED IN</p>
        <p>WORKING TOGETHER?</p>
      </>
      <p>Contact me:</p>
      <a href="mailto:dagan.letot@icloud.com">dagan.letot@icloud.com</a>
    </div>
  );
}
