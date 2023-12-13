import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCheckAuth } from "../hooks";
import { useState, useEffect, useRef } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function ChatHome({ userEmail }) {
  useCheckAuth();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [messageText, setMessageText] = useState([]);
  const messagesEndRef = useRef(null);

  const pickUpDate = () => {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1; // Months are zero-based
    const year = today.getFullYear();
    const hours = today.getHours();
    const minutes = today.getMinutes();
  
    
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
   
    const formattedDateTime = `${year}-${month}-${date} ${hours}:${formattedMinutes}`;
  
    return formattedDateTime;
  };
  const date = pickUpDate();

  const addMessage = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "messageText"), {
        userEmail: userEmail,
        message: message,
        date: date
      });

      setMessageText((prevMessages) => [
        ...prevMessages,
        { userEmail: userEmail, message: message, date: date, id: docRef.id },
      ]);

      setMessage("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const fetchPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "messageText"));
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      newData.sort((a, b) => {
        const dateA = new Date(`${a.date} ${a.time}`);
        const dateB = new Date(`${b.date} ${b.time}`);
        
        return dateA - dateB;
      });

      setMessageText(newData);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  useEffect(() => {
    fetchPost();
    scrollToBottom();
  }, []);


 //auto update messages

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     fetchPost();
  //   }, 3000);

  //   return () => clearInterval(intervalId);
  // }, []); 

  useEffect(() => {
    scrollToBottom();
  }, [messageText]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="chat__section">
        <div className="chat-header">
          

          <h1 className="chat-text-header">Leave your message</h1>
          <div>
        <button className="logout-btn" onClick={handleLogout}> Logout </button>
      </div>
        </div>
        
        <div className="message__window">
          <div className="message__content">
            {messageText?.map((message, i) => {
              const atIndex = message.userEmail.indexOf("@");
              const userName =
                atIndex !== -1
                  ? message.userEmail.slice(0, atIndex)
                  : message.userEmail;
              const myMessage = message.userEmail === userEmail;

              return (
                <div className={`message ${myMessage ? 'my-message' : ''}`}   key={i}>
                  <div className="message__ava">
                    <img
                      src="https://media.tenor.com/hdZmLIbVqsoAAAAi/skidee-pfp-discord-pfp.gif"
                      alt="ava"
                    />
                    <div className="nickname">
                      <strong>{userName}</strong>
                    </div>
                  </div>
                  <div className="message__date">{message.date}</div>
                  <div className="message__text">{message.message}</div>
                </div>
              );
            })}
            <div ref={messagesEndRef}></div>
          </div>
        </div>
        <div>
          <form>
            <input className="message__input"
              type="text"
              placeholder={`${userEmail.split('@')[0]} enter your message`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="chat-btn-container">
            <button type="submit" className="btn " id="message__btn" onClick={addMessage}>
              Submit
            </button>
          </div>
          </form>

          
        </div>
      </section>
      
    </>
  );
}
