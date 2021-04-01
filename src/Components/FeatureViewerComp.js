import React, { useEffect } from 'react'

const STRING = "FDSJKLFJDSFKLJDFHADJKLFHDSJKLFHDAFJKLDHFJKLDASFHDJKLFHDSAJKLFHDAKLFJDHSAFKLDLSNCDJKLFENFIUPERWDJKPCNVDDAAFJDSAKFLKVMKMFKMVKKMFKVMKFMKVMKFMVKFMVKFMVKMFKVMKFMVKFLKFJGNLJGNLJFNJLBNFJNVJNFJLNVLFJDNBJLNFDJLBNKFDNBLJDNBLJDNJLBNS;JLDNBLJ;DNGLJNBJNJLNGMK"

const FeatureViewerComp = () => {

    var applicationName = 'app';
    var clientInfo = 'hh';
    var nx = new window.Nextprot.Client(applicationName, clientInfo);

    var isoform = "NX_P01308-1"


    useEffect(() => {
        var options = {
            showAxis: true,
            showSequence: true,
            brushActive: true,
            toolbar: true,
            bubbleHelp: true,
            zoomMax: 20
        };

        window.nxFeatureViewer(nx, isoform, "#cont", options)
            .then((ff) => {
                var styles = [
                    { name: "Propeptide", className: "pro", color: "#B3B3B3", type: "line", filter: "Processing" },
                    { name: "Mature ", className: "mat", color: "#B3B3C2", type: "line", filter: "Processing" }
                ];
                ff.addNxFeature(["propeptide", "mature-protein"], styles);
            })


        // var ft = new window.FeatureViewer(STRING, "#cont", options);

        // ft.addFeature({
        //     data: [{ x: 20, y: 32 }, { x: 46, y: 100 }, { x: 123, y: 150 }],
        //     name: "test feature 1",
        //     className: "test1",
        //     color: "#005572",
        //     type: "rect",
        //     filter: "type1"
        // })
    }, [])

    return (
        <div id="cont" >

        </div>
    )
}

export default FeatureViewerComp
