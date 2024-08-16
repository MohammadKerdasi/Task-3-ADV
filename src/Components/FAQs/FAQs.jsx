import { useState, useRef } from 'react';
import './FAQs.css';
// import FAQs_img from './../../../public/assetsProject/imges/FAQs.png'

const FAQsPage = () => {
  const [activeIndexSet1, setActiveIndexSet1] = useState(null);
  const [activeIndexSet2, setActiveIndexSet2] = useState(null); 
  const contentRefs = useRef([]);

  const toggleAccordionSet1 = (index) => {
    setActiveIndexSet1(activeIndexSet1 === index ? null : index);

    setActiveIndexSet2(null);
  };

  const toggleAccordionSet2 = (index) => {
    setActiveIndexSet2(activeIndexSet2 === index ? null : index);

    setActiveIndexSet1(null);
  };

  const faqs = [
    {
      question: "Best Useful Links?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
    },
    {
      question: "How Does Does This Work?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
    },
    {
      question: "What Does Royalty Free Mean?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
    },
    {
      question: "Why is Villa Agency the best?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
    },
   
  ];

  return (
    <>
    <div className='Mk-faq-container'>
      <div className='Mk-faq-set'>
        {faqs.slice(0, 3).map((faq, index) => (
          <div key={index} className={`Mk-faq ${activeIndexSet1 === index ? 'active' : ''}`}>
            <div className='Mk-Question' onClick={() => toggleAccordionSet1(index)}>
              <h5>{faq.question}</h5>
              <svg
                className={`arrow-icon ${activeIndexSet1 === index ? 'active' : ''}`}
                width="12px" height="7"
              >
                <path d="M10.59 0.590088L6 5.17009L1.41 0.590088L0 2.00009L6 8.00009L12 2.00009L10.59 0.590088Z" fill="var(--grey)" />
              </svg>
            </div>
            <div
              className='Mk-answer'
              ref={Mk => contentRefs.current[index] = Mk}
              style={{
                maxHeight: activeIndexSet1 === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0',
                transition: 'max-height 0.5s ease-out',
                overflow: 'hidden'
              }}
            >
              <p>Get <b>the best villa</b> {faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

 
    </div>
    {/* <div className='Mk-FAQs-Img'>
        <img src={FAQs_img} alt="" />
    </div> */}
    </>
  );
};

export default FAQsPage;