import React, { useEffect, useState } from 'react';
import ChatBot from 'react-simple-chatbot';




const Bot = () => {
 
  return (
    <div className='fixed right-10 bottom-10' >
      <div>
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Welcome TO The GlitchCity',
              trigger: '2',
            },
            {
              id: '2',
              message: 'Please enter your name',
              trigger: '3',
            },
            {
              id: '3',
              user: true,
              trigger: '4',
            },
            {
              id: '4',
              message: 'Hi {previousValue}',
              trigger: '5',
            },
            {
              id:'5',
              message:'How Can i help You',
              trigger:'6'

            },
            {
              id:'6',
              user:true,
              trigger:'7'

            },
            {
              id:'7',
              message:'Okay i got it your issue {previousValue}',
              trigger:'8'
            },
            {
              id:'8',
              message:'Here our the certain solution',
              trigger:'9'

            },
            
            {
              id: '9',
              options: [
                { value: 1, label: 'Java', trigger: '10' },
                { value: 2, label: 'JavaScript', trigger: '11' },
                { value: 3, label: 'Python', trigger: '12' },
                { value: 4, label: 'Php', trigger: '13' },
              ],
            },
            {
              id: '10',
              component: (
                <div>
                  <p>
                    You selected Java! 
                  </p>
                  <a
                    href="https://www.codewithharry.com/videos/java-tutorial-in-hindi-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to Get The Solution
                  </a>
                </div>
              ),
              end: true, // This step ends the conversation
            },
            {
              id: '11',
              component: (
                <div>
                  <p>
                    You selected Javascript! 
                  </p>
                  <a
                    href="https://javascript.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                     Click here to Get The Solution
                  </a>
                </div>
              ),
              end: true, // This step ends the conversation
            },
            {
              id: '12',
              component: (
                <div>
                  <p>
                    you selected Python!
                  </p>
                  <a
                    href="https://www.codewithharry.com/tutorial/python/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to Get The Solution
                  </a>
                </div>
              ),
              end: true, // This step ends the conversation
            },
            {
              id: '13',
              component: (
                <div>
                  <p>
                    You selected PHP! 
                  </p>
                  <a
                    href="https://www.codewithharry.com/tutorial/php/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                     Click here to Get The Solution
                  </a>
                </div>
              ),
              trigger: '14', // This step ends the conversation
            },
            {
              id: '14',
              message: 'Thankyou!',
              end: true
            },

          ]}
        />
      </div>
    </div>
  );
};

export default Bot;
