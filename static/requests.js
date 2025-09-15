// This file handles the navigation for the document request page.

// Helper function to navigate to a new URL
function navigateTo(url) {
    console.log(`Navigating to ${url}...`);
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for the navigation bar buttons
    document.getElementById('home-btn').addEventListener('click', () => {
        navigateTo('..//docs/admin_dashboard.html');
    });

    document.getElementById('back-btn').addEventListener('click', () => {
        navigateTo('..//docs/admin_dashboard.html');
    });

    document.getElementById('profile-btn').addEventListener('click', () => {
        navigateTo('..//docs/admin_profile.html');
    });

    // Add event listeners for the document request cards
    document.getElementById('job-seeker-btn').addEventListener('click', () => {
        // You can link to a specific request form here
        console.log('User wants to request a Job Seeker Certificate.');
        window.location.href = '..//docs/job_seeker_request.html'; // Example
    });
    
    document.getElementById('solo-parent-btn').addEventListener('click', () => {
        console.log('User wants to request a Solo-Parent Certificate.');
        window.location.href = '..//docs/solo_parent_request.html'; // Example
    });

    document.getElementById('indigency-btn').addEventListener('click', () => {
        console.log('User wants to request an Indigency Certificate.');
        window.location.href = '..//docs/indigency_request.html'; // Example
    });

    document.getElementById('business-clearance-btn').addEventListener('click', () => {
        console.log('User wants to request a Barangay Business Clearance.');
        window.location.href = '..//docs/business_clearance_request.html'; // Example
    });

    document.getElementById('barangay-cert-btn').addEventListener('click', () => {
        console.log('User wants to request a Barangay Certificate.');
        window.location.href = '..//docs/barangay_cert_request.html'; // Example
    });
});
