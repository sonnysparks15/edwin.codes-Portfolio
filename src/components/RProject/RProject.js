import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import pdf from "../../Assets/Caffinated Classification.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function RProject() {
    const [width, setWidth] = useState(1200);
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Container>
                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                        <blockquote className="blockquote mb-0">
                            <p style={{ textAlign: "justify" }}>
                                <span className="purple">Please give 2-3 min to load. </span>
                                <span className="purple">React doesn't handle large pdfs very well. </span>
                            </p>
                        </blockquote>
                    </Row>
                </Container>

                <Row className="resume">
                    <Document file={pdf} onLoadSuccess={({ numPages })=>setNumPages(numPages)}>
                        {Array.apply(null, Array(numPages)).map((x, i)=>i+1)
                            .map(page => <Page pageNumber={page} scale={width > 786 ? 1.7 : 0.6}/>)}
                    </Document>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button variant="primary" href={pdf} target="_blank" className="download-button">
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default RProject;
