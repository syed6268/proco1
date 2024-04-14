// import 'bootstrap/dist/css/bootstrap.min.css';
// // import QuizForm from './components/QuizForm';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import Waste from './Waste';

// // import React from "react";
// function ContentRenderer({ content }) {
//   return (
//     <div>
//       {content ? (
//         <pre>{content}</pre>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// function QuestionnairePage() {
//   const jobdesc = `
//     About the job
//     Job Summary:
    
//     At Towbook, we’re looking for coding rock stars and innovators ready to make a significant impact in the towing software industry. Join us as a talented Software Engineer with 4+ years of experience in C# .NET and SQL servers, where your work not only supports over 12,000 businesses but also saves lives. As the leading innovative towing management software, Towbook provides efficient solutions to towing, roadside assistance, and transport businesses worldwide.
    
//     Top Required Skills:
    
//     Languages: Proficiency in C#, .NET, SQL.
//     Cloud Services Integration: Demonstrated experience with integrating cloud services to develop scalable applications, especially Azure Cloud services.
//     API Development and Integration: Expertise in developing and integrating APIs for effective backend-frontend communication.
//     Version Control: Mastery of version control systems like Git for collaborative development and code maintenance.
    
//     Other Desired Skills:
    
//     Experience with JavaScript frontend frameworks – React or Angular preferred.
//     Strong experience with Cosmos DB and proficiency in Redis Caching for efficient data management.
//     Familiarity with tools for debugging web API (e.g., Fiddler, Postman).
    
//     Duties & Responsibilities:
    
//     Develop and maintain clean, scalable, and efficient code using C# and .NET frameworks, ensuring high application performance.
//     Collaborate with cross-functional teams and lead workgroups using agile methodologies to ensure seamless product development and customer satisfaction.
//     Serve as a key advocate and expert for specific platform components, delivering exceptional technical support and guidance.
//     Design, implement, and optimize database schemas and queries using SQL for high-performance data operations.
//     Demonstrate leadership qualities and versatility by managing the development of new features, optimizing workflows, and leading team members, including programmers, designers, and testers.
//   `;

//   const expected_output = `
//   {"questions": [
//     {
//         "content": "What is the pur Azure Cloud services?",
//         "a": "To develop scalable applications",
//         "b": "To manage databases",
//         "c": "To create user interfaces",
//         "d": "To analyze data",
//         "correctAnswer": "a" // Correct answer is option 'a'
//     },
//     {
//         "content": "What is the main function of Git?",
//         "a": "To develop APIs",
//         "b": "To manage version control",
//         "c": "To integrate cloud services",
//         "d": "To optimize database queries",
//         "correctAnswer": "b" // Correct answer is option 'b'
//     }
//   ]
//   }
//   `;

//   //const message = jobdesc + ", ' I am an Researcher. Based on my skills mentioned in description, ask my applicants 10 mcq questions based on that skill ex: if reactjs is mention in jobdesc then you should ask him what is hooks and have 4 options. also give me there answer in the last section. The format should be strictly, question and answer. dont give me any sentences.strictly the question should only be regarding the skills and not about description. dont ask what language do you use in this position, instead ask him do you know what is inheritence in oop. remember 10 number of mcq.strictly answer in json format like this':" + expected_output;
//   // const message = jobdesc + ", ' I am an Researcher. Based on my skills mentioned in description, ask my applicants 10 mcq questions based on that skill ex: if reactjs is mention in jobdesc then you should ask him what is hooks and have 4 options. also give me there answer in the last section. The format should be strictly, question and answer. dont give me any sentences.strictly the question should only be regarding the skills and not about description. dont ask what language do you use in this position, instead ask him do you know what is inheritence in oop. remember 10 number of mcq.strictly answer in json format like this give me list':" + expected_output;
//   const message = jobdesc + "remember give me a list inside a json . give me 10 questions based on skills mentioned in jobdesc in the json format please like this " + expected_output;
 
//   const [content, setContent] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await generateChatCompletion(message);
//         setContent([response.data.choices[0].message.content]);
//         console.log(response.data.choices[0].message.content)
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchData();
//   }, []);

//   async function generateChatCompletion(message) {
//     try {
//       const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//         model: "gpt-3.5-turbo-1106",
//         messages: [{ role: "user", content: message }],
//         temperature: 0.7,
//         response_format: { "type": "json_object" }
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer `
//         }
//       });
//       return response;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }

//   return (
//     <div className="QuestionnairePage">
//       {content ? ( // Render Waste component only when content is not null
//         <Waste questions={JSON.parse(content).questions} />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default QuestionnairePage;

//uncomment while running