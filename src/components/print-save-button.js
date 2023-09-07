import React from "react";

function PrintSaveButton() {
    return (
        <button onClick={showPrintDialog} id="print-save-button" class="noprint">Print/Save as PDF</button>
    );
}

function showPrintDialog() {
    window.print();
}

export { PrintSaveButton };