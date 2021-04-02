
export const SEQUENCE = "FDSJKLFJDSFKLJDFHADJKLFHDSJKLFHDAFJKLDHFJKLDASFHDJKLFHDSAJKLFHDAKLFJDHSAFKLDLSNCDJKLFENFIKFJGNLJGNLJFNJLBNFJNVJNFJLNVLFJDNBJLNFDJLBNKFDNBLJDNBLJDNJLBNLJNBJNJLNGMK"

export const features = (ft, Seq = SEQUENCE) => {

    ft.addFeature({
        data: [{ x: 20, y: 32 }, { x: 46, y: 100 }, { x: 123, y: 150 }],
        name: "test feature 1",
        className: "test1",
        color: "#005572",
        type: "rect",
        filter: "type1"
    })

    ft.addFeature({
        data: [{ x: 20, y: 32 }, { x: 46, y: 100 }, { x: 123, y: 150 }],
        name: "test feature 1",
        className: "test1",
        color: "#005572",
        type: "rect",
        filter: "type1"
    })

    ft.addFeature({
        data: [{ x: 20, y: 32 }, { x: 46, y: 100 }, { x: 123, y: 150 }],
        name: "test feature 1",
        className: "test1",
        color: "#005572",
        type: "rect",
        filter: "type1"
    })

}
