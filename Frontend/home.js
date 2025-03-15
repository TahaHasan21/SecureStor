

const fileInput = document.querySelector('.file-upload-field');



// Function to list uploaded files
function listFiles() {
    fetch('http://localhost:8080/list')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Failed to fetch file list');
    })
    .then(data => {
        const fileListBody = document.getElementById('fileListBody');
        fileListBody.innerHTML = ''; // Clear previous list
        if (data.length === 0) {
            fileListBody.innerHTML = '<tr><td colspan="3">No files found</td></tr>';
        } else {
            data.forEach(file => {
                const tr = document.createElement('tr');
                const lastModified = new Date(file.lastModified);
                tr.innerHTML = `
                    <td>${file.fileName}</td>
                    <td>${lastModified.toDateString()}</td>
                    <td>
                        <button class="custom-btn btn-15" onclick="downloadFile('${file.fileName}')">Download</button>
                        <button class="custom-btn btn-15" onclick="deleteFile('${file.fileName}')">Delete</button>
                    </td>
                `;
                fileListBody.appendChild(tr);
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to fetch file list');
    });
}

// Function to download file
function downloadFile(fileName) {
    window.location.href = 'http://localhost:8080/download/' + fileName;
}

// Function to delete file
function deleteFile(fileName) {
    fetch('http://localhost:8080/'+fileName, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            listFiles();
            alert('File deleted successfully');
        } else {
            throw new Error('Failed to delete file');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to delete file');
    });
}

// Initial file list retrieval
listFiles();


