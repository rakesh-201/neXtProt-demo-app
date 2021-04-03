export const COLUMN = [
    {
        Header: 'Gene Name',
        accessor: 'geneName'
    },
    {
        Header: 'Chromosomal Location',
        accessor: 'chromosomalLocation'
    },
    {
        Header: 'Gene Start Position',
        accessor: 'geneStartPosition'
    },
    {
        Header: 'Gene End Position',
        accessor: 'geneEndPosition'
    },
    {
        Header: 'Coding Strand',
        accessor: 'codingStrand'
    },
    {
        Header: 'Entry Accession',
        accessor: 'entryAccession'
    },
    {
        Header: 'Protein Existence',
        accessor: 'proteinExistence'
    },
    {
        Header: 'Proteomics',
        accessor: 'proteomics',
        Cell: (value) => { return value === "true" ? "true" : "false" }
    },
    {
        Header: 'Antibody',
        accessor: 'antibody',
        Cell: (value) => { return value === "true" ? "true" : "false" }
    },
    {
        Header: '3D',
        accessor: '3D',
        Cell: (value) => { return value === "true" ? "true" : "false" }
    },
    {
        Header: 'Disease',
        accessor: 'disease',
        Cell: (value) => { return value === "true" ? "true" : "false" }
    },
    {
        Header: 'Isoforms',
        accessor: 'isoforms'
    },
    {
        Header: 'Variants',
        accessor: 'variants'
    },
    {
        Header: 'ptms',
        accessor: 'ptms'
    },
    {
        Header: 'Curated Publication Count',
        accessor: 'curatedPublicationCount'
    },
    {
        Header: 'Additional Publication Count',
        accessor: 'additionalPublicationCount'
    },
    {
        Header: 'Patent Count',
        accessor: 'patentCount'
    },
    {
        Header: 'Submission Count',
        accessor: 'submissionCount'
    },
    {
        Header: 'Web Resource Count',
        accessor: 'webResourceCount'
    },
    {
        Header: 'Entry Description',
        accessor: 'entryDescription'
    },
]