import React, { useEffect, useState } from 'react'
import { SEQUENCE, features } from '../assets/data'
import Input from './Input';

const FeatureViewerComp = () => {

    const [enteredStr, setEnteredStr] = useState("")

    // var applicationName = 'app';
    // var clientInfo = 'hh';
    // var nx = new window.Nextprot.Client(applicationName, clientInfo);

    // var isoform = "NX_P01308-1"


    useEffect(() => {

        // window.nxFeatureViewer(nx, isoform, "#cont", options)
        //     .then((ff) => {
        //         var styles = [
        //             { name: "Propeptide", className: "pro", color: "#B3B3B3", type: "line", filter: "Processing" },
        //             { name: "Mature ", className: "mat", color: "#B3B3C2", type: "line", filter: "Processing" }
        //         ];
        //         ff.addNxFeature(["propeptide", "mature-protein"], styles);
        //     })

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
                <Input title="Sequence" desc={SEQUENCE} string={enteredStr} onChange={setEnteredStr} />
            </div>
            <div id="cont" >

            </div>
        </div>
    )
}

export default FeatureViewerComp
