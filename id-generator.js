// --- SECURITY PIN LOGIC (PIN: 8877) ---
const ENCODED_PIN = "ODg3Nw=="; 

function checkPin() {
    let enteredPin = document.getElementById("adminPin").value;
    if(btoa(enteredPin) === ENCODED_PIN) {
        document.getElementById("pinScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        document.getElementById("pinError").style.display = "block";
        document.getElementById("adminPin").value = ""; 
    }
}

document.getElementById("adminPin").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); checkPin();
    }
});

// --- ID GENERATOR LOGIC ---
function updateField(inputId, outputId) {
    let value = document.getElementById(inputId).value;
    if(value === "") {
        if(inputId === 'inpName') value = "MUKESH KUMAR";
        if(inputId === 'inpFather') value = "SHEONATH";
        if(inputId === 'inpDesig') value = "JUNIOR INSTRUCTOR";
        if(inputId === 'inpEmpId') value = "RJCR202612003377";
        if(inputId === 'inpMobile') value = "9660608859";
        if(inputId === 'inpBlood') value = "O+";
        if(inputId === 'inpUid') value = "776005622091";
        if(inputId === 'inpPan') value = "BYZPB1353D";
        if(inputId === 'inpAddress') value = "WARD NO.02, CHURU";
    }
    document.getElementById(outputId).innerText = value;
}

function updateDate(inputId, outputId) {
    let dVal = document.getElementById(inputId).value;
    if(dVal) {
        let p = dVal.split('-');
        document.getElementById(outputId).innerText = `${p[2]}/${p[1]}/${p[0]}`;
    } else {
        document.getElementById(outputId).innerText = "23/06/1995";
    }
}

document.getElementById('inpPhoto').addEventListener('change', function(e) {
    const f = e.target.files[0];
    if(f) {
        const r = new FileReader();
        r.onload = function(event) { document.getElementById('outPhoto').src = event.target.result; }
        r.readAsDataURL(f);
    }
});

document.getElementById('inpEmpSign').addEventListener('change', function(e) {
    const f = e.target.files[0];
    if(f) {
        const r = new FileReader();
        r.onload = function(event) {
            const img = document.getElementById('outEmpSign');
            img.src = event.target.result; img.style.display = 'block';
        }
        r.readAsDataURL(f);
    }
});

document.getElementById('inpPrinSign').addEventListener('change', function(e) {
    const f = e.target.files[0];
    if(f) {
        const r = new FileReader();
        r.onload = function(event) {
            const img = document.getElementById('outPrinSign');
            img.src = event.target.result; img.style.display = 'block';
        }
        r.readAsDataURL(f);
    }
});

// --- FULL-PROOF DOWNLOAD ENGINE ---
function downloadExactID() {
    const btn = document.getElementById('btnDownload');
    const element = document.getElementById('idCardExactCapture');
    
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Downloading...';
    btn.style.opacity = '0.8';
    btn.disabled = true;

    html2canvas(element, { 
        scale: 4, 
        useCORS: true, 
        allowTaint: true, 
        backgroundColor: "#ffffff",
        logging: false
    }).then(canvas => {
        let name = document.getElementById('inpName').value || "Mukesh_Kumar";
        const triggerLink = document.createElement('a');
        triggerLink.download = `Print_Ready_ID_${name.replace(/ /g, "_")}.png`;
        triggerLink.href = canvas.toDataURL('image/png');
        triggerLink.click();
        
        btn.innerHTML = '<i class="fa-solid fa-print"></i> Download Print Ready ID (HD)';
        btn.style.opacity = '1';
        btn.disabled = false;
    }).catch(error => {
        alert("Download Failed! " + error.message);
        btn.innerHTML = '<i class="fa-solid fa-print"></i> Try Again';
        btn.style.opacity = '1';
        btn.disabled = false;
    });
}
