import React, { useEffect, useState } from 'react'
import { SEQUENCE, features } from '../assets/data'
import Input from './Input';

const FeatureViewerComp = () => {

    const [enteredStr, setEnteredStr] = useState("")

    useEffect(() => {

        document.getElementById("cont").innerHTML = "";

        var options = {
            showAxis: true,
            showSequence: true,
            brushActive: true,
            toolbar: true,
            zoomMax: 20
        };

        var ft = new window.FeatureViewer(enteredStr.length > 0 ? enteredStr : SEQUENCE, "#cont", options);

        features(ft);

    }, [enteredStr])

    return (
        <div>
            <h1 className="text-primary" > Feature Viewer </h1>
            <div className="mx-lg-5 my-lg-3 " >
                <Input title="Sequence" desc={SEQUENCE} value={enteredStr} onChange={setEnteredStr} />
            </div>
            <div id="cont" >

            </div>
        </div>
    )
}

export default FeatureViewerComp
