import {useState} from "react";
import Modal from "./Components/Modal";

function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
      <>
          <button className="button" onClick={() => setIsOpen(true)}>
              Click to Open Modal
          </button>
          <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
              This is Modal Content!
          </Modal>
      </>
  );
}

export default App;
