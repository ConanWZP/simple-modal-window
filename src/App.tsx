import React, {FC, ReactNode, useRef, useState} from 'react';

import './styles.scss'

interface IModal {
    visible: boolean,
    setVisible: (e: boolean) => void,
    children?: React.ReactChild | React.ReactNode
}

export const ModalWindow: FC<IModal> = ({visible, setVisible, children}) => {
    return (
        <div className={`overlay animated ${visible ? 'show' : ''}`}>
            <div className="modal">
                <svg height="200" viewBox="0 0 200 200" width="200" onClick={() => setVisible(false)}>
                    <title/>
                    <path
                        d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
                </svg>
                {children}
            </div>
        </div>
    )
}


const App: FC = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className="App">
            <button className="visible-modal" onClick={() => setVisible(true)}>🚀 Что там?</button>
            <ModalWindow visible={visible} setVisible={setVisible}>
                <h3>Title</h3>
                <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"/>
            </ModalWindow>
        </div>
    );
};

export default App;
