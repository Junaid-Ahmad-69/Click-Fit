document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const overlayUploadButton = document.getElementById('overlayUploadButton');
    const imagePreview = document.getElementById('imagePreview');

    // Open file dialog when upload button is clicked
    uploadButton.addEventListener('click', () => {
        fileInput.click();
    });

    // Open file dialog when overlay button is clicked
    overlayUploadButton.addEventListener('click', () => {
        fileInput.click();
    });

    // Handle file selection
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImageUpload(file);
        }
    });

    // Handle drag over
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.classList.add('drag-over');
    });

    // Handle drag leave
    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');
    });

    // Handle drop
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');

        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImageUpload(file);
        } else {
            alert('Please drop a valid image file.');
        }
    });

    // Function to handle image upload and preview
    function handleImageUpload(file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            // Set the image preview source
            imagePreview.src = e.target.result;

            // Add class to show image is uploaded
            uploadArea.classList.add('has-image');

            // Update file input files (so we can re-use the same input)
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files;

            // showNotification('Image uploaded successfully!');
        };

        reader.onerror = function() {
            alert('Error reading the image file. Please try again.');
        };

        reader.readAsDataURL(file);
    }

    // Function to show notification
    function showNotification(message) {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.upload-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'upload-notification';
        notification.textContent = message;
        notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background-color: var(--accent-color);
                    color: white;
                    padding: 15px 25px;
                    border-radius: 5px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    z-index: 1000;
                    font-weight: bold;
                    animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
                `;

        // Add keyframes for animation
        const style = document.createElement('style');
        style.textContent = `
                    @keyframes slideIn {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes fadeOut {
                        from { opacity: 1; }
                        to { opacity: 0; }
                    }
                `;
        document.head.appendChild(style);

        document.body.appendChild(notification);

        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }

    setTimeout(() => {
        imagePreview.src = 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        uploadArea.classList.add('has-image');
    }, 1000);
});