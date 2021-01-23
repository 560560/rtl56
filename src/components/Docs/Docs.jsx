import React, {useState} from 'react';
import Ur from "./Ur";
import Fiz from "./Fiz";

const Docs = () => {
    const [currentTab, setCurrentTab] = useState("ur")
    return (
        <div className="docsWrapper">
            <div className="choseWrapper">
                <div className={currentTab === "ur" ? "headerButton headerUr active" : "headerButton headerUr notActive"}
                     onClick={() => setCurrentTab("ur")} >
                    <h2 className="desktop">ПЕРЕЧЕНЬ ДОКУМЕНТОВ для рассмотрения заявки о заключении лизинговой сделки <br/>(по юридическим лицам)</h2>
                    <h2 className="mobile">Юридическим лицам</h2>
                </div>
                <div className={currentTab === "fiz" ? "headerButton headerFiz active" : "headerButton headerFiz notActive"}
                     onClick={() => setCurrentTab("fiz")}>
                    <h2 className="desktop">ПЕРЕЧЕНЬ ДОКУМЕНТОВ для рассмотрения заявки о заключении лизинговой сделки <br/>(по индивидуальным предпринимателям)</h2>
                    <h2 className="mobile">Индивидуальным предпринимателям</h2>

                </div>
            </div>
            <div className="docsBody">
                {currentTab === "ur" && <Ur/>}
                {currentTab === "fiz" && <Fiz/>}
            </div>
        </div>
    );
}

export default Docs;