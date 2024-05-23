import {useEffect, useRef,useState} from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {
const [open, setOpen] = useState(false)
const [text, setText] = useState("")

const endRef = useRef(null)

useEffect(() => {
  endRef.current.scrollIntoView({ behavior: "smooth" })
}, [])

const handleEmoji = e => {
  setText((prev) => prev + e.emoji)
  setOpen(false)
}
console.log(text)
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Tomás Paz</span>
            <p>Gymrat desde el nacimiento, si señor</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae suscipit quibusdam laboriosam quos iusto itaque.
              Delectus eos repellendus dolores illum repudiandae aut inventore
              in, dignissimos, ipsum a minus dolorem sint!
            </p>
            <span>hace 1 minuto</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://i.guim.co.uk/img/media/81854e64ab48de6e5e0cf750744ab28e943c9dc1/0_0_4368_2621/master/4368.jpg?width=700&quality=85&auto=format&fit=max&s=78fb9bf7d38236d4e241c3f2ec5968c2" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae suscipit quibusdam laboriosam quos iusto itaque.
              Delectus eos repellendus dolores illum repudiandae aut inventore
              in, dignissimos, ipsum a minus dolorem sint!
            </p>
            <span>hace 1 minuto</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae suscipit quibusdam laboriosam quos iusto itaque.
              Delectus eos repellendus dolores illum repudiandae aut inventore
              in, dignissimos, ipsum a minus dolorem sint!
            </p>
            <span>hace 1 minuto</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae suscipit quibusdam laboriosam quos iusto itaque.
              Delectus eos repellendus dolores illum repudiandae aut inventore
              in, dignissimos, ipsum a minus dolorem sint!
            </p>
            <span>hace 1 minuto</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae suscipit quibusdam laboriosam quos iusto itaque.
              Delectus eos repellendus dolores illum repudiandae aut inventore
              in, dignissimos, ipsum a minus dolorem sint!
            </p>
            <span>hace 1 minuto</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae suscipit quibusdam laboriosam quos iusto itaque.
              Delectus eos repellendus dolores illum repudiandae aut inventore
              in, dignissimos, ipsum a minus dolorem sint!
            </p>
            <span>hace 1 minuto</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Escribe un mensaje..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Enviar</button>
      </div>
    </div>
  );
}

export default Chat