import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Dropdown } from "react-bootstrap";
import axios from "axios";

function YourComponent() {
  const [inputText, setInputText] = useState(""); // State to hold input text
  const [translatedText, setTranslatedText] = useState("");
  const [transcribing, setTranscribing] = useState(false); // State to control whether speech recognition is active

  // Function to start speech recognition
  const startSpeechRecognition = () => {
    setTranscribing(true); // Set transcribing state to true
    const recognition = new window.webkitSpeechRecognition(); // Create SpeechRecognition instance
    recognition.lang = "en-US"; // Set language
    recognition.start(); // Start speech recognition

    // Event listener for when speech is recognized
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript); // Update input text with transcript
      setTranscribing(false); // Set transcribing state to false after recognition
    };

    // Event listener for errors
    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setTranscribing(false); // Set transcribing state to false if error occurs
    };
  };

  const handleTranslate = () => {
    // Function to handle translation
    axios
      .post("http://localhost:5000/add", { Input: inputText }) // Send input text to Flask backend
      .then((response) => {
        console.log(response.data); // Print translated text received from Flask
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="text-center" style={{ fontSize: "6vh" }}>
        <span style={{ color: "white" }}>Enter</span>{" "}
        <span style={{ color: "#2DA1FF" }}>Text</span>{" "}
        <span style={{ color: "white" }}>To</span>{" "}
        <span style={{ color: "white" }}>Be</span>{" "}
        <span style={{ color: "white" }}>Translated</span>{" "}
      </div>

      <InputGroup style={{ width: "70%", margin: "0 auto" }}>
        <Form.Control
          className="custom-textarea  mt-3"
          as="textarea"
          aria-label="With textarea"
          rows={9}
          cols={20}
          style={{
            backgroundColor: "#191919",
            color: "white",
            padding: "10px",
            border: "none",
            resize: "none",
            width: "100%",
          }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button
          onClick={startSpeechRecognition}
          disabled={transcribing} // Disable button while transcribing
          className="aditya"
          style={{
            position: "absolute",
            top: "85%",
            left: "85%",
          }}
        >
          Start Voice Input
        </Button>
        <Dropdown>
          <Dropdown.Toggle
            variant="custom"
            id="dropdown-basic"
            className="bttn mt-3"
            style={{
              backgroundColor: "#2DA1FF",
              borderColor: "#2DA1FF",
              color: "white",
            }} // Custom color
          >
            Translate To
          </Dropdown.Toggle>

          <Dropdown.Menu
            style={{
              backgroundColor: "#f8f9fa",
              color: "white",
              borderRadius: "0px",
            }}
          >
            {" "}
            {/* Styling for options list */}
            <Dropdown.Item
              href="#/action-1"
              style={{ color: "#007bff" }} // Custom color for option
            >
              Hindi
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              style={{ color: "#28a745" }} // Custom color for option
            >
              French
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              style={{ color: "#ffc107" }} // Custom color for option
            >
              German
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </InputGroup>
      <div className="text-center">
        <div className="btttn" style={{}}>
          <Button className="mx-3" onClick={handleTranslate}>
            Text
          </Button>
          <Button className="mx-3">PDF</Button>
          <Button className="mx-3">WebLink</Button>
        </div>
      </div>

      <div
        className="text-center"
        style={{
          fontSize: "6vh",
        }}
      >
        <span style={{ color: "white" }}>Translated</span>{" "}
        <span style={{ color: "#2DA1FF" }}>Text</span>{" "}
        <div
          style={{
            textAlign: "center",
            width: "70%",
            margin: "0 auto",
            maxHeight: "400px",
            overflowY: "auto",
            marginBottom: "5px",
            fontSize: "15px",
            color: "white",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            dignissimos deleniti unde, sed vel suscipit veniam deserunt? Porro
            cumque ducimus nisi in ipsum quae sunt accusamus dolores ab
            suscipit! Adipisci doloremque praesentium sit, sint modi neque eos
            ea dignissimos sequi, dolore tempora quasi fuga, provident impedit?
            Aut suscipit, illo harum voluptatem dolor dolore? Unde excepturi,
            facilis, voluptate autem nemo quidem iste, in error consectetur
            dignissimos magni corporis cum sint fuga nobis rerum itaque illo
            nisi vero iure pariatur. Cum distinctio itaque accusamus aspernatur
            nihil perferendis ipsa odio aliquam incidunt nam, dicta animi amet
            ipsum possimus et debitis aut. Veritatis, id?
          </p>
        </div>
        <div className="text-center">
          <div className="btttn" style={{}}>
            <Button className="mx-3">Get Summary </Button>
            <Button className="mx-3">Reframe</Button>
          </div>
        </div>
      </div>
      <div
        className="text-center"
        style={{
          fontSize: "6vh",
        }}
      >
        <span style={{ color: "white" }}>Summary</span>{" "}
        <span style={{ color: "#2DA1FF" }}>Text</span>{" "}
        <div
          style={{
            textAlign: "center",
            width: "70%",
            margin: "0 auto",
            maxHeight: "200px",
            overflowY: "auto",
            marginBottom: "50px",
            fontSize: "15px",
            color: "white",
          }}
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            quisquam minima eos voluptatibus cum quo, fuga ex nisi! Quibusdam
            amet obcaecati natus accusamus minus porro expedita quas quos
            tempora reiciendis.
          </p>
        </div>
        <div className="text-center" style={{ fontSize: "6vh" }}>
          <span style={{ color: "#2DA1FF" }}>Translate</span>{" "}
        </div>
        <InputGroup style={{ width: "20%", margin: "0 auto" }}>
          <Form.Control
            className="custom-textarea  mt-3"
            as="textarea"
            aria-label="With textarea"
            rows={1}
            cols={20}
            style={{
              backgroundColor: "#191919",
              color: "white",
              padding: "10px",
              border: "none",
              resize: "none",
              width: "100%",
            }}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <Dropdown>
            <Dropdown.Toggle
              variant="custom"
              id="dropdown-basic"
              className="bttn mt-3"
              style={{
                backgroundColor: "#2DA1FF",
                borderColor: "#2DA1FF",
                color: "white",
              }} // Custom color
            >
              Translate To
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                backgroundColor: "#f8f9fa",
                color: "white",
                borderRadius: "0px",
              }}
            >
              {" "}
              {/* Styling for options list */}
              <Dropdown.Item
                href="#/action-1"
                style={{ color: "#007bff" }} // Custom color for option
              >
                Hindi
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                style={{ color: "#28a745" }} // Custom color for option
              >
                French
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                style={{ color: "#ffc107" }} // Custom color for option
              >
                German
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </InputGroup>
        <div className="text-center" style={{ fontSize: "6vh" }}>
          <span style={{ color: "white" }}>Translated Word</span>{" "}
        </div>
      </div>
      <div className="text-center">{transcribing && <p>Listening...</p>}</div>
    </div>
  );
}

export default YourComponent;
